import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiServices } from 'src/app/apiServices';
import { IUser } from 'src/app/models/iuser';
import { ModalEditUsersComponent } from './modal-edit-users/modal-edit-users.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit{
  private modalService = inject(NgbModal);
  private closeResult = ''
  iUsers : IUser[] = []

  constructor(
    private apiService : ApiServices
  ){}
  ngOnInit(): void {
    this.getUserList()
  }

  getUserList() : void {
    this.apiService.getUserList().subscribe({
      next : (res) => {
        this.iUsers = res
      },
      error : (err) =>{
        console.log('Error login', err)
      }
    })
  }

  editUser(user : any) : void{
    console.log("modalEditUser")
    const modal = this.modalService.open(ModalEditUsersComponent)
    modal.componentInstance.userInEdition = user
  }
}
