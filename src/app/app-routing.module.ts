import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RightSidebarComponent } from './pages/right-sidebar/right-sidebar.component';
import { TopNewsComponent } from './pages/top-news/top-news.component';
import { CategorizedNewsComponent } from './pages/categorized-news/categorized-news.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path: ':category',  // Category route
    component: CategorizedNewsComponent
  },
  {
    path: ':category/:subcategory',  // Category + subcategory route
    component: CategorizedNewsComponent
  },
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
