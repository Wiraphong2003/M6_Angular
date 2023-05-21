// import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { DataserveiceService } from 'src/app/dataserveice.service';
import { LocalService } from 'src/app/local.service';

import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import JSZip, { forEach } from 'jszip';
// import { saveAs } from 'file-saver';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmedComponent } from '../confirmed/confirmed.component';

interface maindata {
  name: any;
  url: any;
  time: any;
}
@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.scss']
})
export class Main2Component {
  @ViewChild('canvas', { static: true }) myCanvas !: ElementRef;
  @ViewChild('Arraycanvas', { static: true }) Arraycanvas!: ElementRef[];
  maindatas: maindata[] = [];

  // myDate = new Date();

  areAllImagesLoaded = false;

  // myDate !: any;
  arr: any[] = [];
  imageuser !: any;
  t1 = [
    {
      "lid": 1,
      "name": "ลาวEXTRA",
      "type": 1,
      "cid": null,
      "time": "08:25"
    },
    {
      "lid": 2,
      "name": "ฮานอยอาเซียน",
      "type": 1,
      "cid": null,
      "time": "09:10"
    },
    {
      "lid": 3,
      "name": "ลาวTV",
      "type": 1,
      "cid": 1,
      "time": "10:25"
    },
    {
      "lid": 4,
      "name": "ฮานอยHD",
      "type": 1,
      "cid": 1,
      "time": "11:10"
    },
    {
      "lid": 5,
      "name": "ฮานอยสตาร์",
      "type": 1,
      "cid": 1,
      "time": "12:10"
    },
    {
      "lid": 6,
      "name": "ลาวHD",
      "type": 1,
      "cid": 1,
      "time": "13:40"
    },
    {
      "lid": 7,
      "name": "ฮานอยTV",
      "type": 1,
      "cid": 1,
      "time": "14:10"
    },
    {
      "lid": 8,
      "name": "ลาวสตาร์",
      "type": 1,
      "cid": 1,
      "time": "15:40"
    },
    {
      "lid": 9,
      "name": "ฮานอยกาชาติ",
      "type": 1,
      "cid": 1,
      "time": "16:10"
    },
    {
      "lid": 10,
      "name": "ฮานอยสามัคคี",
      "type": 1,
      "cid": 1,
      "time": "17:10"
    },
    {
      "lid": 11,
      "name": "ฮานอยพัฒนา",
      "type": 1,
      "cid": 1,
      "time": "20:18"
    },
    {
      "lid": 12,
      "name": "ลาวสามัคคี",
      "type": 1,
      "cid": 1,
      "time": "20:20"
    },
    {
      "lid": 13,
      "name": "ลาวอาเซียน",
      "type": 1,
      "cid": 1,
      "time": "20:55"
    },
    {
      "lid": 14,
      "name": "ลาวสามัคคีVIP",
      "type": 1,
      "cid": 1,
      "time": "21:25"
    },
    {
      "lid": 15,
      "name": "ฮานอยEXTRE",
      "type": 1,
      "cid": 1,
      "time": "22:10"
    },
    {
      "lid": 16,
      "name": "ลาวสตาร์VIP",
      "type": 1,
      "cid": 1,
      "time": "21:45"
    },
    {
      "lid": 17,
      "name": "ลาวกาซาด",
      "type": 1,
      "cid": 1,
      "time": "23:25"
    },
    {
      "lid": 18,
      "name": "ดาวโจนส์VIP",
      "type": 1,
      "cid": 1,
      "time": "00:10"
    },
    {
      "lid": 19,
      "name": "ดาวโจนส์STAR",
      "type": 1,
      "cid": 1,
      "time": "01:05"
    }
  ]

