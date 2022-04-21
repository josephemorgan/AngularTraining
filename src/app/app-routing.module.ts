import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

const routes: Routes = [
  { path: 'test-route', component: TestComponentComponent},
  { path: 'home', component: HomeComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: '**', redirectTo: '/home' },
  { path: 'menu-grid', loadChildren: () =>
    import('./menu-grid/menu-grid.module')
    .then(m => m.MenuGridModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
