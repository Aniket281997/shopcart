import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../shared/authguard/authentication.guard';

const routes: Routes = [
  {path:'dashboard',component:HomeComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
