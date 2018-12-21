import "./css/App.css";
import Agastya from "./../lib";

class App {
  constructor() {
    let libInstance = new Agastya("demo");
    console.log("Demo loaded!", libInstance);
  }
}

export default App;
