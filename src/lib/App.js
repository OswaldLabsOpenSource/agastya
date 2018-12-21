import $ from "scriptjs";

class Agastya {
  constructor(apiKey) {
    $(`https://agastya-loader.oswaldlabs.com/${apiKey}.js`);
  }
}

export default Agastya;
