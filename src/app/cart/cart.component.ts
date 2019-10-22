import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items; checkoutForm;

  constructor(
    //private route: ActivatedRoute,
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}