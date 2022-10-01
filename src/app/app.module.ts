import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//accessing ngModel for 2-way binding
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { DealsComponent } from './deals/deals.component';
import { PaldealsComponent } from './deals/paldeals/paldeals.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { DecorComponent } from './decor/decor.component';
import { GiftsComponent } from './gifts/gifts.component';
import { NewarivalsComponent } from './newarivals/newarivals.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HttpClientModule } from '@angular/common/http';

import { CartItemsComponent } from './cart-items/cart-items.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';










@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CardsComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    AdvertisementComponent,
    AllproductsComponent,
    CounterComponent,
    CounterchildComponent,
    DealsComponent,
    PaldealsComponent,
    AccessoriesComponent,
    DecorComponent,
    GiftsComponent,
    NewarivalsComponent,
    ContactComponent,
    ProductdetailsComponent,
    
    CartItemsComponent,
         RegisterComponent,
         LoginComponent,
         AdminComponent
         
         
    
    
   
  
    
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
