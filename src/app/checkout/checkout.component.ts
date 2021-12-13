import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() {}

  @Input() amount :any = 10;
  @Input() description: any;

  handler!: StripeCheckoutHandler;

  confirmation: any;
  loading = false;

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: 'pk_test_51K6B5qSFvy2XdKfvlbezF57pboiAEr2KVHoQemxS0m5WxAKteeYuzOLkHU6yn0PoBlldg2RhUtIZlqMjj8PSuS9C00snMklgSI',
      image: '/your-avatar.png',
      locale: 'auto',
      source: async (source) => {
        this.loading = true;
        const user = 'User'
        // const fun = this.functions.httpsCallable('stripeCreateCharge');
        // this.confirmation = await fun({ source: source.id, uid: user.uid, amount: this.amount }).toPromise();
        console.log('source', source);
        this.loading = false;

      }
    });
  }

  // Open the checkout handler
  async checkout(event :any) {
    const user = 'Tushar Kumar'
    this.handler.open({
      name: 'OMS UI',
      description: this.description,
      amount: 10,
      email: 'tushar@smartbeings.ai',
    });
    event.preventDefault();
  }

  // Close on navigate
  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }


  



}
