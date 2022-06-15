import { Component } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: 'instructions.page.html',
  styleUrls: ['instructions.page.scss']
})
export class InstructionsPage {

  public toggledLang = false;

  constructor() {}
  
  async toggleLang() {
    console.log("toggle state");
  }
}
