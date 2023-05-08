
let OperacionTotal=async ()=>{
    const url = 'http://localhost:41987/Reclutas';
    try {
        const response = await fetch(url);
        let result = await response.json();    
        result.forEach(val => {
            tableData(val)
           
        });
        } catch (error) {
                console.error(error);
        }
}

let OperacionTeam=async (team)=>{
    const url = `http://localhost:41987/reclutas?id_Team_gte=${team}&id_Team_lte=${team}`;
    try {
        const response = await fetch(url);
        let result = await response.json();    
        result.forEach(val => {
            tableTeam(val)   
        });
        } catch (error) {
                console.error(error);
        }
}

let OperacionMenores=async (team)=>{
    const url = `http://localhost:41987/reclutas?edad_lte=18`;
    try {
        const response = await fetch(url);
        let result = await response.json();    
        result.forEach(val => {
            tableMenores(val)
        });
        } catch (error) {
                console.error(error);
        }
}


function SistemaBotones() {
    let BotonTeam = document.querySelectorAll(".btn1");
    BotonTeam.forEach(boton => boton.addEventListener("click", (event) => {
                    const botonId = event.currentTarget.id;
                    OperacionTeam(botonId);
                 }));
}
function tableData(Recluta){
    let myTbodyData = document.querySelector("#myTbodyData");
    
    myTbodyData.insertAdjacentHTML("beforeend", `
    <tr id="atributos">
        <td>${Recluta.nombre}</td>
        <td>${Recluta.edad}</td>
        <td>${Recluta.telefono}</td>
        <td>${Recluta.CC}</td>
        <td>${Recluta.email}</td>
        <td>${Recluta.id_Team}</td>
    </tr>
    `)
}
function tableTeam(Recluta){
    let myTbodyTeam = document.querySelector("#myTbodyTeam");
    
    myTbodyTeam.insertAdjacentHTML("beforeend", `
    <tr id="atributos">
        <td>${Recluta.nombre}</td>
        <td>${Recluta.edad}</td>
        <td>${Recluta.telefono}</td>
        <td>${Recluta.CC}</td>
        <td>${Recluta.email}</td>
        <td>${Recluta.id_Team}</td>
    </tr>
    `)
}
function tableMenores(Recluta){
    let myTbodyMenores = document.querySelector("#myTbodyEdad");
    
    myTbodyMenores.insertAdjacentHTML("beforeend", `
    <tr id="atributos">
        <td>${Recluta.nombre}</td>
        <td>${Recluta.edad}</td>
        <td>${Recluta.telefono}</td>
        <td>${Recluta.CC}</td>
        <td>${Recluta.email}</td>
        <td>${Recluta.id_Team}</td>
    </tr>
    `)
}

OperacionTotal();
OperacionMenores();
SistemaBotones();

export default{
    showInicio(){
        const ws = new Worker("/js/wsMySolicitudes.js", {type: "module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "displayCore", data: this.data})
        id = [".contenedorGalactico"]
        ws.addEventListener("message", (e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==0) ? ws.terminate(): count++; 
        });
    }
}
