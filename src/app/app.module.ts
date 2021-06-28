import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StateService} from './state.service';
import { FindComponent } from './main/find/find.component'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import {FormsModule} from '@angular/forms';
import { ImageComponent } from './UI/image/image.component'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { MainComponent } from './main/main.component'
import {MatGridListModule} from '@angular/material/grid-list';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { SaveModeComponent } from './UI/save-mode/save-mode.component';
import { ImageModalComponent } from './UI/image-modal/image-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    FindComponent,
    ImageComponent,
    MainComponent,
    BookmarksComponent,
    SaveModeComponent,
    ImageModalComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatButtonModule,
		FormsModule,
		MatProgressSpinnerModule,
		MatToolbarModule,
		MatIconModule,
		MatGridListModule
	],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