  t2 = [
    {
      "lid": 20,
      "name": "นิเคอิเช้า",
      "type": 2,
      "cid": 1,
      "time": "09:25"
    },
    {
      "lid": 21,
      "name": "จีนเช้า",
      "type": 2,
      "cid": 1,
      "time": "10:20"
    },
    {
      "lid": 22,
      "name": "ฮั่งเส็งเช้า",
      "type": 2,
      "cid": 1,
      "time": "10:55"
    },
    {
      "lid": 23,
      "name": "ไต้หวัน",
      "type": 2,
      "cid": 1,
      "time": "12:10"
    },
    {
      "lid": 24,
      "name": "เกาหลี",
      "type": 2,
      "cid": 1,
      "time": "12:45"
    },
    {
      "lid": 25,
      "name": "นิเคอิบ่าย",
      "type": 2,
      "cid": 1,
      "time": "12:55"
    },
    {
      "lid": 26,
      "name": "จีนบ่าย",
      "type": 2,
      "cid": 1,
      "time": "13:45"
    },
    {
      "lid": 27,
      "name": "ฮั่งเส็งบ่าย",
      "type": 2,
      "cid": 1,
      "time": "14:52"
    },
    {
      "lid": 28,
      "name": "สิงคโปร์",
      "type": 2,
      "cid": 1,
      "time": "17:00"
    },
    {
      "lid": 29,
      "name": "ไทยเย็น",
      "type": 2,
      "cid": 1,
      "time": "16:05"
    },
    {
      "lid": 30,
      "name": "รัสเซีย",
      "type": 2,
      "cid": 1,
      "time": "22:30"
    },
    {
      "lid": 31,
      "name": "เยอรมัน",
      "type": 2,
      "cid": 1,
      "time": "22:15"
    },
    {
      "lid": 32,
      "name": "อังกฤษ",
      "type": 2,
      "cid": 1,
      "time": "22:15"
    },
    {
      "lid": 48,
      "name": "ดาวโจนส์ปกติ",
      "type": 2,
      "cid": 1,
      "time": "02:00"
    }
  ]

  t3 = [
    {
      "lid": 33,
      "name": "นิเคอิเช้าVIP",
      "type": 3,
      "cid": 1,
      "time": "09:00"
    },
    {
      "lid": 34,
      "name": "จีนเช้าVIP",
      "type": 3,
      "cid": 1,
      "time": "10:00"
    },
    {
      "lid": 35,
      "name": "ฮั่งเส็งเช้าVIP",
      "type": 3,
      "cid": 1,
      "time": "10:30"
    },
    {
      "lid": 36,
      "name": "ไต้หวันVIP",
      "type": 3,
      "cid": 1,
      "time": "11:30"
    },
    {
      "lid": 37,
      "name": "เกาหลีVIP",
      "type": 3,
      "cid": 1,
      "time": "12:30"
    },
    {
      "lid": 38,
      "name": "นิเคอิบ่ายVIP",
      "type": 3,
      "cid": 1,
      "time": "13:20"
    },
    {
      "lid": 39,
      "name": "จีนบ่ายVIP",
      "type": 3,
      "cid": 1,
      "time": "14:20"
    },
    {
      "lid": 40,
      "name": "ฮั่งเส็งบ่ายVIP",
      "type": 3,
      "cid": 1,
      "time": "15:20"
    },
    {
      "lid": 99,
      "name": "ลาวVIP",
      "time": "21:15"
    },
  ]

  t4 = [
    {
      "lid": 41,
      "name": "ฮานอยพิเศษ",
      "type": 4,
      "cid": 1,
      "time": "17:12"
    },
    {
      "lid": 42,
      "name": "ฮานอยปกติ",
      "type": 4,
      "cid": 1,
      "time": "18.12"
    },
    {
      "lid": 43,
      "name": "ฮานอยVIP",
      "type": 4,
      "cid": 1,
      "time": "19:10"
    },
    {
      "lid": 44,
      "name": "ลาวพัฒนา",
      "type": 4,
      "cid": 1,
      "time": "20:18"
    }
  ]
  t5 = [
    {
      "lid": 45,
      "name": "ไทย",
      "type": 5,
      "cid": 1,
      "time": "15:00"
    },
    {
      "lid": 46,
      "name": "ออมสิน",
      "type": 5,
      "cid": 1,
      "time": "13:00"
    },
    {
      "lid": 47,
      "name": "ธกส",
      "type": 5,
      "cid": 1,
      "time": "10:00"
    }
  ]
  type !: any;


