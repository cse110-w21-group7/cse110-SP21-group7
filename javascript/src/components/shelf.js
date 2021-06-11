import{IndexedDBWrapper}from"../indexedDB/IndexedDBWrapper.js";const myTemplate=document.createElement("template");myTemplate.innerHTML='\n\n  <style>\n    @import url(\'https://fonts.googleapis.com/css2?family=Merriweather+Sans&display=swap\');\n\n    :host {\n      display: block;\n      height: 175px;\n      font-family: \'Merriweather Sans\', sans-serif;\n    }\n\n    .shelf-label {\n      display: none;\n      border-bottom: 2px solid grey;\n      // display: flex;\n      align-items: center;\n      width: 100%;\n      height: 20%;\n      color: grey;\n      font-size: 24px;\n    }\n\n    #label {\n      padding-left: 12.5px;\n    }\n\n    .shelf-content {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n      width: 100%;\n      height: 80%;\n    }\n  </style>\n  <div class="shelf-label"><span id="label"></span></div>\n  <div class="shelf-content"></div>\n';class Shelf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(myTemplate.content.cloneNode(!0)),this.books=this.createBooks();const e=this;new IndexedDBWrapper("experimentalDB",1).transaction((t=>{const n=t.target.result.transaction(["currentLogStore"],"readonly").objectStore("currentLogStore"),o=n.getAll();o.onsuccess=e=>{o.result},n.openCursor().onsuccess=function(t){const n=t.target.result;if(n){const t=n.value.$defs["daily-logs"];e._books.forEach(((n,o)=>{e.hasEntryForYearMonth(t,o)&&n.makeInteractive()}))}}}))}hasEntryForYearMonth(e,t){const n=Number(this.label);return!(void 0===e.find((e=>{const o=Number(e.properties.date.time),s=new Date(o);return s.getFullYear()===n&&s.getMonth()===t})))}get label(){return this.getAttribute("label")}set label(e){this.setAttribute("label",e);this.shadowRoot.querySelector("#label").textContent=e,this.updateBooks()}get books(){return this._books}set books(e){const t=this.shadowRoot.querySelector(".shelf-content");for(let n=0;n<e.length;n++){const o=e[n];t.append(o),o.title=n+1,o.shelf=this.label}this._books=e}createBooks(){const e=[];for(let t=0;t<12;t++){const t=document.createElement("book-item");e.push(t)}return e}updateBooks(){this.books.forEach((e=>{e.shelf=this.label}))}}customElements.define("book-shelf",Shelf);export{Shelf};