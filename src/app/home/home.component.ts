import { ApiService } from './../api.service';
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

export class Product {
  id: number = 0;
  name: string = '';
  price: string = ''
  quantity: number = 0;
  imageUrl: string = '';
  description: string = '';
}
