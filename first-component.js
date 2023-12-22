import { LitElement, css, html } from "lit";

export class FirstComponent extends LitElement {
  static get styles() {
    return css`
      p {
        color: purple;
      }
    `;
  }
  static properties = {
    checked: {},
  };

  constructor() {
    super();
    this.checked = true;
  }

  toggle() {
    this.checked = !this.checked;
  }
  render() {
    return html`<p>Hello World</p>
      <label for="toggle">
        <input id="toggle" type="checkbox" @change=${this.toggle} />
        <span>${this.checked}</span>
      </label> `;
  }
}

customElements.define("first-component", FirstComponent);
