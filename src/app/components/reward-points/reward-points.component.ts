import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ApiServices } from 'src/app/apiServices';
import { ICheckingAccount } from 'src/app/models/iCheckingAccount';
import { IProduct } from 'src/app/models/iProduct';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-reward-points',
  templateUrl: './reward-points.component.html',
  styleUrls: ['./reward-points.component.css']
})
export class RewardPointsComponent  implements OnInit{
  private _success = new Subject<string>()
  @ViewChild('toastAlert', {static:false}) selfClosingAlert : NgbAlert | undefined
  
  iCheckingAccount : ICheckingAccount = {
    email: '',
    accountBalance: 0,
    accountNumber: 0,
    accountOverdraft: 0,
    rewardPoints: 0
  }
  
  iUser : IUser = {
    id: 0,
    email: '',
    password: '',
    name: '',
    lastname: '',
    isDeleted: false,
    createdAt: new Date,
    updatedAt: new Date,
    role: ''
  }
  iProducts : IProduct[] = [];
  cart : IProduct[];
  toast = {
    autohide : true,
    show: false,
    message : ''
  }
  //cart : Array<IProduct> = new Array()

  constructor(
    private apiService : ApiServices
  ){
    this.cart = []
  }

  ngOnInit(): void {
    this.fillIUser()
    this.fillCheckingAccount()
    this.fillCart();
    this.getProductList()
  }

  private fillIUser(){
    this.iUser = JSON.parse(localStorage.getItem('user')!);
    
  }

  private getProductList(){
    this.apiService.getProductList().subscribe({
      next : (res) => {
        this.iProducts = res
      }
    })
  }

  private fillCheckingAccount(){
    this.apiService.getCheckingAccountByUser(this.iUser.id).subscribe({
      next : (res) => {
        this.iCheckingAccount = res
      }
    })
  }

  private fillCart() : void{
    if(localStorage.getItem('cart') !== null){
      this.cart = JSON.parse(localStorage.getItem('cart')!);
    }else{
      this.saveCartLocalStorage()
    }
  }

  addToCart(productId : number){
    console.log('Adding product to cart' , productId)
    const product = this.iProducts.find(p => p.id == productId) as IProduct
    if(product!=undefined){
      product.stock--
      this.cart.push(product)
      
      this.saveCartLocalStorage()

      this.toast.message = `<b>${product.name}</b> agregado al carrito`
      this.toast.show = true

      this._success.next("Hola mundo")
    }
  }

  private saveCartLocalStorage(){
    const cartStr : string = JSON.stringify(this.cart)
    localStorage.setItem('cart', cartStr)
  }

  stackeableCart() : any[]{
    let cartStack: any[] = []
    this.cart.forEach(e => {
      let prodList  = this.cart.filter(i => i.sku == e.sku)
      if(cartStack.find(cs => cs.product.sku === prodList[0].sku) == undefined ){
        const pst = {
          'product' : prodList[0],
          'count' : prodList.length
        }
        cartStack.push(pst)
      }
    })
    return cartStack
  }

  removeFromCart(productId : number) : void {
    const index = this.cart.findIndex(p => p.id == productId)
    this.cart.splice(index, 1);
    this.saveCartLocalStorage()
  }

  sumPoints() : number{
    let total : number = 0
    this.cart.forEach((p : IProduct) => {
      const price = p.price
      total = total + price
    })
    return total
  }

  redeemPoints(){
    console.log('redeemPoints...')
    if(this.sumPoints() > this.iCheckingAccount.rewardPoints){
      alert('No tienes suficientes puntos para cajear')
    }else{
      this.apiService.redeemPoints(this.iUser.id, this.cart).subscribe({
        next : (res) => {
          console.log('redeemPoints res', res)
          localStorage.setItem('cart', '[]')
          location.reload()
        },
        error : (err) =>{
          console.log('redeemPoints res error', err)
        }
      })
    }
  }
}
