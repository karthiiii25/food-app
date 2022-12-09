import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { FoodComponent } from './food/food.component';
import { OrderComponent } from './order/order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { OrderformComponent } from './orderform/orderform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { environment } from 'src/environments/environment';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CategoriesComponent,
    FoodComponent,
    OrderComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    OrderformComponent,
    DashboardComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  exports:[
    MatDialogModule,

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
