export default class Link {
    #href;
    #label;
    #tabindex;

    constructor(href, label, tabindex) {
        this.#href = href;
        this.#label = label;
        this.#tabindex = tabindex
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

    get tabindex() {
        return this.#tabindex;
    }

    set tabindex(value) {
        this.#tabindex = value;
    }
}
