import EventEmitter from "eventemitter3";
import anime from "animejs";
export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    const article = document.querySelector("article");
    article.addEventListener("click", this.init(article));
  

    this.emit(Application.events.READY);
  }
  init(arg) {
    anime({
      targets: arg,
      translateX: 250,
      direction: 'alternate',
      loop: true,
      easing: 'spring',
    })
    
  }
}

