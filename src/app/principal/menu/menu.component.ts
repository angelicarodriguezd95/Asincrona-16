import { Component, OnInit,AfterViewChecked,DoCheck } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,DoCheck {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }
  home=false
  peru= false
  chile=false
  uruguay=false
 
  ngDoCheck(){
    console.log(this.router.url)
    console.log(typeof this.router.url)
    switch (this.router.url) {
      case "/":
        this.home=false
        this.peru = false
        this.chile = false
        this.uruguay = false
        break;
      case "/peru":
          this.home=false
          this.peru = true
          this.chile = false
          this.uruguay = false
          break;
      case "/chile":
          this.home=false
          this.peru = false
          this.chile = true
          this.uruguay = false
          break;
      case "/uruguay":
          this.home=false
          this.peru = false
          this.chile = false
          this.uruguay = true
          break;
      default:
        break;
    }
  }
}
