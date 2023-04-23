
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.scss']
})
export class ConfirmedComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

  ) { }


  onNoClick(): void {
    console.log("close");

    this.dialogRef.close();
  }
  ok() {
    console.log("OK");
    this.dialogRef.close();
  }


  public decline() {
    this.dialogRef.close(false);
  }

  public accept() {
    this.dialogRef.close(true);
  }

  public dismiss() {
    // this.activeModal.dismiss();
  }

}
