import Link from "./modelos/link.js"
import Libro from "./modelos/libro.js"
import Imagen from "./modelos/imagen.js"
import Servicio from "./modelos/servicio.js";
import { Source, SourceList, DefaultImg, Ilustracion } from "./modelos/ilustracion.js";

document.addEventListener("DOMContentLoaded", function () {
    cargarLinks();
    cargarLibros();
    cargarServicios();
    cargarIlustracion();
});

function cargarLinks() {
    let arrayLinks = [];

    arrayLinks.push(new Link("#", "Biblioteca Online"));
    arrayLinks.push(new Link("#inventory", "Inventario"));
    arrayLinks.push(new Link("#services", "Servicios"));
    arrayLinks.push(new Link("#contact", "Contacto"));
    arrayLinks.push(new Link("./pages/auth/log_in.html", "Ingresar"));
    arrayLinks.push(new Link("./pages/auth/sign_up.html", "Registrarse"));

    let linksInnerHTML = "";

    for (let link of arrayLinks) {
        let linkActual = "";

        if (link.href == "#") {
            linkActual = `<li><a class="box" href="${link.href}">${link.label}</a></li>`;
        } else {
            linkActual = `<li><a class="box border bd3" href="${link.href}">${link.label}</a></li>`;
        }

        linksInnerHTML += linkActual;
    }


    document.getElementById("ulColeccionLinks").innerHTML = linksInnerHTML;
}

