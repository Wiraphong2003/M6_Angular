
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.scss']
})
export class ConfirmedComponent {
  constructor(
    private dialogRef: MatDialogRef<ConfirmedComponent>
  ) { }

  close() {
    console.log("close");
    this.dialogRef.close();
  }

  ok() {
    console.log("OK");
    this.close();
  }
}
