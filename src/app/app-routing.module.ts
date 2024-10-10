import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RightSidebarComponent } from './pages/right-sidebar/right-sidebar.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"right-sidebar",component:RightSidebarComponent, outlet:"right-sidebar"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
