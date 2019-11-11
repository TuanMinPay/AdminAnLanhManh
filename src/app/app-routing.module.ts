import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CreateFoodComponent } from './components/food/create-food/create-food.component';
import { ListFoodComponent } from './components/food/list-food/list-food.component';
import { CreateSetComponent } from './components/set/create-set/create-set.component';
import { ListSetComponent } from './components/set/list-set/list-set.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuardService] },
  { path: 'food/create', component: CreateFoodComponent, canActivate: [AuthGuardService] },
  { path: 'food/list', component: ListFoodComponent, canActivate: [AuthGuardService] },
  { path: 'set/create', component: CreateSetComponent, canActivate: [AuthGuardService] },
  { path: 'set/list', component: ListSetComponent, canActivate: [AuthGuardService] },
  { path: 'category/create', component: CreateCategoryComponent, canActivate: [AuthGuardService] },
  { path: 'category/list', component: ListCategoryComponent, canActivate: [AuthGuardService] },
  { path: 'auth/login', component: LoginComponent },
  { path: '**', component: MainComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
