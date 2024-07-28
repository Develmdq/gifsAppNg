import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsComponent } from './gifs.component';

@NgModule({
  declarations: [GifsComponent],
  exports: [GifsComponent],
  imports: [CommonModule],
})
export class GifsModule {}


