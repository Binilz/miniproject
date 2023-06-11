import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private http: HttpClient) {}

  email='';
  password='';
  hide = true;
  login(): void {
    const userData = {
      email: this.email,
      password: this.password
    };
  
    this.http.post('http://192.168.19.76:3000/api/auth/signin', userData)
      .subscribe(
        (response) => {
          console.log(response);
          alert('Success')
        },
        (error) => {
          console.error(error);
          alert('error')
        }
      );
  }
  
}
