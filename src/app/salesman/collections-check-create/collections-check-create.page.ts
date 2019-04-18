import { Component, OnInit } from '@angular/core';
import { ModalController, Events } from '@ionic/angular';
import { CollectionModalComponent } from '../../components/collection-modal/collection-modal.component';

@Component({
  selector: 'app-collections-check-create',
  templateUrl: './collections-check-create.page.html',
  styleUrls: ['./collections-check-create.page.scss'],
})
export class CollectionsCheckCreatePage implements OnInit {

  header = JSON.parse(localStorage.getItem('CollectionsHeader'));
  modal: any;
  constructor(
    public modalController: ModalController,
    public events: Events
  ) {

    events.subscribe('Collection:updated', (user, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.header = (localStorage.getItem('CollectionsHeader')) ? JSON.parse(localStorage.getItem('CollectionsHeader')) : [];
    });
   }

  ngOnInit() {
  }

  async presentModal(item) {
    this.modal = await this.modalController.create({
      component: CollectionModalComponent,
      componentProps: { value: item, data: 0 }
    });
    return await this.modal.present();
  }

  deleteCheque(array, index) {
    console.log(array);
    if (index > -1) {
      array.splice(index, 1);
    }
    this.header.Cheque = array;
    localStorage.setItem('CollectionsHeader', JSON.stringify(this.header));
  }

  async updateModal(item, data, index) {
    this.modal = await this.modalController.create({
      component: CollectionModalComponent,
      componentProps: { value: item, data: data, index: index }
    });
    return await this.modal.present();
  }


}
