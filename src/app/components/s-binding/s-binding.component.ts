import { Component } from '@angular/core';

@Component({
  selector: 'app-s-binding',
  templateUrl: './s-binding.component.html',
  styleUrls: ['./s-binding.component.css']
})
export class SBindingComponent {
myColor = 'blue'
isRequired: boolean = true

myStyleGroup = {
  color: 'red',
  fontStyle: 'italic',
  fontSize: '80px'
}
}
