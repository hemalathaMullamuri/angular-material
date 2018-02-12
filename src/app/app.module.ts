import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {MatInputModule, MatButtonModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule} from '@angular/material' ;
import {MatTooltipModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';
import {MatMenuModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DialogComponent } from './dialog/dialog.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';
import { MenuDemoComponent } from './menu-demo/menu-demo.component';
import { SideNavDemoComponent } from './side-nav-demo/side-nav-demo.component';
import { ToolbarDemoComponent } from './toolbar-demo/toolbar-demo.component';



@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    DialogComponent,
    MyDialogComponent,
    TooltipDemoComponent,
    SnackbarDemoComponent,
    MenuDemoComponent,
    SideNavDemoComponent,
    ToolbarDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
