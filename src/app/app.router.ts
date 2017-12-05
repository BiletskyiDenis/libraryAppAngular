import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {CatalogComponent} from './catalog/catalog.component';
import {AssetBookComponent} from './assets/asset-book/asset-book.component';
import {AssetJournalComponent} from './assets/asset-journal/asset-journal.component';
import {AssetBroshoreComponent} from './assets/asset-broshore/asset-broshore.component';
import {DetailsComponent} from '../app/details/details.component';


export const router: Routes=[
    {path:'', component:IndexComponent,pathMatch:'full'},
    { path:'index', component:IndexComponent },
    { path:'catalog', component:CatalogComponent },
    { path:'addbook', component:AssetBookComponent },
    { path:'addjournal', component:AssetJournalComponent, },
    { path:'addbroshore', component:AssetBroshoreComponent },
    { path:'editbook/:id', component:AssetBookComponent },
    { path:'editjournal/:id', component:AssetJournalComponent },
    { path:'editbrochure/:id', component:AssetBroshoreComponent },
    { path:'details/:id', component:DetailsComponent },
];

export const routes:ModuleWithProviders=RouterModule.forRoot(router);