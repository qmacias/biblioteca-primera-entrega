import Link from "./link.js"
import Libro from "./libro.js"

//Arreglar: Poner un boton en log_in.html para que el usuario pueda volver a index.html en caso de no querer ingresar, y ser invitado
//Arreglar: Poner un boton en sign_up.html para que el usuario pueda volver a index.html en caso de no querer registrarse, y ser invitado
document.addEventListener("DOMContentLoaded", function () {
    cargarLinks();
    cargarLibros();
});

function cargarLinks() {
    let arrayLinks = [];

    arrayLinks.push(new Link("#", "Biblioteca Online", 1));
    arrayLinks.push(new Link("#inventory", "Inventario", 2));
    arrayLinks.push(new Link("#services", "Servicios", 3));
    arrayLinks.push(new Link("#contact", "Contacto", 4));
    arrayLinks.push(new Link("./pages/auth/log_in.html", "Ingresar", 5));
    arrayLinks.push(new Link("./pages/auth/sign_up.html", "Registrarse", 6));

    let linksInnerHTML = "";

    for (let link of arrayLinks) {
        let linkActual = "";

        if (link.href == "#") {
            linkActual = `<li><a class="box" href="${link.href}" tabindex="${link.tabindex}">${link.label}</a></li>`;
        } else {
            linkActual = `<li><a class="box border bd3" href="${link.href}" tabindex="${link.tabindex}">${link.label}</a></li>`;
        }

        linksInnerHTML += linkActual;
    }


    document.getElementById("ulColeccionLinks").innerHTML = linksInnerHTML;
}

function cargarLibros() {
    let arrayLibros = [];

    arrayLibros.push(new Libro("./assets/img/book_1_900x1500.webp", "The Demon of Unrest", "Erik Larson"));
    arrayLibros.push(new Libro("./assets/img/book_2_900x1500.webp", "Light to The Hills", "Bonnie Blaylock"));
    arrayLibros.push(new Libro("./assets/img/book_3_900x1500.webp", "Holly", "Stephen King"));
    arrayLibros.push(new Libro("./assets/img/book_4_900x1500.webp", "After Annie", "Anna Quindlen"));
    arrayLibros.push(new Libro("./assets/img/book_5_900x1500.webp", "The Lord of The Ring", "J.R.R. Tolkien"));
    arrayLibros.push(new Libro("./assets/img/book_6_900x1500.webp", "Mercy and Grace", "Anoop Judge"));
    arrayLibros.push(new Libro("./assets/img/book_7_900x1500.webp", "Los Hijos de Eva", "Manuel Dorado"));
    arrayLibros.push(new Libro("./assets/img/book_8_900x1500.webp", "The Game and Other Stories", "Joe Baldwin"));
    arrayLibros.push(new Libro("./assets/img/book_9_900x1500.webp", "A Wrinkle in Time", "Madeleine L'engle"));
    arrayLibros.push(new Libro("./assets/img/book_10_900x1500.webp", "A Great Country", "Shilpi Somaya Gouda"));
    arrayLibros.push(new Libro("./assets/img/book_11_900x1500.webp", "The Secret", "Jack Reacher"));
    arrayLibros.push(new Libro("./assets/img/book_12_900x1500.webp", "Eragon", "Cristopher Paolini"));
    arrayLibros.push(new Libro("./assets/img/book_13_900x1500.webp", "Butcher & Blackbird", "Brynne Weaver"));
    arrayLibros.push(new Libro("./assets/img/book_14_900x1500.webp", "No Control", "Annie Wild"));
    arrayLibros.push(new Libro("./assets/img/book_15_900x1500.webp", "The Canary Cowards", "Jescie Hall"));
    arrayLibros.push(new Libro("./assets/img/book_16_900x1500.webp", "Gravitys Hammer", "Jerry Reynolds"));

    let librosInnerHTML = "";

    for (let libro of arrayLibros) {
        let libroActual = `<li>
                                <figure class="flex bg1 border bd3">
                                    <img class="border bd2" loading="eager" decoding="async" src="${libro.portada}" alt="${libro.titulo}, a book release by ${libro.autor}.">
                                    <figcaption class="flex col">
                                    <h3>${libro.titulo}</h3>
                                    <h4>${libro.autor}</h4>
                                    </figcaption>
                                </figure>
                            </li>`;

        librosInnerHTML += libroActual;
    }

    document.getElementById("ulColeccionLibros").innerHTML = librosInnerHTML;
}