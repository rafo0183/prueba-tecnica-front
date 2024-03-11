import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServices } from 'src/app/apiServices';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  menuItems = [
    {
      role : 'ADMIN',
      items : [
        {
          label : 'Transferencias Realizadas',
          url : '/transfer-made'
        },
        {
          label : 'Stock de productos',
          url : '/articles-stock'
        },
        {
          label : 'Administrar usuarios',
          url : '/admin-users'
        },
      ]
    },
    {
      role : 'CLIENT',
      items : [
        {
          label : 'Transferencias',
          url : '/transfer'
        },
        {
          label : 'Créditos',
          url : '/credits'
        },
        {
          label : 'Puntos',
          url : '/reward-points'
        }
      ]
    }
  ];

  constructor(
    private apiService : ApiServices,
    private router: Router)
  {}
  
  closeSession(){
    this.apiService.closeCurrentSession()
    this.router.navigate(['/login'])
  }

  menuMaker() : any[]{
    let iUser :IUser = JSON.parse(localStorage.getItem('user')!);
    let elm = this.menuItems.find(f=>  f.role == iUser.role)
    if(elm!=undefined)
      return elm.items!
    return []
  }
}
