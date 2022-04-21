import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../Models/menu-item';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe(result => {
      this.menuItems = result;
    }, error => console.error(error));
  }
}
