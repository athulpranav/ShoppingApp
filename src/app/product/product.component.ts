import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  productid=""
  producttitle=""
  productprice=""
  productdescription=""
  productcateogry=""


  ngOnInit(): void {
  }

  read=()=>
  {
    let data={

      "productid":this.productid,


      "producttitle":this.producttitle,

      "productprice":this.productprice,

      "productdescription":this.productdescription,

      "productcateogry":this.productcateogry,




    }
    console.log(data)
  }

}
