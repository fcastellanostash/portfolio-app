import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioItemComponent } from './pages/portfolio-item/portfolio-item.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'about', component:AboutComponent},
  { path:'contact', component:ContactComponent},
  { path:'portfolioItem', component:PortfolioItemComponent},
  { path:'**', redirectTo:'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
