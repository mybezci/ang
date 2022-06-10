import { Category3Component } from './category/category3/category3.component';
import { Category2Component } from './category/category2/category2.component';
import { Category1Component } from './category/category1/category1.component';
import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeiteComponent } from './seite/seite.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'seite', component: SeiteComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent },
  { path: '**', component: NotfoundComponent },
  {
    path: 'category', component: CategoryComponent,

    children: [
      { path: 'category', component: Category1Component },
      { path: 'category2', component: Category2Component },
      { path: 'category3', component: Category3Component }

    ]

  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
