import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import './node_modules/@haxtheweb/rpg-character/rpg-character.js';

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
    this.seed = "000000000";
    this.accessories = 0;
    this.base = 0;
    this.face = 0;
    this.faceItem = 0;
    this.hair = 0;
    this.pants = 0;
    this.shirt = 0;
    this.skin = 0;
    this.hatColor = 0;
    this.hat = "none";
    this.fire = false; 
    this.walking = false; 
    this.circle = false; 
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
      hatColor: { type: Number },
      hat: { type: String },
      fire: { type: Boolean },
      walking: { type: Boolean },
      circle: { type: Boolean },
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
        display: grid;
        grid-template-columns: 1fr 1fr; /* Two equal columns */
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 400px; /* Increased height for the preview area */
        max-height: 600px; /* Optional max-height for scaling */
        max-width: 600px; /* Optional max-width for scaling */
      }
      .controls {
        flex: 1;
        max-width: 600px; /* Ensure the controls area doesn't stretch too much */
      }
    `];
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="character-view">
          <h3>${this.title}</h3>
          <rpg-character
            accessories="${this.accessories}"
            base="${this.base}"
            face="${this.face}"
            faceitem="${this.faceItem}"
            hair="${this.hair}"
            pants="${this.pants}"
            shirt="${this.shirt}"
            skin="${this.skin}"
            hatColor="${this.hatColor}"
            hat="${this.hat}"
            ?fire="${this.fire}"
            ?walking="${this.walking}"
            ?circle="${this.circle}"
          ></rpg-character>
          <div class="seed-display">
            <strong>Seed:</strong> ${this.seed}
          </div>
        </div>
        <div class="controls">
          <label for="accessories">Accessories:</label>
          <input type="number" min="0" max="9" value="${this.accessories}" @input="${this.updateProperty('accessories')}">
  
          <label for="base">Base:</label>
          <input type="number" min="0" max="9" value="${this.base}" @input="${this.updateProperty('base')}">
  
          <label for="face">Face:</label>
          <input type="number" min="0" max="9" value="${this.face}" @input="${this.updateProperty('face')}">
  
          <label for="faceItem">Face Item:</label>
          <input type="number" min="0" max="9" value="${this.faceItem}" @input="${this.updateProperty('faceItem')}">
  
          <label for="hair">Hair:</label>
          <input type="number" min="0" max="9" value="${this.hair}" @input="${this.updateProperty('hair')}">
  
          <label for="pants">Pants:</label>
          <input type="number" min="0" max="9" value="${this.pants}" @input="${this.updateProperty('pants')}">
  
          <label for="shirt">Shirt:</label>
          <input type="number" min="0" max="9" value="${this.shirt}" @input="${this.updateProperty('shirt')}">
  
          <label for="skin">Skin:</label>
          <input type="number" min="0" max="9" value="${this.skin}" @input="${this.updateProperty('skin')}">
  
          <label for="hatColor">Hat Color:</label>
          <input type="number" min="0" max="9" value="${this.hatColor}" @input="${this.updateProperty('hatColor')}">
  
          <label for="hat">Hat:</label>
          <select value="${this.hat}" @change="${this.updateProperty('hat')}">
            <option value="none" ?selected="${this.hat === 'none'}">None</option>
            <option value="bunny" ?selected="${this.hat === 'bunny'}">Bunny</option>
            <option value="coffee" ?selected="${this.hat === 'coffee'}">Coffee</option>
            <option value="construction" ?selected="${this.hat === 'construction'}">Construction</option>
            <option value="cowboy" ?selected="${this.hat === 'cowboy'}">Cowboy</option>
            <option value="education" ?selected="${this.hat === 'education'}">Education</option>
            <option value="knight" ?selected="${this.hat === 'knight'}">Knight</option>
            <option value="ninja" ?selected="${this.hat === 'ninja'}">Ninja</option>
            <option value="party" ?selected="${this.hat === 'party'}">Party</option>
            <option value="pirate" ?selected="${this.hat === 'pirate'}">Pirate</option>
            <option value="watermelon" ?selected="${this.hat === 'watermelon'}">Watermelon</option>
          </select>
  
          <label for="fire">On Fire:</label>
          <input type="checkbox" .checked="${this.fire}" @change="${this.updateProperty('fire')}">
  
          <label for="walking">Walking:</label>
          <input type="checkbox" .checked="${this.walking}" @change="${this.updateProperty('walking')}">
  
          <label for="circle">Circle:</label>
          <input type="checkbox" .checked="${this.circle}" @change="${this.updateProperty('circle')}">
  
        </div>
      </div>
    `;
  }

  updateSeed() {
    // Update seed based on current property values
    this.seed = [
      this.accessories,
      this.base,
      this.face,
      this.faceItem,
      this.hair,
      this.pants,
      this.shirt,
      this.skin,
      this.hatColor,
    ].join("");
  }

  updateProperty(property) {
    return (e) => {
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      this[property] = value;
      this.updateSeed();
    };
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(RpgMe.tag, RpgMe);