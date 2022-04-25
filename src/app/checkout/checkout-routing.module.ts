import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { FavoriteComponent } from './component/favorite/favorite.component';

const routes: Routes = [
  {path:'fav/:id',component:FavoriteComponent},
  {path:'viewcart/:id',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
