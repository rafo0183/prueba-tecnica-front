import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs";
import { ILogin } from "./models/ilogin";
import { IRegister } from "./models/iRegister";
import { ITransfer } from "./models/iTransfer";
import { IProduct } from "./models/iProduct";
import { IPage } from "./models/iPage";


@Injectable({
    providedIn: 'root'
})
export class ApiServices {
    constructor(
        private http: HttpClient
    ) { }
    closeCurrentSession(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('cart')
    }

    getToken() {
        return localStorage.getItem('token')
    }

    login(ilogin: ILogin) {
        return this.http.post('http://localhost:8080/services/login/login', ilogin, {
            observe: 'response'
        }).pipe(map((response: HttpResponse<any>) => {
            console.log('res arrives as', response)
            const body = response.body
            const headers = response.headers

            const bearerToken = headers.get('Authorization')!
            const token = bearerToken!.replace('Bearer ', '')

            localStorage.setItem('token', token)

            return body

        }))

    }

    getUserData(ilogin: ILogin) {
        return this.http.post('http://localhost:8080/services/login/getUserData', ilogin, {
            observe: 'response'
        }).pipe(map((response: HttpResponse<any>) => {
            console.log('res arrives as', response)
            const body = response.body
            localStorage.setItem('user', JSON.stringify(body))

            return body
        }))
    }

    openAccount(iRegister: IRegister){
        return this.http.post('http://localhost:8080/services/login/register', iRegister, {
            observe: 'response'
        }).pipe(map((response: HttpResponse<any>) => {
            console.log('res arrives as', response)
            const body = response.body

            return body
        }))
    }

    getCheckingAccountByUser(userId : number){
        return this.http.get(`http://localhost:8080/services/checking-accounts/checking-account-by-user/${userId}`, {
            observe: 'response'
        }).pipe(map((response: HttpResponse<any>) => {
            console.log('res getCheckin arrives as', response)
            const body = response.body

            return body
        }))
    }

    getTransferList(userId : number){
        return this.http.get(`http://localhost:8080/services/transfer/get-transfer-list/${userId}`, {
            observe: 'response'
        }).pipe(map((response: HttpResponse<any>) => {
            console.log('res getTransferList arrives as', response)
            const body = response.body

            return body
        }))
    }

    makeATransfer(iTransfer: ITransfer) {
        return this.http.post('http://localhost:8080/services/transfer/make-a-transfer', iTransfer, {
            observe: 'response'
        }).pipe(map((response: HttpResponse<any>) => {
            console.log('res arrives as', response)
            const body = response.body
            return body

        }))

    }

    getProductList(){
        return this.http.get(`http://localhost:8080/services/product/get-product-list`, {
            observe: 'response'
        }).pipe(map((response: HttpResponse<any>) => {
            console.log('res getTransferList arrives as', response)
            const body = response.body

            return body
        }))
    }

    redeemPoints(userId : number, cart: IProduct[]) {
        return this.http.post(`http://localhost:8080/services/transfer/redeem-points/${userId}`, cart, {
            observe: 'response'
        }).pipe(map((response: HttpResponse<any>) => {
            console.log('res arrives as', response)
            const body = response.body
            return body

        }))

    }

    getAllTransfers(ipage : IPage){
        return this.http.post(`http://localhost:8080/services/transfer/get-all-transfers`, ipage, {
            observe: 'response'
        }).pipe(map((response: HttpResponse<any>) => {
            console.log('res arrives as', response)
            const body = response.body
            return body

        }))
    }

    getUserList(){
        return this.http.get(`http://localhost:8080/services/user/getUserList`, {
            observe: 'response'
        }).pipe(map((response: HttpResponse<any>) => {
            console.log('res getTransferList arrives as', response)
            const body = response.body

            return body
        }))
    }
}

