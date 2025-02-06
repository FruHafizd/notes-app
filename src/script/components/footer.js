class Footer extends HTMLElement {
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
          .footer-container {
            display: grid;
            grid-template-columns: 1fr;
            background: linear-gradient(135deg, #2c3e50, #3498db);
            color: white;
            padding: 1.5rem;
            box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
          }
  
          .copyright {
            text-align: center;
            font-size: 0.9rem;
            color: #ecf0f1;
          }
  
          .copyright p {
            margin: 0;
          }
  
          @media (max-width: 768px) {
            .footer-container {
              padding: 1rem;
            }
          }
        </style>
  
        <footer class="footer-container">
          <div class="copyright">
            <p>&copy; ${new Date().getFullYear()} FruHa. All rights reserved.</p>
          </div>
        </footer>
      `;
    }
  }
  
  customElements.define("footer-bar", Footer);