import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HommeComponent } from './homme/homme.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { VetementsComponent } from './vetements/vetements.component';
import { MaterielAssecoiresComponent } from './materiel-accessoires/materiel-assecoires.component';
import { FemmeComponent } from './femme/femme.component';
import { VetementfemmeComponent } from './vetementfemme/vetementfemme.component';
import { AccessoirefemmeComponent } from './accessoirefemme/accessoirefemme.component';
import { PaiementComponent } from './paiement/paiement.component';
import { SecuritypayementComponent } from './securitypayement/securitypayement.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { AppercusComponent } from './appercus/appercus.component';
import { DeleteComponent } from './delete/delete.component';
import { TestimonialComponent } from './testimonial/testimonial.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HommeComponent,
    FooterComponent,
    VetementsComponent,
    MaterielAssecoiresComponent,
    FemmeComponent,
    VetementfemmeComponent,
    AccessoirefemmeComponent,
    PaiementComponent,
    SecuritypayementComponent,
    AddComponent,
    LoginComponent,
    AppercusComponent,
    DeleteComponent,
    TestimonialComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
    
   ],

  providers: [],
  bootstrap: [AppComponent],
  exports: [VetementsComponent,
    FormsModule,
    ]
})
export class AppModule { }