  Lottary = [

      {
        "lid": 1,
        "name": "ลาวEXTRA",
        "type": 1,
        "cid": null,
        "time": "08:25"
      },
      {
        "lid": 2,
        "name": "ฮานอยอาเซียน",
        "type": 1,
        "cid": null,
        "time": "09:10"
      },
      {
        "lid": 3,
        "name": "ลาวTV",
        "type": 1,
        "cid": 1,
        "time": "10:25"
      },
      {
        "lid": 4,
        "name": "ฮานอยHD",
        "type": 1,
        "cid": 1,
        "time": "11:10"
      },
      {
        "lid": 5,
        "name": "ฮานอยสตาร์",
        "type": 1,
        "cid": 1,
        "time": "12:10"
      },
      {
        "lid": 6,
        "name": "ลาวHD",
        "type": 1,
        "cid": 1,
        "time": "13:40"
      },
      {
        "lid": 7,
        "name": "ฮานอยTV",
        "type": 1,
        "cid": 1,
        "time": "14:10"
      },
      {
        "lid": 8,
        "name": "ลาวสตาร์",
        "type": 1,
        "cid": 1,
        "time": "15:40"
      },
      {
        "lid": 9,
        "name": "ฮานอยกาชาติ",
        "type": 1,
        "cid": 1,
        "time": "16:10"
      },
      {
        "lid": 10,
        "name": "ฮานอยสามัคคี",
        "type": 1,
        "cid": 1,
        "time": "17:10"
      },
      {
        "lid": 11,
        "name": "ฮานอยพัฒนา",
        "type": 1,
        "cid": 1,
        "time": "20:18"
      },
      {
        "lid": 12,
        "name": "ลาวสามัคคี",
        "type": 1,
        "cid": 1,
        "time": "20:20"
      },
      {
        "lid": 13,
        "name": "ลาวอาเซียน",
        "type": 1,
        "cid": 1,
        "time": "20:55"
      },
      {
        "lid": 14,
        "name": "ลาวสามัคคีVIP",
        "type": 1,
        "cid": 1,
        "time": "21:25"
      },
      {
        "lid": 15,
        "name": "ฮานอยEXTRE",
        "type": 1,
        "cid": 1,
        "time": "22:10"
      },
      {
        "lid": 16,
        "name": "ลาวสตาร์VIP",
        "type": 1,
        "cid": 1,
        "time": "21:45"
      },
      {
        "lid": 17,
        "name": "ลาวกาซาด",
        "type": 1,
        "cid": 1,
        "time": "23:25"
      },
      {
        "lid": 18,
        "name": "ดาวโจนส์VIP",
        "type": 1,
        "cid": 1,
        "time": "00:10"
      },
      {
        "lid": 19,
        "name": "ดาวโจนส์STAR",
        "type": 1,
        "cid": 1,
        "time": "01:05"
      },
      {
        "lid": 20,
        "name": "นิเคอิเช้า",
        "type": 2,
        "cid": 1,
        "time": "09:25"
      },
      {
        "lid": 21,
        "name": "จีนเช้า",
        "type": 2,
        "cid": 1,
        "time": "10:20"
      },
      {
        "lid": 22,
        "name": "ฮั่งเส็งเช้า",
        "type": 2,
        "cid": 1,
        "time": "10:55"
      },
      {
        "lid": 23,
        "name": "ไต้หวัน",
        "type": 2,
        "cid": 1,
        "time": "12:10"
      },
      {
        "lid": 24,
        "name": "เกาหลี",
        "type": 2,
        "cid": 1,
        "time": "12:45"
      },
      {
        "lid": 25,
        "name": "นิเคอิบ่าย",
        "type": 2,
        "cid": 1,
        "time": "12:55"
      },
      {
        "lid": 26,
        "name": "จีนบ่าย",
        "type": 2,
        "cid": 1,
        "time": "13:45"
      },
      {
        "lid": 27,
        "name": "ฮั่งเส็งบ่าย",
        "type": 2,
        "cid": 1,
        "time": "14:52"
      },
      {
        "lid": 28,
        "name": "สิงคโปร์",
        "type": 2,
        "cid": 1,
        "time": "17:00"
      },
      {
        "lid": 29,
        "name": "ไทยเย็น",
        "type": 2,
        "cid": 1,
        "time": "16:05"
      },
      {
        "lid": 30,
        "name": "รัสเซีย",
        "type": 2,
        "cid": 1,
        "time": "22:30"
      },
      {
        "lid": 31,
        "name": "เยอรมัน",
        "type": 2,
        "cid": 1,
        "time": "22:15"
      },
      {
        "lid": 32,
        "name": "อังกฤษ",
        "type": 2,
        "cid": 1,
        "time": "22:15"
      },
      {
        "lid": 33,
        "name": "ดาวโจนส์ปกติ",
        "type": 2,
        "cid": 1,
        "time": "02:00"
      },
      {
        "lid": 34,
        "name": "นิเคอิเช้าVIP",
        "type": 3,
        "cid": 1,
        "time": "09:00"
      },
      {
        "lid": 35,
        "name": "จีนเช้าVIP",
        "type": 3,
        "cid": 1,
        "time": "10:00"
      },
      {
        "lid": 36,
        "name": "ฮั่งเส็งเช้าVIP",
        "type": 3,
        "cid": 1,
        "time": "10:30"
      },
      {
        "lid": 37,
        "name": "ไต้หวันVIP",
        "type": 3,
        "cid": 1,
        "time": "11:30"
      },
      {
        "lid": 38,
        "name": "เกาหลีVIP",
        "type": 3,
        "cid": 1,
        "time": "12:30"
      },
      {
        "lid": 39,
        "name": "นิเคอิบ่ายVIP",
        "type": 3,
        "cid": 1,
        "time": "13:20"
      },
      {
        "lid": 40,
        "name": "จีนบ่ายVIP",
        "type": 3,
        "cid": 1,
        "time": "14:20"
      },
      {
        "lid": 41,
        "name": "ฮั่งเส็งบ่ายVIP",
        "type": 3,
        "cid": 1,
        "time": "15:20"
      },
      {
        "lid": 42,
        "name": "ฮานอยพิเศษ",
        "type": 4,
        "cid": 1,
        "time": "17:12"
      },
      {
        "lid": 43,
        "name": "ฮานอยปกติ",
        "type": 4,
        "cid": 1,
        "time": "18.12"
      },
      {
        "lid": 44,
        "name": "ฮานอยVIP",
        "type": 4,
        "cid": 1,
        "time": "19:10"
      },
      {
        "lid": 45,
        "name": "ลาวพัฒนา",
        "type": 4,
        "cid": 1,
        "time": "20:18"
      },
      {
        "lid": 46,
        "name": "ไทย",
        "type": 5,
        "cid": 1,
        "time": "15:00"
      },
      {
        "lid": 47,
        "name": "ออมสิน",
        "type": 5,
        "cid": 1,
        "time": "13:00"
      },
      {
        "lid": 48,
        "name": "ธกส",
        "type": 5,
        "cid": 1,
        "time": "10:00"
      },
    {
      "lid": 99,
      "name": "ลาวVIP",
      "time": "21:15"
    },
  ]


