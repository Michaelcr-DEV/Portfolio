const footer = document.createElement("footer");

footer.innerHTML = `
       <div class="container text-center py-4 border-top mt-5">

        <div class="d-flex justify-content-center gap-4 mb-3">
        <a href="https://github.com/Michaelcr-DEV" target="_blank class="text-dark">
            <i class="bi bi-github fs-3"></i>
        </a>

        <a href="https://www.linkedin.com/in/michaelcastrodev" target="_blank" class="text-dark">
            <i class="bi bi-linkedin fs-3"></i>
        </a>

        <a href="mailto:michael.castro.romeroo@gmail.com">
            <i class="bi bi-envelope-fill fs-3"></i>
        </a>
    </div>
    <p class="mb-0 text-muted">
        © 2026 Michael Castro Romero. Todos los derechos reservados.
    </p>

</div>
`;

document.getElementById("footerContainer").appendChild(footer);