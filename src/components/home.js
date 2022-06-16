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
const URL_ON_ACCESS = "/admin/dashboard"

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Home extends LitElement {
  static get styles() {
    return css`
    :host{
      display: block;
      align-items:baseline

  }
  .container{
      text-align:center;
  }
  get-data{
      display:none;
  }
  .card{
      background: #fff;
      border-radius:2px;
      display: inline-block;
      height:500px;
      width: 200px;
      margin: 1rem;
      position: relative;
      text-align: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  }
  .card img{
      width: 70%;
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
    
    this.wiki=[];
   
  } 

  static get properties(){
    return{
      wiki: {type: Array}
    }
  }
 
  /* ciclo de vida de litelement , respecto a funciones*/ 
  firstUpdated(){
    console.log("corecto");   
    
   /* ejecuta la funcion que se conecta a la api */
    this.fetchRickandMortyJSON().then(data => {
      this._dataFormat(data) // fetched movies
      });
  
   

}
  

/* funcion que se conecta a la api */
/* fetch por defecto es get */
  async fetchRickandMortyJSON() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    return data;
    }
  

    _dataFormat(data){
      let characters =[];

      data["results"].forEach((character)=>{
          characters.push({
              image:character.image,
              name:character.name,
              species:character.species,
              type:character.type,
              status:character.status,
              origin:character.origin.url,
              episode:character.episode,
          })
      })
      this.wiki=characters;
      console.log(characters);
  }


  render() {
    return html`
   
    ${this.dateTemplate}  
    `;
  }

  /* map permite iterar y transformar cada elemento */
  get dateTemplate(){
    return html` ${this.wiki.map(character => html`
    <div class="card">
        <div class="card-content">
            <h2>${character.name}</h2>
            <img src="${character.image}">
            <p>${character.species}</p>
            <p>${character.type}</p>
            <p>${character.status}</p>
            <a href="${character.origin}">Origen</a>
            <a href="${character.episode[0]}">Episodios</a>
        </div>
    </div>
    `)}`;
}


}

window.customElements.define('home-element', Home);
