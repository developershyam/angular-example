import { User } from './../../model/user.model';
/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html'
})
export class Child2Component implements OnInit, OnDestroy {

  @Input() msg = ''; 
  @Input() user =new User('', '', 0);

  @Output() childEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {

    console.log('Child2Component ....ngOnInit')
  }

  ngOnDestroy() {

    console.log('Child2Component ....OnDestroy')
  }

  childAction() {
    let randomNum = (Math.floor(Math.random() * (999999 - 100000)) + 100000);
    console.log('Child-2: Event emitted ')
    this.childEventEmitter.emit('My Val '+ randomNum);
  }

}
