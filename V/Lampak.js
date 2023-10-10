import LampaElem from "./LampaElem.js";

class Lampak{

    #lampaPeldany;
    #szuloElem;

    constructor(szuloElem){
        this.#szuloElem = szuloElem;
        this.#lampaLehelyez(9);
    }

    #lampaLehelyez(szam){
        for (let index = 0; index < szam; index++) {
            this.#lampaPeldany = new LampaElem();
        }
        $(this.#szuloElem).append(this.#lampaPeldany);
    }
}

export default Lampak;