class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .header-container {
          display: grid;
          grid-template-columns: 1fr;
          background: linear-gradient(to right, #2c3e50, #3498db);
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .app-title {
          text-align: center;
          color: #ecf0f1;
          margin: 0;
          font-size: 2rem;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 1rem;
          }

          .app-title {
            font-size: 1.5rem;
          }
        }
      </style>

      <header class="header-container">
        <h1 class="app-title">Notes App</h1>
      </header>
    `;
  }
}

customElements.define("app-header", AppHeader);