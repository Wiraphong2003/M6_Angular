import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username!: String;
  password!: String;
  hide: any;
  menu: any;
  data!: any;
  res !: any;
  dataUser = [
    {
      "cid": "1",
      "username": "user1",
      "password": "1234",
      "status": "1",
      "img1": "https://i.ibb.co/L8zp1sk/340618868-899903277951742-6679712580878809918-n-1-1.png"
    },
    {
      "cid": "2",
      "username": "user2",
      "password": "1234",
      "status": "2",
      "img1": "https://i.ibb.co/SdccY5n/imgtemp0.jpg"
    }
  ]

  constructor(
    private http: HttpClient,
    private router: Router,
    private Local: LocalService) {
  }
  login() {
    console.log('OK');
    let json = {
      "username": this.username,
      "password": this.password
    }
    console.log(this.dataUser);
    console.log(json);
    this.dataUser.forEach(element => {
      if (element.username === json.username) {
        console.log("username here");
        if (element.username === json.username) {
          this.Local.saveData("USER", element.username)
          this.Local.saveData("status", element.status)
          this.Local.saveData("img1", element.img1)
          this.router.navigateByUrl('/main');
        }
        console.log("Password Not Found");
      } else {
        console.log("not Found Username");
      }
    });

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