function cargarLibros() {
    let arrayLibros = [];

    const imagen1 = new Imagen(
        "./assets/img/book_1/srcset/book_1_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 841px) 841px,
        (max-width: 634px) 634px,
        (max-width: 371px) 371px, 200px`,
        `./assets/img/book_1/srcset/book_1_w_900.webp 900w,
        ./assets/img/book_1/srcset/book_1_w_841.webp 841w,
        ./assets/img/book_1/srcset/book_1_w_634.webp 634w,
        ./assets/img/book_1/srcset/book_1_w_371.webp 371w,
        ./assets/img/book_1/srcset/book_1_w_200.webp 200w`
    );

    const imagen2 = new Imagen(
        "./assets/img/book_2/srcset/book_2_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 819px) 819px,
        (max-width: 624px) 624px,
        (max-width: 341px) 341px, 200px`,
        `./assets/img/book_2/srcset/book_2_w_900.webp 900w,
        ./assets/img/book_2/srcset/book_2_w_819.webp 819w,
        ./assets/img/book_2/srcset/book_2_w_624.webp 624w,
        ./assets/img/book_2/srcset/book_2_w_341.webp 341w,
        ./assets/img/book_2/srcset/book_2_w_200.webp 200w`
    );

    const imagen3 = new Imagen(
        "./assets/img/book_3/srcset/book_3_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 808px) 808px,
        (max-width: 696px) 696px,
        (max-width: 355px) 355px, 200px`,
        `./assets/img/book_3/srcset/book_3_w_900.webp 900w,
        ./assets/img/book_3/srcset/book_3_w_808.webp 808w,
        ./assets/img/book_3/srcset/book_3_w_696.webp 696w,
        ./assets/img/book_3/srcset/book_3_w_355.webp 355w,
        ./assets/img/book_3/srcset/book_3_w_200.webp 200w`
    );

    const imagen4 = new Imagen(
        "./assets/img/book_4/srcset/book_4_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 838px) 838px,
        (max-width: 658px) 658px,
        (max-width: 307px) 307px, 200px`,
        `./assets/img/book_4/srcset/book_4_w_900.webp 900w,
        ./assets/img/book_4/srcset/book_4_w_838.webp 838w,
        ./assets/img/book_4/srcset/book_4_w_658.webp 658w,
        ./assets/img/book_4/srcset/book_4_w_307.webp 307w,
        ./assets/img/book_4/srcset/book_4_w_200.webp 200w`
    );

    const imagen5 = new Imagen(
        "./assets/img/book_5/srcset/book_5_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 830px) 830px,
        (max-width: 662px) 662px,
        (max-width: 368px) 368px, 200px`,
        `./assets/img/book_5/srcset/book_5_w_900.webp 900w,
        ./assets/img/book_5/srcset/book_5_w_830.webp 830w,
        ./assets/img/book_5/srcset/book_5_w_662.webp 662w,
        ./assets/img/book_5/srcset/book_5_w_368.webp 368w,
        ./assets/img/book_5/srcset/book_5_w_200.webp 200w`
    );

    const imagen6 = new Imagen(
        "./assets/img/book_6/srcset/book_6_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 836px) 836px,
        (max-width: 649px) 649px,
        (max-width: 379px) 379px, 200px`,
        `./assets/img/book_6/srcset/book_6_w_900.webp 900w,
        ./assets/img/book_6/srcset/book_6_w_836.webp 836w,
        ./assets/img/book_6/srcset/book_6_w_649.webp 649w,
        ./assets/img/book_6/srcset/book_6_w_379.webp 379w,
        ./assets/img/book_6/srcset/book_6_w_200.webp 200w`
    );

    const imagen7 = new Imagen(
        "./assets/img/book_7/srcset/book_7_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 826px) 826px,
        (max-width: 611px) 611px,
        (max-width: 342px) 342px, 200px`,
        `./assets/img/book_7/srcset/book_7_w_900.webp 900w,
        ./assets/img/book_7/srcset/book_7_w_826.webp 826w,
        ./assets/img/book_7/srcset/book_7_w_611.webp 611w,
        ./assets/img/book_7/srcset/book_7_w_342.webp 342w,
        ./assets/img/book_7/srcset/book_7_w_200.webp 200w`
    );

    const imagen8 = new Imagen(
        "./assets/img/book_8/srcset/book_8_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 837px) 837px,
        (max-width: 613px) 613px,
        (max-width: 384px) 384px, 200px`,
        `./assets/img/book_8/srcset/book_8_w_900.webp 900w,
        ./assets/img/book_8/srcset/book_8_w_837.webp 837w,
        ./assets/img/book_8/srcset/book_8_w_613.webp 613w,
        ./assets/img/book_8/srcset/book_8_w_384.webp 384w,
        ./assets/img/book_8/srcset/book_8_w_200.webp 200w`
    );

    const imagen9 = new Imagen(
        "./assets/img/book_9/srcset/book_9_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 810px) 810px,
        (max-width: 686px) 686px,
        (max-width: 384px) 384px, 200px`,
        `./assets/img/book_9/srcset/book_9_w_900.webp 900w,
        ./assets/img/book_9/srcset/book_9_w_810.webp 810w,
        ./assets/img/book_9/srcset/book_9_w_686.webp 686w,
        ./assets/img/book_9/srcset/book_9_w_384.webp 384w,
        ./assets/img/book_9/srcset/book_9_w_200.webp 200w`
    );

    const imagen10 = new Imagen(
        "./assets/img/book_10/srcset/book_10_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 812px) 812px,
        (max-width: 622px) 622px,
        (max-width: 326px) 326px, 200px`,
        `./assets/img/book_10/srcset/book_10_w_900.webp 900w,
        ./assets/img/book_10/srcset/book_10_w_812.webp 812w,
        ./assets/img/book_10/srcset/book_10_w_622.webp 622w,
        ./assets/img/book_10/srcset/book_10_w_326.webp 326w,
        ./assets/img/book_10/srcset/book_10_w_200.webp 200w`
    );

    const imagen11 = new Imagen(
        "./assets/img/book_11/srcset/book_11_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 847px) 847px,
        (max-width: 673px) 673px,
        (max-width: 335px) 335px, 200px`,
        `./assets/img/book_11/srcset/book_11_w_900.webp 900w,
        ./assets/img/book_11/srcset/book_11_w_847.webp 847w,
        ./assets/img/book_11/srcset/book_11_w_673.webp 673w,
        ./assets/img/book_11/srcset/book_11_w_335.webp 335w,
        ./assets/img/book_11/srcset/book_11_w_200.webp 200w`
    );

    const imagen12 = new Imagen(
        "./assets/img/book_12/srcset/book_12_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 849px) 849px,
        (max-width: 622px) 622px,
        (max-width: 357px) 357px, 200px`,
        `./assets/img/book_12/srcset/book_12_w_900.webp 900w,
        ./assets/img/book_12/srcset/book_12_w_849.webp 849w,
        ./assets/img/book_12/srcset/book_12_w_622.webp 622w,
        ./assets/img/book_12/srcset/book_12_w_357.webp 357w,
        ./assets/img/book_12/srcset/book_12_w_200.webp 200w`
    );

    const imagen13 = new Imagen(
        "./assets/img/book_13/srcset/book_13_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 812px) 812px,
        (max-width: 661px) 661px,
        (max-width: 353px) 353px, 200px`,
        `./assets/img/book_13/srcset/book_13_w_900.webp 900w,
        ./assets/img/book_13/srcset/book_13_w_812.webp 812w,
        ./assets/img/book_13/srcset/book_13_w_661.webp 661w,
        ./assets/img/book_13/srcset/book_13_w_353.webp 353w,
        ./assets/img/book_13/srcset/book_13_w_200.webp 200w`
    );

    const imagen14 = new Imagen(
        "./assets/img/book_14/srcset/book_14_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 804px) 804px,
        (max-width: 613px) 613px,
        (max-width: 347px) 347px, 200px`,
        `./assets/img/book_14/srcset/book_14_w_900.webp 900w,
        ./assets/img/book_14/srcset/book_14_w_804.webp 804w,
        ./assets/img/book_14/srcset/book_14_w_613.webp 613w,
        ./assets/img/book_14/srcset/book_14_w_347.webp 347w,
        ./assets/img/book_14/srcset/book_14_w_200.webp 200w`
    );

    const imagen15 = new Imagen(
        "./assets/img/book_15/srcset/book_15_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 829px) 829px,
        (max-width: 652px) 652px,
        (max-width: 326px) 326px, 200px`,
        `./assets/img/book_15/srcset/book_15_w_900.webp 900w,
        ./assets/img/book_15/srcset/book_15_w_829.webp 829w,
        ./assets/img/book_15/srcset/book_15_w_652.webp 652w,
        ./assets/img/book_15/srcset/book_15_w_326.webp 326w,
        ./assets/img/book_15/srcset/book_15_w_200.webp 200w`
    );

    const imagen16 = new Imagen(
        "./assets/img/book_16/srcset/book_16_w_900.webp",
        `(max-width: 900px) 900px,
        (max-width: 835px) 835px,
        (max-width: 594px) 594px,
        (max-width: 422px) 422px, 200px`,
        `./assets/img/book_16/srcset/book_16_w_900.webp 900w,
        ./assets/img/book_16/srcset/book_16_w_835.webp 835w,
        ./assets/img/book_16/srcset/book_16_w_594.webp 594w,
        ./assets/img/book_16/srcset/book_16_w_422.webp 422w,
        ./assets/img/book_16/srcset/book_16_w_200.webp 200w`
    );

    arrayLibros.push(new Libro(imagen1, "The Demon of Unrest", "Erik Larson"));
    arrayLibros.push(new Libro(imagen2, "Light to The Hills", "Bonnie Blaylock"));
    arrayLibros.push(new Libro(imagen3, "Holly", "Stephen King"));
    arrayLibros.push(new Libro(imagen4, "After Annie", "Anna Quindlen"));
    arrayLibros.push(new Libro(imagen5, "The Lord of The Ring", "J.R.R. Tolkien"));
    arrayLibros.push(new Libro(imagen6, "Mercy and Grace", "Anoop Judge"));
    arrayLibros.push(new Libro(imagen7, "It Ends with Us", "Colleen Hoover"));
    arrayLibros.push(new Libro(imagen8, "The Game and Other Stories", "Joe Baldwin"));
    arrayLibros.push(new Libro(imagen9, "A Wrinkle in Time", "Madeleine L'engle"));
    arrayLibros.push(new Libro(imagen10, "A Great Country", "Shilpi Somaya Gouda"));
    arrayLibros.push(new Libro(imagen11, "The Secret", "Jack Reacher"));
    arrayLibros.push(new Libro(imagen12, "Eragon", "Cristopher Paolini"));
    arrayLibros.push(new Libro(imagen13, "Butcher & Blackbird", "Brynne Weaver"));
    arrayLibros.push(new Libro(imagen14, "No Control", "Annie Wild"));
    arrayLibros.push(new Libro(imagen15, "The Canary Cowards", "Jescie Hall"));
    arrayLibros.push(new Libro(imagen16, "Gravitys Hammer", "Jerry Reynolds"));

    let librosInnerHTML = "";

    for (let libro of arrayLibros) {
        let libroActual = `
            <li>
                <figure class="flex bg1 border bd3">
                    <img class="border bd2"
                        src="${libro.imagen.src}"
                        sizes="${libro.imagen.sizes}"
                        srcset="${libro.imagen.srcset}"
                        alt="${libro.titulo}, a book release by ${libro.autor}.">

                    <figcaption class="flex col">
                        <h3>${libro.titulo}</h3>

                        <h4>${libro.autor}</h4>
                    </figcaption>
                </figure>
            </li>
        `;

        librosInnerHTML += libroActual;
    }

    document.getElementById("ulColeccionLibros").innerHTML = librosInnerHTML;
}

function cargarServicios() {
    let arrayServicios = [];

    arrayServicios.push(new Servicio("fa fa-bookmark", "Recomendaciones", "Recibe sugerencias de lectura en base a tus intereses y preferencias, para que descubras nuevas obras cautivadoras."));
    arrayServicios.push(new Servicio("fa fa-headphones", "Audiolibros", "Disfruta de tus libros favoritos en formato audio, ideal para cuando viajas, haces ejercicio o simplemente te relajas."));
    arrayServicios.push(new Servicio("fa fa-users", "Clubes de lectura", "Únete a nuestra comunidad de lectores, comparte tus opiniones y descubre nuevas perspectivas sobre tus libros favoritos."));
    arrayServicios.push(new Servicio("fa fa-laptop", "Lecturas en línea", "Accede a nuestra amplia selección de libros electrónicos desde cualquier dispositivo, sin necesidad de descargas adicionales."));
    arrayServicios.push(new Servicio("fa fa-cloud-download", "Recursos digitales", "Explora nuestro catálogo de recursos digitales exclusivos, como entrevistas con autores, guías de lectura y mucho más."));
    arrayServicios.push(new Servicio("fa fa-comments", "Asistencia 24/7", "Nuestro equipo de expertos estará disponible para brindarte asesoramiento y responder cualquier pregunta que tengas."));

    let serviciosInnerHTML = "";

    for (let servicio of arrayServicios) {
        let servicioActual = `
            <li class="flex box bg1 border bd3">
                <article class="flex col">
                    <h3 class="order-2">${servicio.nombre}</h3>

                    <figure class="order-1">
                        <i class="${servicio.icono}"></i>
                    </figure>

                    <p class="order-3">${servicio.descripcion}</p>
                </article>
            </li>
        `;

        serviciosInnerHTML += servicioActual;
    }

    document.getElementById("ulColeccionServicios").innerHTML = serviciosInnerHTML;
}

function cargarIlustracion() {
    const arraySources = [];

    arraySources.push(
        new Source(
            "image/webp",
            "(max-width: 1400px)",
            "./assets/img/hero/srcset/hero_w_1400.webp")
    );

    arraySources.push(
        new Source(
            "image/webp",
            "(max-width: 1226px)",
            "./assets/img/hero/srcset/hero_w_1226.webp")
    );

    arraySources.push(
        new Source(
            "image/webp",
            "(max-width: 1044px)",
            "./assets/img/hero/srcset/hero_w_1044.webp")
    );

    arraySources.push(
        new Source(
            "image/webp",
            "(max-width: 861px)",
            "./assets/img/hero/srcset/hero_w_861.webp")
    );

    arraySources.push(
        new Source(
            "image/webp",
            "(max-width: 670px)",
            "./assets/img/hero/srcset/hero_w_670.webp")
    );

    arraySources.push(
        new Source(
            "image/webp",
            "(max-width: 492px)",
            "./assets/img/hero/srcset/hero_w_492.webp")
    );

    arraySources.push(
        new Source(
            "image/webp",
            "(max-width: 200px)",
            "./assets/img/hero/srcset/hero_w_200.webp")
    );

    const ilustracion = new Ilustracion(
        new SourceList(arraySources),
        new DefaultImg("./assets/img/hero/srcset/hero_w_1400.webp",
            "An open book with a radiant light shining upon it, illuminating its pages."
        )
    );

    document.getElementById("pictureIlustracionHero").innerHTML = ilustracion.renderHtml();
}