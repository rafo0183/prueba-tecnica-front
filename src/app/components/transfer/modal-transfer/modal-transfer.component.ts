import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServices } from 'src/app/apiServices';
import { ITransfer } from 'src/app/models/iTransfer';
import { IUser } from 'src/app/models/iuser';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-transfer',
  templateUrl: './modal-transfer.component.html',
  styleUrls: ['./modal-transfer.component.css']
})
export class ModalTransferComponent {
  modalTransfer!: NgbModalRef;
  transfering : Boolean = false;
  iTransfer : ITransfer = {
      id: 0,
      userId: null!,
      checkingAccount: null!,
      amount: 0,
      hash: "",
      checkingAccountDestination: 0,
      bankDestination: "",
      nameDestination: "",
      createdAt: new Date(),
      updatedAt: new Date()
  }
  constructor(
    private apiService : ApiServices,
    private modalService: NgbModal
  ){}

  makeATransfer(form: NgForm){
    this.transfering = true
    console.log('form ', form)
    const iUser : IUser = JSON.parse(localStorage.getItem('user')!);
    
    this.iTransfer.userId = iUser

    this.apiService.makeATransfer(this.iTransfer).subscribe({
      next : (res) => {
        this.transfering = false
        console.log('login res', res)
        location.reload()
      },
      error : (err) =>{
        this.transfering = false
        console.log('Error login', err)
      }
    })
    
  }
}
