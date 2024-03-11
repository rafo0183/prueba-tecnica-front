import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './helpers/auth.guard';
import { OpenAccountComponent } from './components/open-account/open-account.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { RewardPointsComponent } from './components/reward-points/reward-points.component';
import { CreditsComponent } from './components/credits/credits.component';
import { ArticlesStockComponent } from './components/articles-stock/articles-stock.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { TransferMadeComponent } from './components/transfer-made/transfer-made.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'open-account', component: OpenAccountComponent},
  {path: 'reward-points', component: RewardPointsComponent, canActivate : [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate : [AuthGuard]},
  {path: 'transfer', component: TransferComponent, canActivate : [AuthGuard]},
  {path: 'credits', component: CreditsComponent, canActivate : [AuthGuard]},
  {path: 'articles-stock', component: ArticlesStockComponent, canActivate : [AuthGuard]},
  {path: 'admin-users', component: AdminUsersComponent, canActivate : [AuthGuard]},
  {path: 'transfer-made', component: TransferMadeComponent, canActivate : [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
