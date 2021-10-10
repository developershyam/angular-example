import { Product } from './../../model/product.model';
import { ProductService } from '../../service/product.service';

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	products: Product[] = [];
	constructor(private productService: ProductService) { }
	ngOnInit() {
		console.log('ProductComponent .. 1')
		this.productService.sendGetRequest().subscribe(
			(data: any) => {
				console.log(data);
				this.products = data;
				console.log('ProductComponent .. 2')
			}, (error) => {
				console.log('ProductComponent .. 3')
			})
		console.log('ProductComponent .. 4')
	}
}
