export class Source {
    #type;
    #media;
    #srcset;

    constructor(type, media, srcset) {
        this.type = type;
        this.media = media;
        this.srcset = srcset;
    }

    get type() {
        return this.#type;
    }

    set type(value) {
        this.#type = value;
    }

    get media() {
        return this.#media;
    }

    set media(value) {
        this.#media = value;
    }

    get srcset() {
        return this.#srcset;
    }

    set srcset(value) {
        this.#srcset = value;
    }

    renderHtml() {
        return `<source type="${this.type}" srcset="${this.srcset}" media="${this.media}">`
    }
}

export class SourceList {
    #sources;

    constructor(sources) {
        this.sources = sources;
    }

    get sources() {
        return this.#sources;
    }

    set sources(value) {
        this.#sources = value;
    }

    renderHtml() {
        let renderedSources = ``;

        for (const source of this.sources) {
            renderedSources += source.renderHtml();
        }

        return renderedSources;
    }
}

export class DefaultImg {
    #src;
    #alt;

    constructor(src, alt) {
        this.src = src;
        this.alt = alt;
    }

    get src() {
        return this.#src;
    }

    set src(value) {
        this.#src = value;
    }

    get alt() {
        return this.#alt;
    }

    set alt(value) {
        this.#alt = value;
    }

    renderHtml() {
        return `<img loading="eager" decoding="async" src="${this.src}" alt="${this.alt}">`;
    }
}

export class Ilustracion {
    #sourceList;
    #defaultImg;

    constructor(sourceList, defaultImg) {
        this.sourceList = sourceList;
        this.defaultImg = defaultImg;
    }

    get sourceList() {
        return this.#sourceList;
    }

    set sourceList(value) {
        this.#sourceList = value;
    }

    get defaultImg() {
        return this.#defaultImg;
    }

    set defaultImg(value) {
        this.#defaultImg = value;
    }

    renderHtml() {
        return `<picture> ${this.sourceList.renderHtml()} ${this.defaultImg.renderHtml()} </picture>`;
    }
}