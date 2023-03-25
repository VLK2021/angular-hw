import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LeyoutComponent} from "./components/leyout/leyout.component";
import {HomeComponent} from "./components/home/home.component";
import {CommonModule} from "@angular/common";



const routes: Routes = [
  {path: '', component: LeyoutComponent, children:[
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component:HomeComponent},
      // {path: 'users', loadChildren: () => import('./modules').then(value => value.UsersModule)},
    ]}
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
