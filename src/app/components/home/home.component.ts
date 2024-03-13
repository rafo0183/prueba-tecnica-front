import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/app/apiServices';
import { ICheckingAccount } from 'src/app/models/iCheckingAccount';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  iCheckingAccount : ICheckingAccount = {
    email: '',
    accountBalance: 0,
    accountNumber: 0,
    accountOverdraft: 0,
    rewardPoints: 0
  }

  iUser : IUser = {
    id: 0,
    email: '',
    password: '',
    name: '',
    lastname: '',
    isDeleted: false,
    createdAt: new Date,
    updatedAt: new Date,
    role: ''
  }

  constructor(
    private apiService : ApiServices
  ){}

  ngOnInit(): void {
    this.fillIUser()
    this.fillCheckingAccount()
    
  }

  private fillIUser(){
    this.iUser = JSON.parse(localStorage.getItem('user')!); 
  }

  private fillCheckingAccount(){
    this.apiService.getCheckingAccountByUser(this.iUser.id).subscribe({
      next : (res) => {
        this.iCheckingAccount = res
      }
    })
  }
}
