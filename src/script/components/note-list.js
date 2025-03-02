class NoteList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.notesData = [];
  }

  set notes(notes) {
    this.notesData = notes;
    this.saveNotes();
    this.render();
  }

  connectedCallback() {
    this.loadNotes();
  }

  loadNotes() {
    const storedNotes = localStorage.getItem("notesData");
    if (storedNotes) {
      this.notesData = JSON.parse(storedNotes);
    }
    this.render();
  }

  render() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = `
      <style>
        .note-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
          padding: 1rem;
        }
      </style>

      <div class="note-list">
        ${this.notesData.length > 0 
          ? this.notesData.map(() => `<note-item></note-item>`).join("")
          : "<p>Tidak ada catatan aktif.</p>"
        }
      </div>
    `;

    this.shadowRoot.querySelectorAll("note-item").forEach((noteItem, index) => {
      noteItem.note = this.notesData[index];
      noteItem.addEventListener("delete-note", (event) => this.handleDelete(event.detail.noteId));
    });
  }

  handleDelete(noteId) {
    this.notesData = this.notesData.filter(note => note.id !== noteId);
    this.saveNotes();
    this.render();
  }

  saveNotes() {
    localStorage.setItem("notesData", JSON.stringify(this.notesData));
  }
}

customElements.define("note-list", NoteList);
