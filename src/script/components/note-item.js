class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  set note(note) {
    this.render(note);
  }

  render(note) {
    const createdAt = new Date(note.createdAt);
    const formattedDate = createdAt.toISOString().slice(0, 19).replace('T', ' ');

    this.shadowRoot.innerHTML = `
      <style>
        div {
          background: #fff;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        div:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }
        h3 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 10px;
        }
        p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .created-at {
          font-size: 0.85rem;
          color: #888;
        }
      </style>
      <div data-noteid="${note.id}">
        <h3>${note.title}</h3>
        <p>${note.body}</p>
        <span class="created-at">Created on: ${formattedDate}</span>
      </div>
    `;
  }
}

customElements.define("note-item", NoteItem);