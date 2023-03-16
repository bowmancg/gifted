import { appState } from "../AppState.js"
import { sandboxService } from "../Services/SandboxService.js"



export class SandboxGiph{
  constructor(data){
    this.id = data.id
    this.tag = data.tag
    this.url = data.url ? data.url : this.urlTemplate  
    this.opened = data.opened

  }

  get giphTemplate(){
    return `
    <div class="col-4">
    <div class="card" onclick="app.sandboxController.openGift('${this.id}')">
      <img
        src="${this.url}"
        alt="" height="350">
      <div class="p-2 text-center">
        <h5>${this.tag}</h5>
      </div>
    </div>
  </div>
    `
  }

  static urlTemplate(){
    return 
  }

  

}