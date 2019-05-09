import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressSpinnerComponent } from './progress-spinner.component';
import { ProgressSpinnerService } from './progress-spinner.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ProgressSpinnerComponent],
  entryComponents: [ProgressSpinnerComponent],
  providers: [ProgressSpinnerService],
  exports: []
})
export class ProgressSpinnerModule {}