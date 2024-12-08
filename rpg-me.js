/**
 * Copyright 2024 Krittanat Kulsakdinun
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import './node_modules/@haxtheweb/rpg-character/rpg-character.js';
// import "wired-elements";

/**
 * `rpg-me`
 * 
 * @demo index.html
 * @element rpg-me
 */
export class RpgMe extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "rpg-me";
  }

  constructor() {
    super();
    this.title = "Make Your Character";
    this.seed = "1234567890";
    this.accessories = 1;
    this.base = 1;
    this.face = 1;
    this.faceItem = 1;
    this.hair = 1;
    this.pants = 1;
    this.shirt = 1;
    this.skin = 1;
    this.size = 300; // Default size
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      seed: { type: String },
      accessories: { type: Number },
      base: { type: Number },
      face: { type: Number },
      faceItem: { type: Number },
      hair: { type: Number },
      pants: { type: Number },
      shirt: { type: Number },
      skin: { type: Number },
      size: { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        display: flex;
        gap: 20px;
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--rpg-me-label-font-size, var(--ddd-font-size-s));
      }
      .controls {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 20px;
      }
      label {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 5px;
      }
      input, select {
        padding: 5px;
        font-size: 14px;
      }
      .character-view {
        flex: 1;
      }
      .controls {
        flex: 1;
        max-width: 300px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <div class="character-view">
          <h3>${this.title}</h3>
          <rpg-character
            seed="${this.seed}"
            accessories="${this.accessories}"
            base="${this.base}"
            face="${this.face}"
            faceitem="${this.faceItem}"
            hair="${this.hair}"
            pants="${this.pants}"
            shirt="${this.shirt}"
            skin="${this.skin}"
            style="height: ${this.size}px; width: ${this.size}px;"
          ></rpg-character>
        </div>
        <div class="controls">
          <label for="name">Seed:</label>
          <input type="number" value="${this.seed}" @input="${this.updateProperty('seed')}">

          <label for="accessories">Accessories:</label>
          <input type="number" min="1" max ="9" value="${this.accessories}" @input="${this.updateProperty('accessories')}">

          <label for="base">Base:</label>
          <input type="number" min="1" max ="2" value="${this.base}" @input="${this.updateProperty('base')}">

          <label for="face">Face:</label>
          <input type="number" min="1" max ="5" value="${this.face}" @input="${this.updateProperty('face')}">

          <label for="faceItem">Face Item:</label>
          <input type="number" min="1" max ="9" value="${this.faceItem}" @input="${this.updateProperty('faceItem')}">

          <label for="hair">Hair:</label>
          <input type="number" min="1" max ="9" value="${this.hair}" @input="${this.updateProperty('hair')}">

          <label for="pants">Pants:</label>
          <input type="number" min="1" max ="9" value="${this.pants}" @input="${this.updateProperty('pants')}">

          <label for="shirt">Shirt:</label>
          <input type="number" min="1" max ="9" value="${this.shirt}" @input="${this.updateProperty('shirt')}">

          <label for="skin">Skin:</label>
          <input type="number" min="1" max ="9" value="${this.skin}" @input="${this.updateProperty('skin')}">

          <label for="size">Size:</label>
          <input type="number" min="100" max="600" value="${this.size}" @input="${this.updateProperty('size')}">
        </div>
      </div>
    `;
  }

  updateProperty(property) {
    return (e) => {
      this[property] = e.target.value;
    };
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(RpgMe.tag, RpgMe);
