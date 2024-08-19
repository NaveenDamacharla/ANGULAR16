import { Component } from '@angular/core';

@Component({
  selector: 'app-c-binding',
  templateUrl: './c-binding.component.html',
  styleUrls: ['./c-binding.component.css']
})
export class CBindingComponent {
myText = 'textsize'
myGroup = {
  textcolor: true,
  textsize: true
}
isRequired: boolean = true
}
