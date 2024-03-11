import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/app/apiServices';
import { IPage } from 'src/app/models/iPage';
import { IColumnAttrItem } from 'src/app/models/subModels/IColumnAttrItem';

@Component({
  selector: 'app-transfer-made',
  templateUrl: './transfer-made.component.html',
  styleUrls: ['./transfer-made.component.css']
})
export class TransferMadeComponent implements OnInit{
  ipage : IPage = {
    currentPage : 0,
    rowsPerPage : 5,
    totalRows : 0,
    maxPages : 0,
    results: []
  }
  columnsAttr : IColumnAttrItem[] = [
    {label : 'Cliente',code : ['checkingAccount','user','name'],format : 'text'},
    {label : 'Cuenta corriente',code : ['checkingAccount','accountNumber'],format : 'text'},
    {label : 'Cuenta destino',code : ['checkingAccountDestination'],format : 'text'},
    {label : 'Banco destino',code : ['bankDestination'],format : 'text'},
    {label : 'Monto',code : ['amount'],format : 'text'},
    {label : 'Fecha transferencia',code : ['createdAt'],format : 'text'},
  ]

  constructor(
    private apiService : ApiServices
  ){}
  
  ngOnInit(): void {
    this.fillTransferTable()
  }

  changePage(pageToGo:number) : void{
    this.ipage.currentPage = pageToGo
    this.fillTransferTable()
  }


  fillTransferTable() : void {
    this.apiService.getAllTransfers(this.ipage).subscribe({
      next : (res) => {
        this.ipage = res;
      },
      error : (err) =>{
        console.log('Error login', err)
      }
    })
  }

}
