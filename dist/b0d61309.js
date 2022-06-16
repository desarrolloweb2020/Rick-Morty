import{L as e,c as t,h as i}from"./2a772ea2.js";class a extends e{static get styles(){return t`:host{display:block;align-items:baseline}.container{text-align:center}get-data{display:none}.card{background:#fff;border-radius:2px;display:inline-block;height:500px;width:200px;margin:1rem;position:relative;text-align:center;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.card img{width:70%}`}static get properties(){return{name:{type:String},count:{type:Number}}}constructor(){super(),this.wiki=[]}static get properties(){return{wiki:{type:Array}}}firstUpdated(){console.log("corecto"),this.fetchRickandMortyJSON().then((e=>{this._dataFormat(e)}))}async fetchRickandMortyJSON(){const e=await fetch("https://rickandmortyapi.com/api/character");return await e.json()}_dataFormat(e){let t=[];e.results.forEach((e=>{t.push({image:e.image,name:e.name,species:e.species,type:e.type,status:e.status,origin:e.origin.url,episode:e.episode})})),this.wiki=t,console.log(t)}render(){return i` ${this.dateTemplate} `}get dateTemplate(){return i` ${this.wiki.map((e=>i` <div class="card"> <div class="card-content"> <h2>${e.name}</h2> <img src="${e.image}"> <p>${e.species}</p> <p>${e.type}</p> <p>${e.status}</p> <a href="${e.origin}">Origen</a> <a href="${e.episode[0]}">Episodios</a> </div> </div> `))}`}}window.customElements.define("home-element",a);export{a as Home};