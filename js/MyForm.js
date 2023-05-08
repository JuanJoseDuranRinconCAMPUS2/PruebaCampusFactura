import { newRecluta } from "./getReclutas.js";
import { deleteRecluta } from "./getReclutas.js";
import { deleteTeam, newTeam } from "./getTeam.js";
import { deleteSkill, newSkill } from "./getSkill.js";
import { deleteModulo, newModulo } from "./getModulo.js";
import { deleteNota, newNota } from "./getNotas.js";

function DataValues() {
    const MyFormR = document.querySelector("#myFormulario-Recluta");
    MyFormR.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        newRecluta(data)
        alert("Usuario Registrado, Ahora rellena los otros formularios por favor, para evitar errores de carga no vuelvas a enviar otro usuario hasta tener completo todos los formularios")
    })
    const MyFormT = document.querySelector("#myFormulario-Team");
    MyFormT.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        newTeam(data)
        alert("Team Registrado, Ahora rellena los otros formularios por favor, para evitar errores de carga no vuelvas a enviar otro usuario hasta tener completo todos los formularios")
    })
    const MyFormS = document.querySelector("#myFormulario-Skill");
    MyFormS.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        newSkill(data);
        alert("Skill Registrada, Ahora rellena los otros formularios por favor, para evitar errores de carga no vuelvas a enviar otro usuario hasta tener completo todos los formularios")
    });
    const MyFormM = document.querySelector("#myFormulario-Modulo");
    MyFormM.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        newModulo(data);
        console.log(data);
    })
    const MyFormN = document.querySelector("#myFormulario-Nota");
    MyFormN.addEventListener("submit", (e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        newNota(data)
    })
}

let ProductosModal =async ()=>{
    const url = 'http://localhost:41987/Reclutas';
    try {
        const response = await fetch(url);
        let result = await response.json();    
        result.forEach(val => {
            cards(val)
           
        });
        setTimeout(() => {
            let EliminarBoton = document.querySelectorAll(".btn3");
                EliminarBoton.forEach(boton => boton.addEventListener("click", (event) => {
                    const botonId = event.currentTarget.id;
                    let confirmar = confirm("¿Seguro quieres borrar este Recluta? :c");
                    if (confirmar) {
                        deleteRecluta(botonId)
                        deleteTeam(botonId)
                        deleteModulo(botonId)
                        deleteNota(botonId)
                        deleteSkill(botonId)
                        }
                 }));
        }, 1000);
        } catch (error) {
                console.error(error);
        }
}


ProductosModal()

function cards(Recluta){
    const ws = new Worker("/js/wsMyForm.js", {type: "module"});
    let id = [];
    let count= 0;
    ws.postMessage({module: "displayCard", data: Recluta})
    id = [".contenedor"]
    ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==0) ? ws.terminate(): count++; 
    });
}

export default{
    showForm(){
        const ProsemaCarga = new Promise((resolve, reject)=>{
            const ws = new Worker("/js/wsMyForm.js", {type: "module"});
            let id = [];
            let count= 0;
            ws.postMessage({module: "displayForm", data: this.data})
            id = [".contenedorGalactico"]
            ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==0) ? ws.terminate(): count++; 
            if (id.length == 1) {
                resolve();
            }
        });
            
            
        })
        ProsemaCarga.then(()=>{
            DataValues()
        })
        
    }
}
