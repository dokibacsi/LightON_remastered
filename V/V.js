import LampaElem from "./LampaElem.js";
import Lampak from "./Lampak.js";

class View {
  #szuloElem;
  constructor(szuloElem) {
    this.#szuloElem = szuloElem;
    const LAMPAK = new Lampak(this.#szuloElem);
    const LAMPAELEM = new LampaElem();
  }
}

export default View;