  LotolyTime = [
    {
      "lid": 1,
      "name": "นิเคอิเช้าVIP",
      "time": "09:00"
    },
    {
      "lid": 2,
      "name": "นิเคอิเช้า",
      "time": "09:25"
    },
    {
      "lid": 3,
      "name": "จีนเช้าVIP",
      "time": "10:00"
    },
    {
      "lid": 4,
      "name": "จีนเช้า",
      "time": "10:20"
    },
    {
      "lid": 5,
      "name": "ลาวTV",
      "time": "10:25"
    },
    {
      "lid": 6,
      "name": "ฮั่งเล็งเช้าVIP",
      "time": "10:30"
    },
    {
      "lid": 7,
      "name": "ฮั่งเล็งเช้า",
      "time": "10:55"
    },
    {
      "lid": 8,
      "name": "ฮานอยHD",
      "time": "11:10"
    },
    {
      "lid": 9,
      "name": "ไต้หวันVIP",
      "time": "11:30"
    },
    {
      "lid": 10,
      "name": "ไต้หวัน",
      "time": "12:10"
    },
    {
      "lid": 11,
      "name": "ฮานอยสตาร์",
      "time": "12:10"
    },
    {
      "lid": 12,
      "name": "เกาหลีVIP",
      "time": "12:30"
    },
    {
      "lid": 13,
      "name": "เกาหลี",
      "time": "12:45"
    },
    {
      "lid": 14,
      "name": "นิเคอิบ่าย",
      "time": "12:55"
    },
    {
      "lid": 15,
      "name": "นิเคอิบ่ายVIP",
      "time": "13:20"
    },
    {
      "lid": 16,
      "name": "ลาวHD",
      "time": "13:40"
    },
    {
      "lid": 17,
      "name": "จีนบ่าย",
      "time": "13:45"
    },
    {
      "lid": 18,
      "name": "ฮานอยTV",
      "time": "14:10"
    },
    {
      "lid": 19,
      "name": "จีนบ่ายVIP",
      "time": "14:20"
    },
    {
      "lid": 20,
      "name": "ฮั่งเส็งบ่าย",
      "time": "14:55"
    },
    {
      "lid": 21,
      "name": "ฮั่งเส็งบ่ายVIP",
      "time": "15:20"
    },
    {
      "lid": 22,
      "name": "ลาวสตาร์",
      "time": "15:40"
    },

  ]

