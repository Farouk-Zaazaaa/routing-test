import { Component } from '@angular/core';

@Component({
  selector: 'app-us',
  standalone: true,
  imports: [],
  templateUrl: './us.component.html',
  styleUrl: './us.component.css'
})
export class UsComponent {
  isClicked:boolean = false

  imgSrc:string = ""

  open(mainImage:string) {
    this.isClicked = true
    this.imgSrc = "./assets/images/" + mainImage
  }

  close() {
    this.isClicked = false
  }
}
