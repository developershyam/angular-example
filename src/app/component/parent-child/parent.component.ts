import { Child2Component } from './child2.component';
import { Child1Component } from './child1.component';
import { Observable } from 'rxjs';
/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit, OnDestroy {

  @ViewChild(Child1Component) child1: Child1Component | undefined;
  @ViewChild(Child2Component) child2: Child2Component | undefined;
  
  constructor() {}
  myMsg= "This is from parent ts file"
  showChild=true;

  toggleChild() {

    this.showChild = !this.showChild;
  }

  ngOnInit() {
    
    console.log('ParentComponent ....ngOnInit')
  }

  ngOnDestroy() {
    
    console.log('ParentComponent ....OnDestroy')
  }

  receivedChildEventInParent(data: any) {
    console.log('Parent receivedChildEventInParent() .. '+ data)

    this.child1?.recievedEvenFromParent(data)
  }

}
