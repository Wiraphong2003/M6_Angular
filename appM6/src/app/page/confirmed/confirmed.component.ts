
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataserveiceService } from 'src/app/dataserveice.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.scss']
})
export class ConfirmedComponent {
  ALL !: any;
  constructor(
    private dialogRef: MatDialogRef<ConfirmedComponent>,
    private dataService: DataserveiceService,
    private local: LocalService
  ) {
    this.ALL = dataService.ALL;
  }

  close() {
    console.log("close");
    this.dialogRef.close();
  }
}
