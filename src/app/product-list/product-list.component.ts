import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListService } from './service/product-list.service';
import { linkManager } from "@luigi-project/client";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public productList: Array<any> = [];
  constructor(private service: ProductListService, private router:Router) {}

  ngOnInit(): void {
    this.fetchProductData();
  }

  public async fetchProductData(): Promise<void> {
    try {
      const res: any = await this.service.getProductList().toPromise();
      this.productList = res.products;
    } catch (e) {
      console.log('Something Went Wrong please try again');
    }
  }

  public goToDetails(id:number){
      linkManager().withParams({ root: "products" });
      linkManager().navigate(
        "/home/products/" + id
      );    
  }
}
