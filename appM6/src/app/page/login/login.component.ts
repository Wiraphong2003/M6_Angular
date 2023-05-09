import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataserveiceService } from 'src/app/dataserveice.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  texError = ""
  username!: String;
  password!: String;
  hide: any;
  menu: any;
  data!: any;
  res !: any;
  dataUser!: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private Local: LocalService,
    private dataservice: DataserveiceService) {
    this.dataUser = dataservice.datauser;
  }
  login() {
    console.log('OK');
    let json = {
      "username": this.username,
      "password": this.password
    }

    let ischk = false;
    let paw = ""
    // console.log(this.dataUser);
    console.log(json);
    for (let index = 0; index < this.dataUser.length; index++) {
      const element = this.dataUser[index];
      if (element.username == json.username) {
        ischk = true;

        console.log("this ts a user " + element.username);

        if (json.password == element.password) {
          console.log("password pass");
          this.Local.saveData("USER", element.username)
          this.Local.saveData("status", element.status)
          this.Local.saveData("img1", element.img1)
          // this.router.navigateByUrl('/main');
          if ("user1" == json.username) {
            this.router.navigateByUrl('/main');
          } else if ("user2" == json.username) {
            this.router.navigateByUrl('/main2');
          }else if ("mark" == json.username) {
            this.router.navigateByUrl('/main3');
          } else{
            this.texError = "บัญชีผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"
          }
        } else {
          console.log("password  Fiall");
          this.texError = "รหัสผ่านไม่ถูกต้อง"
        }
      } else {
        console.log("not Found Username");
        this.texError = "บัญชีผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"
      }
    }
    // this.dataUser.forEach(element => {
    //   // console.log(element.username);
    //   // console.log(element.password);
    //   // console.log(json.username);
    //   // console.log(json.password);

    //   if (element.username === json.username) {
    //     ischk = true;
    //     paw = element.password
    //     console.log("this ts a user " + element.username);
    //     stop;
    //   } else {
    //     console.log("not Found Username");
    //     this.texError = "บัญชีผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"
    //   }
    // });

    // if (ischk) {
    //   if (json.password === paw) {
    //     console.log("password pass");
    //   } else {
    //     console.log("password  Fiall");
    //     this.texError = "รหัสผ่านไม่ถูกต้อง"
    //   }
    // }

    // let json = {
    //   "username": "user1"
    // }
    // http://202.28.34.250/webdev/login
    // http://localhost:9999/webAPI_ProjectWebFinal/login
    // https://a1-5ym4.onrender.com/login
    // http://localhost:3000/login

    // this.http.post('http://localhost:3000/login', {
    //   keyword: json, // changed this
    //   responseType: 'text',
    //   headers: Headers,
    // }).subscribe(Response => {
    //   console.log(Response);
    //     console.log("success");
    //     if (Response) {
    //       console.log("IN OK");
    //       // this.router.navigateByUrl('/member/' + this.username);
    //       this.router.navigateByUrl('/main');
    //     }
    // });

    // this.http.post('http://localhost:3000/login', JSON.stringify(json))
    //   .subscribe((result) => console.log(result));

    // this.http.post('https://nodejsapim6.herokuapp.com/login', JSON.stringify(json))
    //   .subscribe(Response => {
    //     console.log(json);
    //     console.log("IN LOGIN");
    //     console.log(Response);
    //     this.res = Response;
    //     if (this.res.Boolean === true) {
    //       console.log("Login Pass");
    //       this.router.navigateByUrl('/main');
    //     } else {
    //       console.log("Login Fial");
    //     }
    //   }, Error => {
    //     console.log("Fail");
    //   });
  }
}
