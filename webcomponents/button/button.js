import { LitElement, css, html } from 'lit-element';

class Button extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      label: String
    };
  }

  static get styles() {
    return css`
      .btn-filled {
        background-color: #BED23C;
        border: 0;
        border-radius: 5px;
        color: #FFF;
        cursor: pointer;
        height: 32px;
        margin: 24px 0 16px;
        width: 100%;
      }
      .btn-filled:focus {
        outline: none;
      }
    `;
  }

  render() {
    return html`
    <button class="btn-filled" @click="${this.submit}">${this.label}</button>`;
  }

  submit() {
    // eslint-disable-next-line no-undef
    document.querySelector('.form').requestSubmit();
  }
}

/* eslint-disable-next-line */
customElements.define('wc-button', Button);
