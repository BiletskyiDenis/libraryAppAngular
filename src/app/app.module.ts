
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecentlyAddedComponent } from './components/recently-added/recently-added.component';
import { RecentlyAddedItemComponent } from './components/recently-added-item/recently-added-item.component';
import { CatalogComponent } from './catalog/catalog.component';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';
import { IndexComponent } from './index/index.component';
import {RouterModule} from '@angular/router';

import {routes, router} from './app.router';

import { GridModule } from '@progress/kendo-angular-grid';

import {LibraryService} from './services/library.service';
import {ResourceService} from './services/resource.service';

import { ImageSelectorComponent } from './components/image-selector/image-selector.component';
import { AssetBookComponent } from './assets/asset-book/asset-book.component';
import { AssetJournalComponent } from './assets/asset-journal/asset-journal.component';
import { AssetBroshoreComponent } from './assets/asset-broshore/asset-broshore.component';
import { DetailsComponent } from './details/details.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecentlyAddedComponent,
    RecentlyAddedItemComponent,
    CatalogComponent,
    IndexComponent,
    ImageSelectorComponent,
    AssetBookComponent,
    AssetJournalComponent,
    AssetBroshoreComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routes,
    GridModule,
    ReactiveFormsModule
  ],
  providers: [LibraryService, ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
