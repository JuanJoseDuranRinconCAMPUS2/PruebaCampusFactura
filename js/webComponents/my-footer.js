import config from "./config.js";

export default class myFooter extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await(await fetch(config.uri(myFooter.url))).text()
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }
 
    connectedCallback(){
        Promise.resolve(myFooter.components()).then(html =>{
            this.shadowRoot.innerHTML = html;
        })
    }
}

customElements.define(config.name(myFooter.url), myFooter)