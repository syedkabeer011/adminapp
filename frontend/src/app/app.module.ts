import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { ProductService } from './product.service';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CreatepComponent } from './components/createp/createp.component';
import { EditComponent } from './components/edit/edit.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrderlistComponent } from './components/orderlist/orderlist.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'createp', component: CreatepComponent},
  {path: 'orderlist', component: OrderlistComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreatepComponent,
    EditComponent,
    SidenavComponent,
    NavbarComponent,
    OrderlistComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
