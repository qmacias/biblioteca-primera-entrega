export default class Servicio {
    #icono;
    #nombre;
    #descripcion;

    constructor(icono, nombre, descripcion) {
        this.#icono = icono;
        this.#nombre = nombre;
        this.#descripcion = descripcion;
    }

    get icono() {
        return this.#icono;
    }

    set icono(value) {
        this.#icono = value;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(value) {
        this.#nombre = value;
    }

    get descripcion() {
        return this.#descripcion;
    }

    set descripcion(value) {
        this.#descripcion = value;
    }
}
