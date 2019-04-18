import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  // "value" passed in componentProps
  @Input() value: any;
  @Input() cart: any;

  @ViewChild('qtyField') qtyField;

  qty: any;
  Warehouse = JSON.parse(localStorage.getItem('Warehouse'));
  Units = JSON.parse(localStorage.getItem('Lookup'));

  constructor(
    public modalController: ModalController,
    public events: Events
  ) {
  }

  ionViewWillEnter() {

    setTimeout(() => {
      this.qtyField.setFocus();
    }, 150);

 }

  ngOnInit() {
    this.Units = this.Units.filter(x => x.LKP_Type === 'Unit');
    console.log(this.Units);
    this.value.WarehouseID = 1;
    this.value.UnitID = this.Units[0].LKP_ID;
    if (this.cart.find(x => x.ItemID === this.value.ItemID)) {
      this.qty = this.cart.find(x => x.ItemID === this.value.ItemID).Qty;
    } else {
      this.qty = '';
    }
  }

  addToCart(item, qty) {

    console.log(this.cart.find(x => x.ItemID === item.ItemID));

    if (this.cart.find(x => x.ItemID === item.ItemID)) {

      this.cart.find(x => x.ItemID === item.ItemID).Qty = +qty;

      if (this.cart.find(x => x.ItemID === item.ItemID).Qty === 0) {
        const index = this.cart.indexOf(this.cart.find(x => x.ItemID === item.ItemID));
        if (index > -1) {
          this.cart.splice(index, 1);
        }
      }
    } else {
      this.cart.push({item: item, Qty: +qty, ItemID: item.ItemID});
      if (this.cart.find(x => x.ItemID === item.ItemID).Qty === 0) {
        const index = this.cart.indexOf(this.cart.find(x => x.ItemID === item.ItemID));
        if (index > -1) {
          this.cart.splice(index, 1);
        }
      }
    }
    localStorage.setItem('Cart', JSON.stringify(this.cart));
     this.events.publish('cart:updated', 1, Date.now());
    this.modalController.dismiss({
      'result': this.cart
    });
  }

  close() {
    this.modalController.dismiss({
      'result': this.cart
    });
  }

  accept() {
  //  console.log(this.value);
    this.addToCart(this.value, this.qty);
  }

  changeQty() {
    console.log(this.qty);
  }

}
