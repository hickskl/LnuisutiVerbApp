import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'conjugator',
        loadChildren: () => import('../conjugator/conjugator.module').then(m => m.ConjugatorPageModule)
      },
      {
        path: 'instructions',
        loadChildren: () => import('../instructions/instructions.module').then(m => m.InstructionsPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/conjugator',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
