export default{
    showContact(){
        const ws = new Worker("/js/WsMySpamton.js", {type: "module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "displayContact", data: this.data})
        id = [".contenedorGalactico"]
        ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==0) ? ws.terminate(): count++; 
        if (count <= 1) {
            let botones = document.querySelectorAll("#btonFinal");
            botones.forEach(boton => boton.addEventListener("click", (event) => {;
                e.preventDefault();
                modal.classList.add('modal--show');
            }))
            const modal = document.querySelector('.modal');
            const closeModal = document.querySelector('.modal__close');
            closeModal.addEventListener('click', (e)=>{
                e.preventDefault();
                modal.classList.remove('modal--show');
            });
        }
        }); 
    }
}

function Modal() {
    
}