  LotolyTime2 = [
    {
      "lid": 23,
      "name": "ฮานอยกาชาด",
      "time": "16:10"
    },
    {
      "lid": 24,
      "name": "ฮานอยพิเศษ",
      "time": "17:10"
    },
    {
      "lid": 25,
      "name": "ฮานอยสามัคคี",
      "time": "17:10"
    },
    {
      "lid": 26,
      "name": "ฮานอยปกติ",
      "time": "18:10"
    },
    {
      "lid": 27,
      "name": "ฮานอยVIP",
      "time": "19:10"
    },
    {
      "lid": 28,
      "name": "ฮานอยพัฒนา",
      "time": "19:10"
    },
    {
      "lid": 29,
      "name": "ลาวสามัคคี",
      "time": "20:15"
    },
    {
      "lid": 30,
      "name": "ลาวพัฒนา", //(จ พ ศ)
      "time": "20:20"
    },
    {
      "lid": 31,
      "name": "ลาวอาเซียน",
      "time": "20:55"
    },
    {
      "lid": 32,
      "name": "ลาวVIP",
      "time": "21:15"
    },
    {
      "lid": 33,
      "name": "ลาวSTAR VIP",
      "time": "21:45"
    },
    {
      "lid": 34,
      "name": "อังกฤษVIP",
      "time": "21:45"
    },
    {
      "lid": 35,
      "name": "ฮานอยEXTER",
      "time": "22:10"
    },
    {
      "lid": 36,
      "name": "รัสเซีย",
      "time": "22:30"
    },
    {
      "lid": 37,
      "name": "เยอรมันVIP",
      "time": "22:45"
    },
    {
      "lid": 38,
      "name": "อังกฤษ",
      "time": "22:10"
    },
    {
      "lid": 39,
      "name": "เยอรมัน",
      "time": "22:10"
    },
    {
      "lid": 40,
      "name": "ลาวกาซาด",
      "time": "23:25"
    },
    {
      "lid": 41,
      "name": "รัสเซียVIP",
      "time": "23:45"
    },
    {
      "lid": 42,
      "name": "ดาวโจนส์VIP",
      "time": "00:10"
    },
    {
      "lid": 43,
      "name": "ดาวโจนส์STAR",
      "time": "01:00"
    },
    {
      "lid": 44,
      "name": "ดาวโจนส์",
      "time": "01:00"
    },
  ]

  isdisplay!: boolean;
  A!: any;
  B!: any;

  C: any[] = []
  A1: any[] = [];
  B1: any[] = [];
  isShowG = false;
  isSelected = false;
  checked = false;
  date_value!: any;


  canvas  !: HTMLCanvasElement;
  context !: CanvasRenderingContext2D;
  listcanvas: HTMLCanvasElement[] = [];
  DATE!: any | GlobalEventHandlers;
  All: any[] = [];
  ALL1: any[] = [];
  istime = false
  selectedImageIndex = 0;
  listdataURL: any[] = [];
  // arrayOfIndexes: any[] = []
  getDate !: any;
  tempdata!: any;

