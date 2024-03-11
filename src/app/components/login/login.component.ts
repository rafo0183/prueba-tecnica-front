import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServices } from 'src/app/apiServices';
import { ILogin } from 'src/app/models/ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  errorMessage : Boolean = false
  ilogin: ILogin = {
    email: '',
    password: ''
  }

  constructor(
    private apiService : ApiServices,
    private router: Router
  ){}

  login(form: NgForm){
    console.log('form value', form.value)

    this.apiService.login(this.ilogin).subscribe({
      next : (res) => {
        console.log('login res', res)
        this.apiService.getUserData(this.ilogin).subscribe((res : any) =>{
          this.router.navigate(['/home'])
        })
      },
      error : (err) =>{
        console.log('Error login', err)
      }
    })
  }
}
