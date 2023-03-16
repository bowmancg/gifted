import { appState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";
import { SandboxGiph } from "../Models/SandboxGiph.js";

class SandboxService {
    // toggleHidden() {
    //     appState.isHidden = !appState.isHidden
    // }

    async getSandboxGiph() {
        const res = await sandboxApi.get('gifts')
        console.log('[Get sandbox data]', res.data)
        appState.giphs = res.data.map(r => new SandboxGiph(r))
        console.log(appState.giphs)
    }

    async openGift(id) {
        const giph = appState.giphs.find(g => g.id == id)
        console.log('find gift');
        if (giph.opened = false) {
            giph.opened = !giph.opened
        } else {
            giph.opened = true
        }
        // if statement will check to see if there is a gift
        // if there is no gift return a bad request
        // if there is a gift swap the bool

        // find the index of the gift
        const res = await sandboxApi.put(`gifts/${id}`, giph)
        // similar to line 10 set your gift that you just opened to your res.data
        // splice your gift i.e. you are updating the appstate and taking the gift you just grabbed and adding in the new info which is the bool flip
        
        console.log("[testing]", res.data)
        appState.emit('giphs')
    }

    async postGiph(formData){
      const res = await sandboxApi.post('gifts', formData)
      console.log('[Posting Giph]', res.data)
      const newGiph = new SandboxGiph(res.data)
      appState.giphs.push(newGiph)
      appState.emit('giphs')
    }

}

export const sandboxService = new SandboxService()