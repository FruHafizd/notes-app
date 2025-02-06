class NoteList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.notesData = [];
    this.filteredNotes = [];
  }

  set notes(notes) {
    this.notesData = notes;
    this.filteredNotes = notes;
    this.saveNotes();
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const activeNotes = this.filteredNotes.filter((note) => !note.archived);
    const archivedNotes = this.filteredNotes.filter((note) => note.archived);

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin-top: 2rem;
        }
        
        .note-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
          padding: 1rem;
        }
      </style>
      <div class="note-list">
        ${activeNotes
          .map(() => `<note-item></note-item>`)
          .join("")}
      </div>
    `;

    this.shadowRoot
      .querySelectorAll(".note-list note-item")
      .forEach((noteItem, index) => {
        noteItem.note = activeNotes[index];
      });
  }

  handleAdd(event) {
    const newNote = event.detail;
    this.notesData = [newNote, ...this.notesData];
    this.filteredNotes = this.notesData;
    this.saveNotes();
    this.render();
  }

  saveNotes() {
    localStorage.setItem("notesData", JSON.stringify(this.notesData));
  }
}

customElements.define("note-list", NoteList);