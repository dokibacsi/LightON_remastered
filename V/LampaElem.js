class LampaElem {
  constructor() {
    this.#letrehoz();
    const ELEM = $('.lampa');
    this.#setSzin(ELEM);
  }

  #letrehoz() {
    let txt = "";
    txt += "<div class='lampa'></div>";
    return txt;
  }

  #setSzin(elem) {
    $(elem).on("click", () => {
      if (allapot === 0) {
        $(elem).css('background-color: "green"');
        allapot = 1;
      } else {
        $(elem).css('background-color: "red"');
        allapot = 0;
      }
    });
  }
}

export default LampaElem;
