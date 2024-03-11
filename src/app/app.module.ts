import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { OpenAccountComponent } from './components/open-account/open-account.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { ModalTransferComponent } from './components/transfer/modal-transfer/modal-transfer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RewardPointsComponent } from './components/reward-points/reward-points.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { CreditsComponent } from './components/credits/credits.component';
import { TransferMadeComponent } from './components/transfer-made/transfer-made.component';
import { ArticlesStockComponent } from './components/articles-stock/articles-stock.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { TablePaginableComponent } from './components/sub/table-paginable/table-paginable.component';
import { ModalEditUsersComponent } from './components/admin-users/modal-edit-users/modal-edit-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    OpenAccountComponent,
    TransferComponent,
    ModalTransferComponent,
    RewardPointsComponent,
    CreditsComponent,
    TransferMadeComponent,
    ArticlesStockComponent,
    AdminUsersComponent,
    TablePaginableComponent,
    ModalEditUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbToastModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
