export let wsMySolicitudes ={
    displayCore(p1){
        return`
        <div id="introGalactico">
            <div class="introGalactico-img">
                <img src="./img/data.png" width="600px">
            </div>
            <div class="introGalactico-p" href="">
                <img src="./img/ZenithT.png">
                <p>
                A continuacion podras acceder a toda la data clasificada de los Astros-Developed. aqui podras ver todos los usaurios registrados hasta 
                clasificados segun tus cripterios. Sin nada mas que decir que Empiece este recorrido por la ¡Data Del Futuro!
                </p>
                <p>
                    En esta pagina podras consultar la data, asi que presta mucha atencion que todos los datos esten bien implementados
                </p>
            </div>
        </div>
        `
    },
 
}
self.addEventListener("message", (e)=>{
    postMessage(wsMySolicitudes[`${e.data.module}`](e.data.data));
})