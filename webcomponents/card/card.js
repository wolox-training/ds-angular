import { LitElement, css, html } from 'lit-element';
class Card extends LitElement {
  static get properties() {
    return {
      author: { type: String },
      title: { type: String },
      cover: { type: String }
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      .book {
        background-color: #FFF;
        box-shadow: 4px 4px 10px 0 rgba(0 0 0 / 0.5);
        display: flex;
        flex-direction: column;
        height: 260px;
        max-height: 100%;
        padding: 28px 28px 23px;
        transition: transform 0.2s;
      }

      .cover {
        height: 200px;
        max-height: 100%;
        max-width: 100%;
        width: 142px;
      }

      .title {
        font-size: 16px;
        font-weight: 700;
        margin: 12px 0 8px;
      }

      .author {
        color: #828282;
        font-size: 14px;
      }

      .book:hover {
        transform: scale(1.07);
      }
    `;
  }

  render() {
    return html`
      <div class="book">
        <img class="cover" src="${this.cover}" alt="Book cover" />
        <span class="title">${this.title}</span>
        <span class="author">${this.author}</span>
      </div>`;
  }
}

/* eslint-disable-next-line */
customElements.define('wc-card', Card);
