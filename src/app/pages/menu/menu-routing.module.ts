import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../products/products.module').then(
            (m) => m.ProductsPageModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../about/about.module').then((m) => m.AboutPageModule),
      },
      /*{
      path: 'donate',
      loadChildren: () =>
        import('../donate/donate.module').then((m) => m.DonatePageModule),
    },*/
      {
        path: 'activity',
        loadChildren: () =>
          import('../activity/activity.module').then(
            (m) => m.ActivityPageModule
          ),
      },
      {
        path: 'impact',
        loadChildren: () =>
          import('../impact/impact.module').then((m) => m.ImpactPageModule),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('../contacts/contacts.module').then(
            (m) => m.ContactsPageModule
          ),
      },
      {
        path: 'ourteam',
        loadChildren: () =>
          import('../ourteam/ourteam.module').then((m) => m.OurteamPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
