class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  set note(note) {
    this._note = note;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  handleDelete() {
    this.dispatchEvent(new CustomEvent("delete-note", {
      detail: { noteId: this._note.id },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    if (!this._note) return;

    this.shadowRoot.innerHTML = `
      <style>
        .note-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem;
          border-radius: 6px;
          background: #f8f9fa;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .note-title {
          font-size: 1.2rem;
          font-weight: bold;
        }

        .note-body {
          font-size: 1rem;
          color: #555;
        }

        .button-container {
          display: flex;
          justify-content: flex-end;
        }

        .delete-btn {
          padding: 0.6rem 1.2rem;
          background: linear-gradient(to right, #e74c3c, #c0392b);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .delete-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      </style>

      <div class="note-card">
        <div class="note-title">${this._note.title}</div>
        <div class="note-body">${this._note.body}</div>
        <div class="button-container">
          <button class="delete-btn">Hapus</button>
        </div>
      </div>
    `;

    this.shadowRoot.querySelector(".delete-btn").addEventListener("click", () => this.handleDelete());
  }
}

customElements.define("note-item", NoteItem);