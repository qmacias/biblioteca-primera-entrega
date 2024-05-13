export default class Libro {
    #pathPortada;
    #titulo;
    #autor;

    constructor(pathPortada, titulo, autor) {
        this.#pathPortada = pathPortada;
        this.#titulo = titulo;
        this.#autor = autor;
    }

    //getters y setters para la modificación y visualización de datos
    get portada() {
        return this.#pathPortada;
    }

    set portada(value) {
        this.#pathPortada = value;
    }

    get titulo() {
        return this.#titulo;
    }

    set titulo(value) {
        this.#titulo = value;
    }

    get autor() {
        return this.#autor;
    }

    set autor(value) {
        this.#autor = value;
    }
}
