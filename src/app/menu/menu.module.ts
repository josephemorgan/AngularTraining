import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatListModule } from '@angular/material/list'
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './menu.service';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    HttpClientModule,
    MatDividerModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [MenuService]
})
export class MenuModule { }
