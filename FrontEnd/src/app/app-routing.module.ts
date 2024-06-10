import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HommeComponent } from './homme/homme.component';
import { FemmeComponent } from './femme/femme.component';
import { PaiementComponent } from './paiement/paiement.component';
import { SecuritypayementComponent } from './securitypayement/securitypayement.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'homme',component:HommeComponent},
  {path:'femme',component:FemmeComponent},
  {path:'paiement',component:PaiementComponent},
  {path:'femme/:key',component:PaiementComponent},
  {path:'security',component:SecuritypayementComponent},
  {path:'footer',component:FooterComponent},
  {path:'login admin',component:LoginComponent},
  {path:'login admin/ajouter',component:AddComponent},
  {path:'ajouter',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
