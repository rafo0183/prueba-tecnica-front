import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import * as XLSX from 'xlsx';


@Injectable({
    providedIn: 'root'
})

export class XlsxUtil {

    constructor(
        private http: HttpClient
    ) { }

    public exportTableAsExcelFile(data: any, filename : string): void {
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(data)
        this.export(ws, filename)
    }

    public exportJsonAsExcelFile(data: any, filename : string): void {
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data)
        this.export(ws, filename)
    }

    private export(ws: XLSX.WorkSheet, filename : string){
        const wb : XLSX.WorkBook =  XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb,ws,'Prueba exportación')

        XLSX.writeFile(wb, `${filename}.xlsx`)
    }
}

