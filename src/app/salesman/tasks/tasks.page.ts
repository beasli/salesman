import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/api/data.service';
import { Events, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  task: any;

  tasks = (localStorage.getItem('savedTasks')) ? JSON.parse(localStorage.getItem('savedTasks')) : [];
  tempTasks = (localStorage.getItem('tempTasks')) ? JSON.parse(localStorage.getItem('tempTasks')) : [];
  completedTasks = (localStorage.getItem('CompletedTasks')) ? JSON.parse(localStorage.getItem('CompletedTasks')) : [];


  constructor(
    private api: DataService,
    private events: Events,
    public alertController: AlertController
  ) {

    this.task = this.initTask();
    this.events.subscribe('savedTasks:updated', (user, time) => {
      console.log('savedTasks Subsriced');
      this.tasks = (localStorage.getItem('savedTasks')) ? JSON.parse(localStorage.getItem('savedTasks')) : [];
      this.tempTasks = (localStorage.getItem('tempTasks')) ? JSON.parse(localStorage.getItem('tempTasks')) : [];

    });

    this.events.subscribe('tempTasks:updated', (user, time) => {
      console.log('tempTasks Subsriced');
      this.tasks = (localStorage.getItem('savedTasks')) ? JSON.parse(localStorage.getItem('savedTasks')) : [];
      this.tempTasks = (localStorage.getItem('tempTasks')) ? JSON.parse(localStorage.getItem('tempTasks')) : [];
      this.tempTasks.forEach(element => {
        this.tasks.push(element);
      });
      this.tempTasks = [];
    });

    this.events.subscribe('CompletedTasks:updated', (user, time) => {
      console.log('CompletedTasks Subsriced');
      this.completedTasks = (localStorage.getItem('CompletedTasks')) ? JSON.parse(localStorage.getItem('CompletedTasks')) : [];

    });

  }

  ionViewDidEnter() {
    console.log(this.tempTasks);
    console.log(this.tasks);
    console.log(this.completedTasks);
  }

  initTask() {
    return {
      'Id': 0,
      'Subject': '',
      'SupervisorID': 0,
      'EmployeeID': '',
      'IsAll': true,
      'IsCompleted': false,
      'IsActive': true,
      'CreatedBy': (localStorage.getItem('Salesman')) ? JSON.parse(localStorage.getItem('Salesman')).AccId : 0,
      'CreatedOn': this.formatDate(),
      'IsDeleted': false
    };
  }

  ngOnInit() {
  }

  uploadTask() {

    if (this.task.Subject === '') {
      alert('Please fill all required fields');
      console.log(this.task);
    } else {
      this.task.CreatedOn = this.formatDate();

      console.log(this.task);

      let tempTasks: any;
      if (!localStorage.getItem('tempTasks')) {
        tempTasks = [];
      } else {
        tempTasks = JSON.parse(localStorage.getItem('tempTasks'));
      }
      tempTasks.push(this.task);
      const index = tempTasks.indexOf(this.task);
      localStorage.setItem('tempTasks', JSON.stringify(tempTasks));
      this.events.publish('tempTasks:updated', 1, Date.now());
      const data = this.task;
      this.task = this.initTask();

      alert('Task Created');
      console.log(this.api.networkStatus);
      if (this.api.networkStatus === 'Connected') {

        const a = JSON.parse(localStorage.getItem('tempTasks'));
        a.splice(index, 1);
        localStorage.setItem('tempTasks', JSON.stringify(a));
        this.events.publish('tempTasks:updated', 1, Date.now());

        this.api.uploadTask(data).then((res: any) => {
          console.log(res);
          if (res.ReturnCode === 0) {

            let savedTasks: any;

            if (!localStorage.getItem('savedTasks')) {
              savedTasks = [];
            } else {
              savedTasks = JSON.parse(localStorage.getItem('savedTasks'));
            }
            res.Data.IsUploaded = 1;
            savedTasks.push(res.Data);
            localStorage.setItem('savedTasks', JSON.stringify(savedTasks));

            this.events.publish('savedTasks:updated', 1, Date.now());

          }

        }, err => {
          console.log(err);
        });
      } else if (this.api.networkStatus === 'Disconnected') {

      }

    }
  }

  formatDate() {
    const d = new Date();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    const hours = d.getHours();
    const mins = d.getMinutes();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }
    return year + '-' + month + '-' + day + 'T' + hours + ':' + mins + ':00';
  }

  completeTempTask(tempTask, i) {

    tempTask.IsCompleted = true;
    tempTask.IsUploaded = 0;

    let CompletedTasks: any;
    if (!localStorage.getItem('CompletedTasks')) {
      CompletedTasks = [];
    } else {
      CompletedTasks = JSON.parse(localStorage.getItem('CompletedTasks'));
    }
    CompletedTasks.push(tempTask);

    const a = JSON.parse(localStorage.getItem('tempTasks'));
    a.splice(i, 1);
    localStorage.setItem('tempTasks', JSON.stringify(a));

    const index = CompletedTasks.indexOf(tempTask);

    localStorage.setItem('CompletedTasks', JSON.stringify(CompletedTasks));
    this.events.publish('tempTasks:updated', 1, Date.now());
    this.events.publish('CompletedTasks:updated', 1, Date.now());

    alert('Task Completed');

    if (this.api.networkStatus === 'Connected') {

      this.api.uploadTask(tempTask).then((res: any) => {
        console.log(res);
        if (res.ReturnCode === 0) {
          res.Data.IsUploaded = 1;
          let CompletedTask: any;
          if (!localStorage.getItem('CompletedTasks')) {
            CompletedTask = [];
            CompletedTask.push(res.Data);
          } else {
            CompletedTask = JSON.parse(localStorage.getItem('CompletedTasks'));
            CompletedTask[index] = res.Data;
          }

          localStorage.setItem('CompletedTasks', JSON.stringify(CompletedTask));
          this.events.publish('CompletedTasks:updated', 1, Date.now());
        }

      }, err => {
        console.log(err);
      });
    } else if (this.api.networkStatus === 'Disconnected') {

    }

  }

  completeSavedTask(tempTask, i) {

    tempTask.IsCompleted = true;
    tempTask.IsUploaded = 0;

    let CompletedTasks: any;
    if (!localStorage.getItem('CompletedTasks')) {
      CompletedTasks = [];
    } else {
      CompletedTasks = JSON.parse(localStorage.getItem('CompletedTasks'));
    }
    CompletedTasks.push(tempTask);

    const a = JSON.parse(localStorage.getItem('savedTasks'));
    a.splice(i, 1);
    localStorage.setItem('savedTasks', JSON.stringify(a));

    const index = CompletedTasks.indexOf(tempTask);

    localStorage.setItem('CompletedTasks', JSON.stringify(CompletedTasks));
    this.events.publish('savedTasks:updated', 1, Date.now());
    this.events.publish('CompletedTasks:updated', 1, Date.now());

    alert('Task Completed');

    if (this.api.networkStatus === 'Connected') {

      this.api.updateTask(tempTask).then((res: any) => {
        console.log(res);
        if (res.ReturnCode === 0) {
          res.Data.IsUploaded = 1;
          let CompletedTask: any;
          if (!localStorage.getItem('CompletedTasks')) {
            CompletedTask = [];
            CompletedTask.push(res.Data);
          } else {
            CompletedTask = JSON.parse(localStorage.getItem('CompletedTasks'));
            CompletedTask[index] = res.Data;
          }

          localStorage.setItem('CompletedTasks', JSON.stringify(CompletedTask));
          this.events.publish('CompletedTasks:updated', 1, Date.now());
        }

      }, err => {
        console.log(err);
      });
    } else if (this.api.networkStatus === 'Disconnected') {

    }

  }

  async presentAlertCheckbox(task, i, type) {

    const employees = (localStorage.getItem('User')) ? JSON.parse(localStorage.getItem('User')) : [];

    const emps = [];

    const assigned = (task[i].EmployeeID) ? JSON.parse(task[i].EmployeeID) : [];
    console.log(assigned);
    employees.forEach(element => {

      const found = (assigned.find(x => x === element.AccId)) ? true : false;
      console.log(found);
      const obj = {
        name: element.ArName,
        type: 'checkbox',
        label: element.ArName,
        value: element.AccId,
        checked: found
      };

      emps.push(obj);

    });

    const alert = await this.alertController.create({
      header: 'Employees',
      inputs: emps,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
            const Edata = JSON.stringify(data);
            task[i].EmployeeID = Edata;
            task[i].IsUploaded = 0;
            if (type === 'saved') {
              localStorage.setItem('savedTasks', JSON.stringify(task));
              if (this.api.networkStatus === 'Connected') {

                this.api.updateTask(task[i]).then((res: any) => {
                  console.log(res);
                  if (res.ReturnCode === 0) {
                    res.Data.IsUploaded = 1;
                    let savedTasks: any;
                    if (!localStorage.getItem('savedTasks')) {
                      task = [];
                      savedTasks.push(res.Data);
                    } else {
                      savedTasks = JSON.parse(localStorage.getItem('savedTasks'));
                      savedTasks[i] = res.Data;
                    }

                    localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
                    this.events.publish('savedTasks:updated', 1, Date.now());
                  }

                }, err => {
                  console.log(err);
                });

              }
            } else {
              localStorage.setItem('tempTasks', JSON.stringify(task));
            }

            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  canView(tempTask) {
    const id = (localStorage.getItem('Salesman')) ? JSON.parse(localStorage.getItem('Salesman')).AccId : 0;
    if (tempTask.CreatedBy === id) {
      return true;
    } else {
      const assigned = (tempTask.EmployeeID) ? JSON.parse(tempTask.EmployeeID) : [];
      if (assigned.find(x => x === id)) {
        return true;
      } else {
        return false;
      }
    }
  }

}
