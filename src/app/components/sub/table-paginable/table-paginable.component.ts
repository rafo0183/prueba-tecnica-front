import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPage } from 'src/app/models/iPage';
import { IColumnAttrItem } from 'src/app/models/subModels/IColumnAttrItem';
import { XlsxUtil } from 'src/app/util/xlsxUtil';

@Component({
  selector: 'app-table-paginable',
  templateUrl: './table-paginable.component.html',
  styleUrls: ['./table-paginable.component.css']
})
export class TablePaginableComponent {
  @Input() page: IPage;
  @Input() columnsAttr: IColumnAttrItem[] = [];
  @Input() exportable : Boolean;
  @Output() changePageEmit = new EventEmitter<any>();
  @Output() fillTableEmit = new EventEmitter<any>();

  constructor(
    private xlsxUtil : XlsxUtil 
  ){
    this.page = {
      currentPage : 0,
      rowsPerPage : 5,
      totalRows : 0,
      maxPages : 0,
      results: []
    }
    this.exportable = false
  }

  changePage(pageToGo:number) : void{
    this.changePageEmit.emit(pageToGo)
  }

  changeSize(){
    this.page.currentPage = 0
    this.fillTable()
  }

  fillTable() : void{
    this.fillTableEmit.emit();
  }

  getColumnValue(columnInfo: IColumnAttrItem, row: any): string{
    let aux : any = null;
    columnInfo.code.forEach(co => {
      if(aux==null){
        aux = row[co]
      }else{
        aux = aux[co]
      }
    })
    return aux
  }

  exportPage() : void{
    console.log('exporting in excel...')
    const table = document.getElementById('dataTable')
    this.xlsxUtil.exportTableAsExcelFile(table,'test name')
  }

  exportPageFull() : void{
    alert('Esto aún no está realizado')
  }
}
