import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit  {

  myValue = "abc"
  title = "About Page"
  showMyDiv = false;
  constructor() { 
    console.log('constructor .....')
  }

  ngOnInit(): void { 
    console.log('ngOnInit .....')
   }

   ngAfterViewInit(): void { 
    console.log('ngAfterViewInit .....')
   }

  
  myFun() {
    alert('button clicked')
  }

}
