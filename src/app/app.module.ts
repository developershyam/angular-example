import { SemanticUIComponent } from './component/semantic-ui/semantic-ui.component';
import { SqrtPipe } from './pipe/sqrt.pipe';
import { MyBgDirective } from './directive/my-bg.directive';
import { Child2Component } from './component/parent-child/child2.component';
import { Child1Component } from './component/parent-child/child1.component';
import { ParentComponent } from './component/parent-child/parent.component';
import { ProductComponent } from './component/product/product.component';
import { UserService } from './service/user.service';
import { ManageUsersComponent } from './component/manage-users/manage-users.component';
import { MaterialModule } from './component/material.module';
import { MatComponent } from './component/mat/mat.component';
import { AboutComponent } from './component/about/about.component';
import { AppComponent } from './component/app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AboutComponent,
    MatComponent,
    ManageUsersComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    MyBgDirective,
    SqrtPipe,
    SemanticUIComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    MaterialModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
