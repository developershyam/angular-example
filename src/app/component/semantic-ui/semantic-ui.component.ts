import { Observable } from 'rxjs';
/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-semantic-ui',
  templateUrl: './semantic-ui.component.html',
  styleUrls: ['./semantic-ui.component.scss']
})
export class SemanticUIComponent implements OnInit {

  content = [
    { title: 'Andorra' },
    { title: 'United Arab Emirates' },
    { title: 'Afghanistan' },
    { title: 'Antigua' },
    { title: 'Anguilla' },
    { title: 'Albania' },
    { title: 'Armenia' },
    { title: 'Netherlands Antilles' },
    { title: 'Angola' },
    { title: 'Argentina' },
    { title: 'American Samoa' },
    { title: 'Austria' },
    { title: 'Australia' },
    { title: 'Aruba' },
    { title: 'Aland Islands' },
    { title: 'Azerbaijan' },
    { title: 'Bosnia' },
    { title: 'Barbados' },
    { title: 'Bangladesh' },
    { title: 'Belgium' },
    { title: 'Burkina Faso' },
    { title: 'Bulgaria' },
    { title: 'Bahrain' },
    { title: 'Burundi' }
    // etc
  ];

  constructor() { }
  
  ngOnInit() {
    console.log("SemanticUIComponent ... init")
    $('.ui.search')
      .search({
        source: this.content
      })
      ;
  }

}
