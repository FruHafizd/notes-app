class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const formType = this.getAttribute('data-form-type') || 'Add Note';

    this.shadowRoot.innerHTML = `
      <style>
        .form-group {
          display: grid;
          gap: 0.5rem;
        }

        input, textarea {
          width: 100%;
          padding: 0.8rem;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        input:focus, textarea:focus {
          border-color: #3498db;
          box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.1);
          outline: none;
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        .button-container {
          display: grid;
          justify-content: center;
          margin-top: 1rem;
        }

        button {
          padding: 0.8rem 2rem;
          background: linear-gradient(to right, #2c3e50, #3498db);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        button:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        button:active {
          transform: translateY(0);
        }

        .error {
          color: #e74c3c;
          font-size: 0.875rem;
          margin-top: 0.25rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .form-container {
            padding: 1rem;
            margin: 1rem;
          }
        }
      </style>

      <div class="form-container">
        <form>
          <div class="form-group">
            <input 
              type="text" 
              id="title" 
              placeholder="Enter note title..." 
              required 
            />
            <div id="title-error" class="error"></div>
          </div>

          <div class="form-group">
            <textarea 
              id="body" 
              placeholder="Enter note content..." 
              required
            ></textarea>
            <div id="body-error" class="error"></div>
          </div>

          <div class="button-container">
            <button type="submit">${formType}</button>
          </div>
        </form>
      </div>
    `;

    const form = this.shadowRoot.querySelector("form");
    const titleInput = this.shadowRoot.querySelector("#title");
    const bodyInput = this.shadowRoot.querySelector("#body");
    const titleError = this.shadowRoot.querySelector("#title-error");
    const bodyError = this.shadowRoot.querySelector("#body-error");

    const validateField = (input, errorElement, fieldName) => {
      if (input.value.trim() === "") {
        errorElement.textContent = `${fieldName} is required.`;
        return false;
      }
      errorElement.textContent = "";
      return true;
    };

    titleInput.addEventListener("input", () => {
      validateField(titleInput, titleError, "Title");
    });

    bodyInput.addEventListener("input", () => {
      validateField(bodyInput, bodyError, "Body");
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const isTitleValid = validateField(titleInput, titleError, "Title");
      const isBodyValid = validateField(bodyInput, bodyError, "Body");

      if (!isTitleValid || !isBodyValid) return;

      const note = {
        id: `notes-${Date.now()}`,
        title: titleInput.value.trim(),
        body: bodyInput.value.trim(),
        createdAt: new Date().toISOString(),
        archived: false,
      };

      this.dispatchEvent(new CustomEvent("add-note", { detail: note }));
      form.reset();
    });
  }
}

customElements.define("note-form", NoteForm);