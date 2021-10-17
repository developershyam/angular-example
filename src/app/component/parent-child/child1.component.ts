import { Observable } from 'rxjs';
/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html'
})
export class Child1Component implements OnInit, OnDestroy {

  @Input() msg = 'default value';
  
  constructor() {}

  ngOnInit() {
    
    console.log('Child1Component ....ngOnInit')
  }

  ngOnDestroy() {
    
    console.log('Child1Component ....OnDestroy')
  }

  recievedEvenFromParent(data: any) {
    console.log('Child-1: recievedEvenFromParent...' + data)
  }

}
