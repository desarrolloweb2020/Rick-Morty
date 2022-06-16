/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, css} from 'lit-element';
const URL_ON_ACCESS = "home"

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        background-color: #3483b3;
        display: block;
        border: solid 1px gray;
        padding: 16px;
        width: 20%;
        height: 50vh;
        margin: auto;
      }
      .etiqueta{
        color: white;
        text-align: center;
      }

      .form-group{
        text-align: center;
        width: 100%;
      }

      .form-control{
        width:80%;
        height: 30px;
        margin: 5px;
      }

      .btn-primary{
        width:83%;
        height: 30px;
        margin: 5px;
        
      }

     
    `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: {type: String},

      /**
       * The number of times the button has been clicked.
       */
      count: {type: Number},
    };
  }

  constructor() {
    super();
    
  }

  submitForm(e) {
    e.preventDefault(); 
    
     window.location = URL_ON_ACCESS;
      
    
  }//submit

  render() {
    return html`
    <form @submit=${this.submitForm}>
  <h1 class="etiqueta">Bienvenido</h1>
  <div class="form-group">
    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    
  </div>
  <div class="form-group">
    
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  
  <div class="form-group"><button type="submit" class="btn-primary" @click=${this._onClick}>Ingresar</button></div>
</form>
    
      
    `;
  }

  _onClick() {
    console.log("Aceptar")
  }
}

window.customElements.define('my-element', MyElement);
