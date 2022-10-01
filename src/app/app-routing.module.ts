import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { DecorComponent } from './decor/decor.component';
import { GiftsComponent } from './gifts/gifts.component';
import { PaldealsComponent } from './deals/paldeals/paldeals.component';
import { NewarivalsComponent } from './newarivals/newarivals.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AdminComponent } from './admin/admin.component';


//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'accessiories',component:AccessoriesComponent},
  {path:'decor',component:DecorComponent},
  {path:'gifts',component:GiftsComponent},
  {path:'deals',component:PaldealsComponent },
  {path:'arivals',component:NewarivalsComponent},
  {path:'contact',component:ContactComponent},
  {path:'prod_details',component:ProductdetailsComponent},
  {path:'register',component:RegisterComponent},
  
  {path:'cartitem',component:CartItemsComponent},
  {path:'admin',component:AdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
