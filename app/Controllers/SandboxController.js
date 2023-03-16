import { appState } from "../AppState.js"
import { sandboxService } from "../Services/SandboxService.js"
import { Pop } from "../Utils/Pop.js"

import { setHTML } from "../Utils/Writer.js"
import { getFormData } from "../Utils/FormHandler.js"
import { giphsService } from "../Services/GiphsService.js"


function _drawGiphs(){
  let giph = appState.giphs
  let template = ''
  giph.forEach(g => template += g.giphTemplate)
  setHTML('giftCard', template)
}


export class SandboxController {
  constructor(){
    this.getSandboxGiph()
    appState.on('giphs', _drawGiphs)
  }

  async getSandboxGiph(){
    try{
      await sandboxService.getSandboxGiph()
    }catch(error){
        Pop.error(error)
    }
  }

  async openGift(id){
    try{
      console.log('[Opening Gift]', id)
      event.stopPropagation()
      await sandboxService.openGift(id)
    }catch (error){
        console.error(error)
        Pop.error(error)
    }
  }

  async postGiph() {
    try {
        console.log('testing post giph')
        event.preventDefault()
        const form = event.target
        const formData = getFormData(form)
        await sandboxService.postGiph(formData)
        form.reset()
    } catch (error) {
        console.error(error)
        Pop.error(error)
    }
}

//   toggleDisplay() {
//     sandboxService.toggleHidden()
//   }

}