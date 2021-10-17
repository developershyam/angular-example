import { Observable } from 'rxjs';
/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges, DoCheck, AfterViewInit,
  AfterContentInit, AfterViewChecked, AfterContentChecked, OnDestroy {

  myValue = "abc"
  title = "About Page"
  showMyDiv = false;
  order = 1;
  isBlue = true;

  testPipe = 'This is to test Pipe'
  todaydate = new Date();  
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  

  constructor(private router: Router) {
    console.log('AboutComponent constructor()!! and my order::::' + this.order);
    this.order++;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('AboutComponent ngOnChanges()!! and my order::::' + this.order);
    this.order++;
  }

  ngOnInit() {
    console.log('AboutComponent ngOnInit() and my order::::' + this.order);
    this.order++;
  }

  ngDoCheck() {
    console.log('AboutComponent ngDoCheck() and my order::::' + this.order);
    this.order++;
  }

  ngAfterContentInit() {
    console.log('AboutComponent ngAfterContentInit() and my order::::' + this.order);
    this.order++;
  }

  ngAfterContentChecked() {
    console.log('AboutComponent ngAfterContentChecked() and my order::::' + this.order);
    this.order++;
  }

  ngAfterViewInit() {
    console.log('AboutComponent ngAfterViewInit() and my order::::' + this.order);
    this.order++;
  }

  ngAfterViewChecked() {
    console.log('AboutComponent ngAfterViewChecked() and my order::::' + this.order);
    this.order++;
  }

  ngOnDestroy() {
    console.log('AboutComponent ngOnDestroy() and my order::::' + this.order);
    this.order++;
  }

  myFun() {
    // alert('button clicked')
    this.testPromise()
    this.testObservable();
  }

  navigate() {
    this.router.navigate(['/product'])
  }


  testPromise() {
    const promise = new Promise((data) => {
      data(1);
      data(2);
      data(3);
    });

    promise.then(element => console.log('Promise ' + element));
  }
  testObservable() {
    const observable = new Observable((data) => {
      data.next(1);
      data.next(2);
      data.next(3);
      });

      observable.subscribe(element => console.log('Observable ' + element));
  }

}
