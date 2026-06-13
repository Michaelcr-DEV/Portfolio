const nav = document.createElement("nav");


    nav.innerHTML = `
    <div id="navBar" class="d-flex gap-3 m-3 justify-content-end">
            <a class="text-decoration-none" href="./index.html">Inicio</a>
            <a class="text-decoration-none" href="./aboutme.html">About me</a>
            <a class="text-decoration-none" href="./projects.html">Projects</a>
            <a class="text-decoration-none" href="./contact.html">Contact</a>
    </div>
    `;
document.getElementById("navBarContainer").appendChild(nav);


