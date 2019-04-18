import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, Platform } from '@ionic/angular';
import { FakeApiService } from '../../service/fake-api/fake-api.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  loginData = {UserName: '', Password: ''};
  validation_messages = {
    'UserName': [
        { type: 'required', message: 'UserName is required.' }
    ],
    'Password': [
        { type: 'required', message: 'Password is required.' },
        { type: 'minlength', message: 'Password must be at least 5 characters long' }
    ]
};

  constructor(
    private router: Router,
    private fakeApi: LocalStorageService,
    private FA: FakeApiService,
    private toastController: ToastController,
    public platform: Platform,
    public formBuilder: FormBuilder) {
      this.validations_form = this.formBuilder.group({
        UserName: new FormControl('', Validators.compose([
          Validators.required
        ])),
        Password: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(2)
        ])),

    });
    }

ngOnInit() {
}

  onSubmit(values) {
    this.loginData = {
      UserName: values.UserName,
      Password: values.Password
  };
    console.log(this.loginData);
    this.fakeApi.getUserByUsernameAndPassword(this.loginData).then((data: any) => {

      this.FA.getUserRole(data.AccId).then((role: any) => {
        let Role: any;

        if (this.platform.is('cordova')) {
         Role = [];
              if (role.res.rows.length > 0) {
                for (let i = 0; i < role.res.rows.length; i++) {
                  Role.push(role.res.rows.item(i));
                }
              }
        } else {
        Role = Object.values(role.res.rows);
        }
        role = Role[0];
        console.log('test', role);
       if (role) {
        if (role.AccID === +data.AccId) {
          localStorage.setItem('Salesman', JSON.stringify(data));
          localStorage.setItem('LoginAs', 'Client');
          this.router.navigate(['/dashboard']);
        } else if (role.SupervisorID === +data.AccId) {
          localStorage.setItem('Salesman', JSON.stringify(data));
          localStorage.setItem('LoginAs', 'Supervisor');
          this.router.navigate(['/dashboard']);
        } else if (role.EmployeeID === +data.AccId) {
          localStorage.setItem('Salesman', JSON.stringify(data));
          localStorage.setItem('LoginAs', 'Employee');
          this.router.navigate(['/dashboard']);
        }
      } else {
          this.presentToast('Sorry, You are not authorized to login at this moment');
        }
        // console.log('Sorry, You are not authorized to login at this moment');
      }).catch(err => {
        this.presentToast(err.msg);
      });
    }).catch(err => {
      this.presentToast(err.msg);
    });
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }

}
