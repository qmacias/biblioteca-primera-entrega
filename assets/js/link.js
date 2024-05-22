export default class Link {
    #href;
    #label;

    constructor(href, label) {
        this.#href = href;
        this.#label = label;
    }

    get href() {
        return this.#href;
    }

    set href(value) {
        this.#href = value;
    }

    get label() {
        return this.#label;
    }

    set label(value) {
        this.#label = value;
    }
}
