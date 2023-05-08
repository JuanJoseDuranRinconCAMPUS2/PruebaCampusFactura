
export default{
    showInicio(){
        const ws = new Worker("/js/wsMySection.js", {type: "module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "displayInicio", data: this.data})
        id = [".contenedorGalactico"]
        ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==0) ? ws.terminate(): count++; 
        });
    }
}
