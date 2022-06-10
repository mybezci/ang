import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SeiteComponent } from './seite/seite.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './guard/auth.guard';
import { LogvalidService } from './login/logvalid.service';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { Category1Component } from './category/category1/category1.component';
import { Category2Component } from './category/category2/category2.component';
import { Category3Component } from './category/category3/category3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    HeaderComponent,
    SeiteComponent,
    NotfoundComponent,
    UserComponent,
    CategoryComponent,
    Category1Component,
    Category2Component,
    Category3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [AuthGuard, LogvalidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
