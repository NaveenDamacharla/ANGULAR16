import { Component } from '@angular/core';

@Component({
  selector: 'app-e-binding',
  templateUrl: './e-binding.component.html',
  styleUrls: ['./e-binding.component.css']
})
export class EBindingComponent {
onClick() {
  console.log("You clicked this button")
}
onDbclick() {
  console.log("You double clicked this button")
}
onOver() {
  console.log(" mouse over ")
}
onOut() {
  console.log(" mouse exit")
}
onMove() {
  console.log(" mouse moved")
}
kDown() {
  console.log("key down")
}
kUp() {
  console.log("key up")
}
kPress() {
  console.log("You pressed a key")
}
onFocus() {
  console.log("Input get focus")
}
onFocusLost() {
  console.log("Input get lost")
}
onInput() {
  console.log("You entered a charecter")
}
}

