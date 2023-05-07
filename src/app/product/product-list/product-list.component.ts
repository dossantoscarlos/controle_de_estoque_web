import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { url_base } from '../../../API/Conexao';

interface Product {
  name: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    // this
    //   .http
    //   .get<Product[]>('https://api.github.com/users/dossantoscarlos/repos')
    //   .subscribe(
    //     data => {
    //       this.products = data;
    //   },);
    
    // let response = this.products;

    // console.log(response);
  }
  
  listagem() {
    
    this
      .http
      .get<any>('https://api.github.com/users/dossantoscarlos/repos')
      .subscribe(
        data => {
          this.products = data;
      },);
    
    let response = this.products;

    console.log(response);
  }
}
