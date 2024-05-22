export default class Libro {
    #imagen;
    #titulo;
    #autor;

    constructor(imagen, titulo, autor) {
        this.#imagen = imagen;
        this.#titulo = titulo;
        this.#autor = autor;
    }

    get imagen() {
        return this.#imagen;
    }

    set imagen(value) {
        this.#imagen = value;
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
