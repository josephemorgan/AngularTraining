import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ITIGridModule } from '@iti/grid';

import { MenuGridPageComponent } from './menu-grid-page/menu-grid-page.component';
import { MenuGridComponent } from './menu-grid.component';

const MenuGridRoutes: Routes = [
  {
    path: '', component: MenuGridPageComponent
  }
]



@NgModule({
  declarations: [
    MenuGridPageComponent,
    MenuGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MenuGridRoutes),
    ITIGridModule
  ]
})
export class MenuGridModule { }
