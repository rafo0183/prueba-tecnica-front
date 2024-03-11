import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/app/apiServices';
import { ITransfer } from 'src/app/models/iTransfer';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit{
  iTranfers: ITransfer[] = [];
  modalTransfer: Boolean = false;

  constructor(
    private apiService : ApiServices
  ){}

  ngOnInit(): void {
    this.fillTransferTable()
  }


  fillTransferTable() : void {
    const iUser : IUser = JSON.parse(localStorage.getItem('user')!);

    this.apiService.getTransferList(iUser.id).subscribe({
      next : (res) => {
        this.iTranfers = res;
      },
      error : (err) =>{
        console.log('Error login', err)
      }
    })
  }

  

}

