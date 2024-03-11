import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiServices } from 'src/app/apiServices';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-modal-edit-users',
  templateUrl: './modal-edit-users.component.html',
  styleUrls: ['./modal-edit-users.component.css']
})
export class ModalEditUsersComponent {
  userInEdition : IUser 
  saving : Boolean = false
  deleteUser: Boolean = false
  
  constructor(
    private apiService : ApiServices,
    public activeModal: NgbActiveModal
  ){
    this.userInEdition = {
      id : -1,
      email: '',
      password: '',
      name: '',
      lastname: '',
      createdAt: new Date,
      updatedAt: new Date,
      role: ''
    }
  }

  close() {
    this.activeModal.close();
  }

  editOrDeleteuser(form : any) : void{
    alert('Lo siento, esto aún no está listo :/')
  }
}
