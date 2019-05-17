import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-popup-alert',
  templateUrl: './popup-alert.component.html',
  styleUrls: ['./popup-alert.component.scss']
})
export class PopupAlertComponent implements OnInit {
  public titleMessage: string;
  public contentMessage: string;

  constructor(private dialogRef: MatDialogRef<PopupAlertComponent>) { 
  }

  private closeWithTimer() {
    setTimeout (() => {
      this.dialogRef.close();
    }, 2000);
  }

  ngOnInit() {
    this.closeWithTimer();
  }

}
