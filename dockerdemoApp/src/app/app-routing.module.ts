import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'utente',
    loadChildren: () => import('./features/utente/utente.module').then(m => m.UtenteModule),
  },
  { path:'', 
  redirectTo:'utente',pathMatch:'full'
},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
