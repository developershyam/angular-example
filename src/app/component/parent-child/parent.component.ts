import { Observable } from 'rxjs';
/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit() {
    
    console.log('ParentComponent ....ngOnInit')
  }

  ngOnDestroy() {
    
    console.log('ParentComponent ....OnDestroy')
  }

  receivedChildEventInParent(data: any) {
    console.log('Parent receivedChildEventInParent() .. '+ data)
  }

}
