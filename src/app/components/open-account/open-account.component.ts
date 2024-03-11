import { Component } from '@angular/core';
import { IRegister } from 'src/app/models/iRegister';
import { NgForm } from '@angular/forms';
import { ApiServices } from 'src/app/apiServices';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/ilogin';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent {
  errorMessage : Boolean = false
  iRegister: IRegister = {
    email: '',
    password: '',
    name: '',
    lastname: ''
  }
  ilogin: ILogin = {
    email: '',
    password: ''
  }

  constructor(
    private apiService : ApiServices,
    private router: Router
  ){}

  openAccount(form: NgForm){
    console.log('form value', form.value)

    this.apiService.openAccount(this.iRegister).subscribe((res : any) => {
      console.log('RES EN TRU')
      console.log('res in openAccount arrives as', res)
      this.ilogin.password = this.iRegister.password
      this.ilogin.email = this.iRegister.email
      console.log('this.ilogin LLEGA', this.ilogin)
      this.apiService.login(this.ilogin).subscribe(res => {
        console.log('login res', res)
        this.router.navigate(['/home'])
      })
    },
    (error) => {
      this.errorMessage = true
    })
  }
}
