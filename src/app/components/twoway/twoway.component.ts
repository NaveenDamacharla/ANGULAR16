import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent {
  myFirstname: string = ''
  myMiddlename: string = ''
  myLastname: string = ''
  myText: string= ''
  onClick (val: any){
    console.log("welcome: ", val)
    this.myFirstname= val
  }
  onClick1 (valu: any){
    console.log("welcome: ", valu)
    this.myMiddlename= valu
  }
  onClick2 (value: any){
    console.log("welcome: ", value)
    this.myLastname= value
  }
}