  animal!: string;
  name!: string;
  isbreak !: boolean
  ischs = 1;
  currentDateTime: any;
  constructor(
    private dataService: DataserveiceService,
    private http: HttpClient,
    private local: LocalService,
    private el: ElementRef,
    private router: Router,
    public dialog: MatDialog,
    public date: DatePipe
  ) {

    this.isdisplay = dataService.isdispaly;
    this.currentDateTime = this.date.transform((new Date), 'dd/MM/yyyy');
    let AAA: any[] = []
    AAA = this.currentDateTime.split("/")

    let str = ""
    AAA.forEach(element => {
      str += element + "-"
    });
    // console.log(str.substring(0,str.length-1));
    this.DATE = str.substring(0, str.length - 1)
    this.imageuser = local.getData("img1");


    // this.date_value = this.todayISOString.split("T", 1);
    // console.log(this.date_value);
    // let ss: any[] = []
    // this.date_value.forEach((element: any) => {
    //   console.log(element);
    //   ss = element.split("-");
    // });
    // console.log(ss);
    // let getdatetemp = "";

    // for (let index = ss.length - 1; index >= 0; index--) {
    //   const element = ss[index];
    //   getdatetemp = getdatetemp + "-" + element
    // }
    // console.log(getdatetemp);
    // this.DATE = getdatetemp.slice(1, getdatetemp.length)

    // this.t1 = dataService.t1;
    // this.t2 = dataService.t2;
    // this.t3 = dataService.t3;
    // this.t4 = dataService.t4;
    // this.t5 = dataService.t5;
    // this.Lottary = dataService.Lottary;
  }

  async candown(array: any) {
    try {
      this.DOWLOADS();
    } catch (E) {
      console.log("catch ERROR DOWLOAD");
      this.todateURL(this.ALL1)
      alert("กรุณา Dowload อีกครั้ง")
      // console.log(this.listdataURL);
    }
  }

