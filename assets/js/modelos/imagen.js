export default class Imagen {
    #src;
    #sizes;
    #srcset;

    constructor(src, sizes, srcset) {
        this.#src = src;
        this.#sizes = sizes;
        this.#srcset = srcset;
    }

    get src() {
        return this.#src;
    }

    set src(value) {
        this.#src = value;
    }

    get sizes() {
        return this.#sizes;
    }

    set sizes(value) {
        this.#sizes = value;
    }

    get srcset() {
        return this.#srcset;
    }

    set srcset(value) {
        this.#srcset = value;
    }
}
