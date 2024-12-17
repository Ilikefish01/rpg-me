import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import './node_modules/@haxtheweb/rpg-character/rpg-character.js';
import 'wired-elements';

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
    this.initializeFromUrl();
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

  initializeFromUrl() {
    const params = new URLSearchParams(window.location.search);
    if (params.has("seed")) {
      this.seed = params.get("seed");
    }
    if (params.has("hat")) {
      this.hat = params.get("hat");
    }
    if (params.has("fire")) {
      this.fire = params.get("fire") === "true";
    }
    if (params.has("literalseed")) {
      this.literalseed = params.get("literalseed") === "true";
    }
    if (params.has("walking")) {
      this.walking = params.get("walking") === "true";
    }
    if (params.has("circle")) {
      this.circle = params.get("circle") === "true";
    }
    // Decode seed into character properties
    if (this.seed.length === 9) {
      const seedArray = Array.from(this.seed).map(Number);
      [
        this.accessories,
        this.base,
        this.face,
        this.faceItem,
        this.hair,
        this.pants,
        this.shirt,
        this.skin,
        this.hatColor,
      ] = seedArray;
    }
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
            <br />
            <wired-button @click="${this.generateShareLink}">Generate Share Link</wired-button>
          </div>
        </div>
        <div class="controls">
          <label for="accessories">Accessories:</label>
          <wired-input type="number" min="0" max="9" value="${this.accessories}" @input="${this.updateProperty('accessories')}"></wired-input>
  
          <label for="base">Base:</label>
          <wired-input type="number" min="0" max="9" value="${this.base}" @input="${this.updateProperty('base')}"></wired-input>
  
          <label for="face">Face:</label>
          <wired-input type="number" min="0" max="9" value="${this.face}" @input="${this.updateProperty('face')}"></wired-input>
  
          <label for="faceItem">Face Item:</label>
          <wired-input type="number" min="0" max="9" value="${this.faceItem}" @input="${this.updateProperty('faceItem')}"></wired-input>
  
          <label for="hair">Hair:</label>
          <wired-input type="number" min="0" max="9" value="${this.hair}" @input="${this.updateProperty('hair')}"></wired-input>
  
          <label for="pants">Pants:</label>
          <wired-input type="number" min="0" max="9" value="${this.pants}" @input="${this.updateProperty('pants')}"></wired-input>
  
          <label for="shirt">Shirt:</label>
          <wired-input type="number" min="0" max="9" value="${this.shirt}" @input="${this.updateProperty('shirt')}"></wired-input>
  
          <label for="skin">Skin:</label>
          <wired-input type="number" min="0" max="9" value="${this.skin}" @input="${this.updateProperty('skin')}"></wired-input>
  
          <label for="hatColor">Hat Color:</label>
          <wired-input type="number" min="0" max="9" value="${this.hatColor}" @input="${this.updateProperty('hatColor')}"></wired-input>
  
          <!-- <label for="hat">Hat:</label>
          <wired-combo id ="hat" selected="${this.hat}" @change="${this.updateProperty('hat')}">
            <wired-item value="none">None</wired-item>
            <wired-item value="bunny">Bunny</wired-item>
            <wired-item value="coffee">Coffee</wired-item>
            <wired-item value="construction">Construction</wired-item>
            <wired-item value="cowboy">Cowboy</wired-item>
            <wired-item value="education">Education</wired-item>
            <wired-item value="knight">Knight</wired-item>
            <wired-item value="ninja">Ninja</wired-item>
            <wired-item value="party">Party</wired-item>
            <wired-item value="pirate">Pirate</wired-item>
            <wired-item value="watermelon">Watermelon</wired-item>
          </wired-combo>
           Right now, the drop down does not work if I use wiredJS so the one below is without the WiredJS-->

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
          <wired-checkbox id="fire" .checked="${this.fire}" @change="${this.updateProperty('fire')}"></wired-checkbox>
    
          <label for="walking">Walking:</label>
          <wired-checkbox id="walking" .checked="${this.walking}" @change="${this.updateProperty('walking')}"></wired-checkbox>
  
          <label for="circle">Circle:</label>
          <wired-checkbox id="circle" .checked="${this.circle}" @change="${this.updateProperty('circle')}"></wired-checkbox>
  
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
      const value = e.detail?.value ?? (e.target.checked !== undefined ? e.target.checked : e.target.value);
      this[property] = value;
      this.updateSeed();
    };
  }  

  generateShareLink() {
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?seed=${this.seed}&hat=${this.hat}&fire=${this.fire}&walking=${this.walking}&circle=${this.circle}&literalseed=${this.literalseed}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("Link copied to clipboard: " + shareUrl);
    }).catch(() => {
      alert("Failed to copy link to clipboard. Here it is: " + shareUrl);
    });
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(RpgMe.tag, RpgMe);