  DOWLOADS() {
    const zip = new JSZip();
    // for (let index = 0; index < this.listdataURL.length; index++) {
    //   const element = this.listdataURL[index];
    //   const name = this.ALL1[index].name;
    //   zip.file(`${name}.png`, element.substr(element.indexOf(',') + 1), { base64: true });
    // }


    this.maindatas.forEach(element => {
      // console.log(element);
      let time = element.time.split(":")
      let str = time[0]+"_"+time[1];
      let name = str + "" + element.name
      console.log(name);
      zip.file(`${name}.png`, element.url.substr(element.url.indexOf(',') + 1), { base64: true });
    });

    zip.generateAsync({ type: "blob" }).then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'images' + this.DATE + '.zip';
      link.click();
    });
    this.listdataURL = this.listdataURL.filter(item => item !== item);
    this.maindatas = this.maindatas.filter(item => item !== item);
    console.log(this.maindatas);

  }

  trackByFn(index: any) {
    return (index);
  }

  logout() {
    this.router.navigateByUrl("login")
  }

  time() {

    this.maindatas = this.maindatas.filter(item => item !== item);
    this.ALL1 = this.ALL1.filter(item => item !== item);
    if (this.istime) {
      this.istime = false
    } else {
      this.istime = true
    }
    console.log(this.maindatas);

  }

  Createimage(array: any) {
    console.log(this.ischs);
    if (this.ischs == 1) {
      this.todateURL(array)
      if (confirm("ยืนยันการสร้างรูปภาพ") == true) {
        this.todateURL(array);

      }
      this.ischs++
    } else {
      this.todateURL(array);
      // this.ischs++
    }
  }

  todateURL(array: any) {
    if (array.length > 0) {
      this.listdataURL = this.listdataURL.filter(item => item !== item);
      this.maindatas = this.maindatas.filter(item => item !== item);
      this.maindatas = []
      console.log(this.maindatas);

      for (let i = 0; i < array.length; i++) {
        const element = array[i];

        let img = new Image()
        img.src = "../../../assets/img/user2_2.jpg"
        const newWidth = 500;
        const newHeight = 500;
        const canvas = <HTMLCanvasElement>document.getElementById('canvas-' + i);
        const context = <CanvasRenderingContext2D>canvas.getContext('2d')

        let w = 500;
        let h = 500;
        img.onload = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0, newWidth, newHeight)
          this.random();

          this.drawStrokedcenter(context, element.name, (w / 2) + 10, 400, '32px Chonburi', "#FFD51E", "black", 5)
          this.drawStrokedcenter(context, this.currentDateTime,w/2, 120, "18px Chonburi", "white", "", 1)
          this.drawStroked(context, this.A, ((w / 2) - 100), 190, "60px Chonburi", "white", "black", 2)
          this.drawStroked(context, this.B, ((w / 2) + 105), 190, "60px Chonburi", "white", "black", 2)

          this.A1.forEach((element, index) => {
            // context.fillText(element, (80 * index) + 155, 250);
            this.drawStroked(context, element, (60 * index) + 170, 240, "28px Chonburi", "white", "black", 1)
          });

          this.B1.forEach((element, index) => {
            this.drawStroked(context, element, (60 * index) + 170, 300, "28px Chonburi", "white", "black", 1)
          });

          this.C.forEach((element, index) => {
            this.drawStroked(context, element, (60 * index) + 200, 350, "20px Chonburi", "white", "black", 1)
          });

          const png = canvas.toDataURL("image/jpg");

          // if (png.length >= 450000 && png.length <= 470000) {
          //   console.log("GOOD  " + element.name + "\t" + png.length);
          // } else {
          //   console.log("ERROR  " + element.name + "\t" + png.length);
          //   // this.gettoURL(array);
          // }
          const pngs = canvas.toDataURL("image/jpg");
          // this.listdataURL.push(pngs)
          let maindata = {
            name: element.name,
            url: pngs,
            time: element.time
          }

          this.maindatas.push(maindata)
        } // loadimage

      }//loop 1
      this.dataService.ALL = array;
      this.isShowG = true
      console.log(this.listdataURL.length);
    } else {
      alert("กรุณาเลือก Check box")
    }
  }

  onImageClick(index: number) {
    this.selectedImageIndex = index;
  }


  getRandomNumber(min: number, max: number, previous?: number): number {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    while (num === previous) {
      num = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return num;
  }
  createRandomArray(length: number, min: number, max: number, num1: number, num2: number): number[] {
    const arr: number[] = [num1, num2];
    let previous: number | undefined;

    for (let i = 0; i < length - 2; i++) {
      const num = this.getRandomNumber(min, max, previous);
      arr.push(num);
      previous = num;
    }
    return arr;
  }

  getRandomNumbers(number: any): number[] {
    let num = number.toString();
    let result: number[] = []
    const allNumbers: number[] = Array.from({ length: 9 }, (_, i) => i + 0);
    const shuffledNumbers = allNumbers.sort(() => Math.random() - 0.5);
    this.arr = shuffledNumbers.slice(0, 4);
    result = [
      num + this.arr[0],
      num + this.arr[1],
      num + this.arr[2],
      num + this.arr[3]
    ]
    // console.log(result);
    return result
  }

  generateArray(num1: any, num2: any): number[] {
    let arr: number[] = []
    arr = [
      this.getRandomNumber(100, 999),
      this.getRandomNumber(100, 999),
      this.getRandomNumber(100, 999),
    ]
    for (let index = 0; index < arr.length; index++) {

      let cks = this.checkindextree(arr[index], arr)
      if (cks == 1) {
        arr[index] = arr[index] + this.getRandomNumber(10, 99)
      } else if (cks == 2) {
        arr[index] = this.getRandomNumber(1, 9) + arr[index];
      } else {
        // console.log("generateArray else");
      }
      cks = this.checkindextree(arr[index], arr);
    }
    return arr
  }
  checkindextree(em: any, arr: any) {
    let result !: number;
    if (em.toString().length == 1) {
      // console.log("common==0: " + em);
      result = 1
    }
    else if (em.toString().length == 2) {
      // console.log("common==1: " + em);
      result = 2
    }
    else {
      // console.log("commonelse: " + em);
    }
    return result;
  }

  intersect_arrays(a: any, b: any) {
    var sorted_a = a.concat().sort();
    var sorted_b = b.concat().sort();
    var common = [];
    var a_i = 0;
    var b_i = 0;

    while (a_i < a.length
      && b_i < b.length) {
      if (sorted_a[a_i] === sorted_b[b_i]) {
        common.push(sorted_a[a_i]);
        a_i++;
        b_i++;
      }
      else if (sorted_a[a_i] < sorted_b[b_i]) {
        a_i++;
      }
      else {
        b_i++;
      }
    }

    return common;
  }
  random(): void {
    let previousNumber: number | undefined;

    const randomNum1 = this.getRandomNumber(0, 9);
    const randomNum2 = this.getRandomNumber(0, 9, randomNum1);

    const myArray = this.generateArray(randomNum1, randomNum2);
    let arrsum: any[] = []

    // const arr1 = this.randomN1(randomNum1);
    // const arr2 = this.randomN1(randomNum2);

    const arr1 = this.getRandomNumbers(randomNum1)
    const arr2 = this.getRandomNumbers(randomNum2)
    arrsum = this.intersect_arrays(arr1, arr2);
    // console.log("SSS:\t" + arrsum);
    if (arrsum.length > 0) {
      // console.log("=========intersect_arrays==========");
      this.random()
    }



    // console.log("Arr1: " + arr1)
    // console.log("Arr2: " + arr2)
    // console.log(myArray);

    this.C = myArray;
    this.A = randomNum1;
    this.B = randomNum2;
    this.A1 = arr1;
    this.B1 = arr2;
  }

  checkindex(num: any, arr: any) {
    let isresult!: number;
    let len = num.toString().length
    if (len > 0) {

      if (len == 1) {
        // console.log(num + "\tnum == 1 ");
        isresult = 1;

      } else if (len == 2) {
        let temp = 0
        // console.log(num + "\tnum == 2 ");
        if (arr.includes(num)) {
          arr.forEach((ee: any) => {
            if (ee == num) {
              temp++
            }
            if (temp > 1) {
              isresult = 2;
            }
            // else{
            //     temp=0
            // }
            // console.log(temp)
          });
        }

      } else {
        console.log(num + "\tnum > 2 ");
      }
    }
    return isresult
  }

  drawStroked(ctx: CanvasRenderingContext2D, text: any, x: any, y: any, font: any, color: any, strokeStyle: any, lineWidth: any) {
    ctx.font = font;
    // ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    // ctx.strokeText(text, x, y);
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }

  drawStrokedcenter(ctx: CanvasRenderingContext2D, text: any, x: any, y: any, font: any, color: any, strokeStyle: any, lineWidth: any) {
    ctx.font = font;
    ctx.textAlign = "center";
    // ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    // ctx.strokeText(text, x, y);
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }

  checkbox(obj: any) {
    // this.isShowG = false
    const lid = obj.lid;
    const index = this.ALL1.findIndex((element) => element.lid === lid);

    console.log(lid);
    if (index >= 0) {

      this.ALL1.splice(index, 1);
      this.isShowG = false
    } else {
      this.isShowG = true

      this.ALL1.push(obj);

    }
    // this.todateURL(this.ALL1);
    // this.isShowG = false
  }

  checkALL() {
    // this.isShowG = false
    console.log("Check ALL");
    if (this.isSelected) {
      this.isSelected = false
      this.isShowG = false
      this.remove();
    } else {
      this.isSelected = true
      this.isShowG = true
      this.remove();
      console.log(this.ALL1);
      this.Lottary.forEach((element: any) => {
        this.ALL1.push(element)
      });
    }
    console.log(this.maindatas);
    // this.todateURL(this.ALL1);
    // this.isShowG = false
  }


  checkis(ischk: boolean) {
    if (ischk) {

    } else {

    }
  }
  remove() {
    this.ALL1 = this.ALL1.filter(item => item !== item);
  }

  saveAs(content: any, arg1: string) {
    throw new Error('Function not implemented.');
  }


}
