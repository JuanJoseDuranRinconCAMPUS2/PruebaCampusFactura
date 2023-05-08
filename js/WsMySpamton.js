export let wsMySpamton ={
    displayContact(p1){
        return`
        <main>
            <div class="contenedor">
                <div class="Reclutas">
                    <div class="Reclutas-imagen">
                        <img src="./img/Falcon.png" alt="ImgBonita;3" width="50px">
                    </div>
                    <div class="Reclutas-info">
                        <div class="nombre-contenedor">
                            <h2 class="Reclutas-nombre">Tecnologia</h2>
                            <p>Si tienes alguna duda acerca de nuestros proyectos e investigaciones no dudes en ¡escribirnos!</p><br>
                            <p>TowerZenith2011@gmail.com</p><br>
                        </div>
                        <button class="btn1" id="btonFinal">
                                Mensaje!
                        </button>
                    </div>
                </div>
                <div class="Reclutas">
                    <div class="Reclutas-imagen">
                        <img src="./img/logotipo.png" alt="ImgBonita;3" width="50px">
                    </div>
                    <div class="Reclutas-info">
                        <div class="nombre-contenedor">
                            <h2 class="Reclutas-nombre">Investigacion</h2>
                            <p>¿Te gustaria conocer nuestras instalaciones?, Pues ¡estas de suerte!, tenemos atencion todos los dias en nuestro centro de investigacion
                            Aqui esta la direccion</p><br>
                            <p>Km 4, Anillo Vial, Bucaramanga, Santander</p><br>
                        </div>
                        <button class="btn1" id="btonFinal">
                                Mensaje!
                        </button>
                    </div>
                </div>
                <div class="Reclutas">
                    <div class="Reclutas-imagen">
                        <img src="./img/Zenith.webp" alt="ImgBonita;3" width="50px">
                    </div>
                    <div class="Reclutas-info">
                        <div class="nombre-contenedor">
                            <h2 class="Reclutas-nombre">Futuro</h2>
                            <p>
                                ¡El futuro esta en las manos de todos los que quieran aprender sobre tecnologias, si te gustaria aprender mas sobre nosotros y sobre nuestros
                                Astro-Developers recuerdar entrar a nuestras redes sociales. ¡Te Estamos Esperando!
                            </p><br>
                            <p>Telefono: +57 315235#####</p><br>
                        </div>
                        <button class="btn1" id="btonFinal">
                                Mensaje!
                        </button>
                    </div>
                </div>
            </div>
        </main>
    `
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMySpamton[`${e.data.module}`](e.data.data));
})