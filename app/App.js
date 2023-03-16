import { GiphController } from "./Controllers/GiphController.js"
import { SandboxController } from "./Controllers/SandboxController.js"
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  giphController = new GiphController();
  sandboxController = new SandboxController();
}

window["app"] = new App();
