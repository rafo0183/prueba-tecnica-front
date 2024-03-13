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
  deletingUser: Boolean = false
  
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
      isDeleted: false,
      createdAt: new Date,
      updatedAt: new Date,
      role: ''
    }
  }

  close() {
    this.activeModal.close();
  }

  editOrDeleteuser(form : any) : void{
    console.log('userInEdition',this.userInEdition)


    if(this.userInEdition.isDeleted){
      this.deletingUser=true
    }else{
      this.saving = true
    }

    this.apiService.saveUser(this.userInEdition).subscribe({
      next : (res) => {
        console.log('login res', res)
        location.reload()
      },
      error : (err) =>{
        console.log('Error login', err)
        this.deletingUser=false
        this.saving = false
        alert('Hubo un error....')
      }
    })
  }
}

