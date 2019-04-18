import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {

  sorts: any = [];
  type: any;
  search = false;

  constructor(
    private fakeApi: FakeApiService,
    private LS: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private platform: Platform) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.route.params.subscribe(params => {
      // PARAMS CHANGED .. TO SOMETHING REALLY COOL HERE ..
      // for example extract the id..
      console.log(params['type']); // (+) converts string 'id' to a number
      this.type = params['type'];
    });

    this.LS.getSortData().then((data: any) => {
      //    this.sorts = Object.values(sort);
      this.sorts = data;
    }).catch(err => {
      console.log(err);
    });
  }

  openItemsList(SortID) {
    if (this.type === 'add-to-cart') {
      this.router.navigate(['/add-items', SortID]);
    } else {
      this.router.navigate(['/item-list', SortID]);
    }
  }

  toggleSearchBar() {
    this.search = !this.search;
    if (!this.search) {
      this.ionViewWillEnter();
    }
  }

  searchItem(evt) {
    console.log(evt.detail.value);
    if (!evt.detail.value) {
      this.ionViewWillEnter();
    } else {
      // this.sorts = this.sorts.filter(x => x.ArName == evt.detail.value)
      const temp = [];
      this.sorts.forEach(element => {
        if (element.ArName.includes(evt.detail.value)) {
          temp.push(element);
        }
      });
      this.sorts = temp;
    }
  }

}
