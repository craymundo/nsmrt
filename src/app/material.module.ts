import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports: [
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule
  ]
})
export class MaterialModule { }
