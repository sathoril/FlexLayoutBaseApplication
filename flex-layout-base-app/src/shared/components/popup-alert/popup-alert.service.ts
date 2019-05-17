import { Observable } from 'rxjs';
import { PopupAlertComponent } from './popup-alert.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class PopupAlertService {
  popupRef: MatDialogRef<PopupAlertComponent>;

  constructor(private dialog: MatDialog) { }

  public openDialog(title: string, message: string): Observable<any> {
    // this.dialogRef = this.dialog.open(MessagesComponent);
    // this.dialogRef.componentInstance.title = title;
    // this.dialogRef.componentInstance.message = message;

    return this.popupRef.afterClosed();

    // Nothing can live after afterClosed.
  }
}