import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component'
import {BookmarksComponent} from './bookmarks/bookmarks.component'
import {AngularFireAuthGuard} from '@angular/fire/auth-guard'

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'bookmarks', component: BookmarksComponent, canActivate: [AngularFireAuthGuard]},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
