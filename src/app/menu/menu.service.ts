import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../Models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly menuItemApiUrl = 'api/MenuItems/MenuItems'

  constructor(private http: HttpClient) { }

  public getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.menuItemApiUrl);
  }
}
