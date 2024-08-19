import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
name: string = "Naveen"
emp = {
  name: "Damacharla",
  age: 27
}
employee =[
  {
    name: "Damacharla",
    lname: "null",
    age: 27
  },
  {
    name: "Naveen",
    age: 27
  }
    
]
imgurl = '../../../assets/pexels-photo-674010.jpeg'
getmyname (){
return `${this.name}`
}
}
