import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { FoodComponent } from './food/food.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SignupComponent } from './signup/signup.component';
import { OrderformComponent } from './orderform/orderform.component';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"food",component:FoodComponent},
  {path:"footer",component:FooterComponent},
  {path:"home",component:HomeComponent},
  {path:"main",component:MainComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"order",component:OrderComponent},
  {path:"searchbar",component:SearchbarComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"orderform",component:OrderformComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
