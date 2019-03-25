import $ from "scriptjs";
import "./styles/index.scss";

export default class Agastya {
  constructor(apiKey: string, staging: boolean = false) {
    $(
      `https://${
        staging ? "staging-" : ""
      }agastya-loader.oswaldlabs.com/${apiKey}.js`,
      () => {}
    );
  }
}

(<any>window).AgastyaModule = Agastya;
