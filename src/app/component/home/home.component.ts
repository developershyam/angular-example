import { Product } from './../../model/app.model';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
	constructor(private apiService: ApiService) { }
	ngOnInit() {
		this.apiService.sendGetRequest().subscribe((data: any)=>{  
			console.log(data);  
			this.products = data;  
		})  
	}
}
