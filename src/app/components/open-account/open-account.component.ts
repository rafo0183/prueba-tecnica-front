import { Component } from '@angular/core';
import { IRegister } from 'src/app/models/iRegister';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  /*
  name = new FormControl('', Validators.required)
  lastname = new FormControl('', Validators.required)
  password = new FormControl('', Validators.required)
  email = new FormControl('', Validators.required)
*/
  formControl = new FormGroup({
    name: new FormControl("", [Validators.required,Validators.minLength(4)]),
    lastname: new FormControl("", [Validators.required,Validators.minLength(4)]),
    password: new FormControl("", [Validators.required, Validators.minLength(4)]),
    email: new FormControl("", [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
  });
  activateInvalids : Boolean = false

  constructor(
    private apiService : ApiServices,
    private router: Router
  ){}

  openAccount(){
    console.log('OPEN ACCOUNT', this.formControl, this.iRegister)
    if(this.formControl.valid){
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
    }else{
      console.log('invalid')
      this.activateInvalids = true
    }
  }
}
