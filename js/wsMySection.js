export let wsMySection = {
    displayInicio(p1){
        return`
        <div id="introGalactico">
            <div class="introGalactico-img">
                <img src="./img/logo.png" width="600px">
            </div>
            <div class="introGalactico-p" href="">
                <img src="./img/ZenithT.png">
                <p>
                El centro aeroespacial tower zenith posee en su programa
                aeroespacial 3 áreas de entrenamiento para sus astro-
                developers que son los responsables de desarrollar el core de
                sus equipos de alta tecnología que son los encargados de
                controlar cada espacio de sus naves aeroespaciales.
                </p>
                <p>
                    En esta pagina podras pedir la data de los nuevos reclutos y luego poder clasificarlos.
                    Sin nada mas que decir ¡comenzemos este viaje galactico!. preciona el boton de abajo o ve a la
                    seccion de registro para comenzar a armas el equipo de los ¡Astro-Developers
                </p>
            </div>
        </div>
        `
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMySection[`${e.data.module}`](e.data.data));
})