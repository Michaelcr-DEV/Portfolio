const nav = document.createElement("nav");


    nav.innerHTML = `
    <div id="navBar" class="d-flex gap-3 m-3 justify-content-end">
            <a class="text-decoration-none" href="./index.html">Inicio</a>
            <a class="text-decoration-none" href="./aboutme.html">Acerca de mi</a>
            <a class="text-decoration-none" href="./projects.html">Proyectos</a>
            <a class="text-decoration-none" href="./contact.html">Contacto</a>
    </div>
    `;
document.getElementById("navBarContainer").appendChild(nav);


