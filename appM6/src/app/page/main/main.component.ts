// import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { DataserveiceService } from 'src/app/dataserveice.service';
import { LocalService } from 'src/app/local.service';
import { Image } from './imageD.model';


import { OnInit, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import JSZip, { forEach } from 'jszip';
// import { saveAs } from 'file-saver';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmedComponent } from '../confirmed/confirmed.component';


import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,AfterViewInit {
  @ViewChild('canvas', { static: true }) myCanvas !: ElementRef;
  @ViewChild('Arraycanvas', { static: true }) Arraycanvas!: ElementRef[];
  // myDate = new Date();
  ctx!: CanvasRenderingContext2D;
  areAllImagesLoaded = false;

  // myDate !: any;
  imageuser !: any;
  t1 !: any;
  t2 !: any;
  t3 !: any;
  t4 !: any;
  t5 !: any;
  t6 !: any;
  type !: any;
  Lottary !: any;
  A!: any;
  B!: any;

  C: any[] = []
  A1: any[] = [];
  B1: any[] = [];
  isShowG = false;
  isSelected = false;
  checked = false;
  istime = false
  isdisplay!: boolean;
  date_value!: any;
  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();


  canvas  !: HTMLCanvasElement;
  context !: CanvasRenderingContext2D;
  listcanvas: HTMLCanvasElement[] = [];
  DATE!: any | GlobalEventHandlers;
  All: any[] = [];
  ALL1: any[] = [];
  imagesD: Image[] = [
    { src: '' + this.local.getData("img1"), alt: 'Image 1' },
    { src: '' + this.local.getData("img1"), alt: 'Image 2' },
    { src: '' + this.local.getData("img1"), alt: 'Image 3' },
  ];

  arr: any[] = [];
  listdataURL: any[] = [];
  // arrayOfIndexes: any[] = []
  getDate !: any;
  tempdata!: any;
 selectedImageIndex = 0;
  animal!: string;
  name!: string;
  currentDateTime:any;

  LotolyTime = [
    {
      "lid": 1,
      "name": "      นิเคอิเช้าVIP",
      "time": "09:00"
    },
    {
      "lid": 2,
      "name": "      นิเคอิเช้า",
      "time": "09:25"
    },
    {
      "lid": 3,
      "name": "    จีนเช้าVIP",
      "time": "10:00"
    },
    {
      "lid": 4,
      "name": "    จีนเช้า",
      "time": "10:20"
    },
    {
      "lid": 5,
      "name": "ลาวTV",
      "time": "10:25"
    },
    {
      "lid": 6,
      "name": "         ฮั่งเส็งเช้าVIP",
      "time": "10:30"
    },
    {
      "lid": 7,
      "name": "         ฮั่งเส็งเช้า",
      "time": "10:55"
    },
    {
      "lid": 8,
      "name": "ฮานอยHD ",
      "time": "11:10"
    },
    {
      "lid": 9,
      "name": "    ไต้หวันVIP",
      "time": "11:30"
    },
    {
      "lid": 10,
      "name": "    ไต้หวัน",
      "time": "12:10"
    },
    {
      "lid": 11,
      "name": "ฮานอยสตาร์",
      "time": "12:10"
    },
    {
      "lid": 12,
      "name": "  เกาหลีVIP",
      "time": "12:30"
    },
    {
      "lid": 13,
      "name": " เกาหลี",
      "time": "12:45"
    },
    {
      "lid": 14,
      "name": "     นิเคอิบ่าย",
      "time": "12:55"
    },
    {
      "lid": 15,
      "name": "     นิเคอิบ่ายVIP",
      "time": "13:20"
    },
    {
      "lid": 16,
      "name": "ลาวHD",
      "time": "13:40"
    },
    {
      "lid": 17,
      "name": "   จีนบ่าย",
      "time": "13:45"
    },
    {
      "lid": 18,
      "name": "ฮานอยTV ",
      "time": "14:10"
    },
    {
      "lid": 19,
      "name": "   จีนบ่ายVIP",
      "time": "14:20"
    },
    {
      "lid": 20,
      "name": "        ฮั่งเส็งบ่าย",
      "time": "14:55"
    },
    {
      "lid": 21,
      "name": "       ฮั่งเส็งบ่ายVIP",
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
      "name": " ฮานอยกาชาด",
      "time": "16:10"
    },
    {
      "lid": 24,
      "name": "ฮานอยพิเศษ",
      "time": "17:10"
    },
    {
      "lid": 25,
      "name": " ฮานอยสามัคคี",
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
      "name": " ฮานอยพัฒนา ",
      "time": "19:10"
    },
    {
      "lid": 29,
      "name": " ลาวสามัคคี",
      "time": "20:15"
    },
    {
      "lid": 30,
      "name": "ลาวพัฒนา", //(จ พ ศ)
      "time": "20:20"
    },
    {
      "lid": 31,
      "name": " ลาวอาเซียน",
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
      "name": "    รัสเซีย",
      "time": "22:30"
    },
    {
      "lid": 37,
      "name": "เยอรมันVIP",
      "time": "22:45"
    },
    {
      "lid": 38,
      "name": " อังกฤษ",
      "time": "22:10"
    },
    {
      "lid": 39,
      "name": "  เยอรมัน",
      "time": "22:10"
    },
    {
      "lid": 40,
      "name": "ลาวกาซาด ",
      "time": "23:25"
    },
    {
      "lid": 41,
      "name": "รัสเซียVIP",
      "time": "23:45"
    },
    {
      "lid": 42,
      "name": " ดาวโจนส์VIP",
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

  constructor(
    private dataService: DataserveiceService,
    private http: HttpClient,
    private local: LocalService,
    private el: ElementRef,
    private router: Router,
    public dialog: MatDialog,
    public date : DatePipe
  ) {
    this.isdisplay = dataService.isdispaly;
    this.currentDateTime = this.date.transform((new Date), 'dd/MM/yyyy');
    let AAA:any[] = []
    AAA = this.currentDateTime.split("/")
    console.log(AAA);
    let str =""
    AAA.forEach(element => {
      str += element+"-"
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

    // this.DATE = getdatetemp.slice(1, getdatetemp.length)

    //  this.tempdata = this.date_value.split("-");
    // console.log(this.tempdata);

    // http.get(dataService.apiEndpoint + '/image/' + local.getData("USER")).subscribe((data: any) => {
    //   console.log(data);
    //   let img = data[0].img1
    //   this.imageuser = img;
    //   console.log("img: " + this.imageuser);
    // });
    this.t1 = dataService.t1;
    this.t2 = dataService.t2;
    this.t3 = dataService.t3;
    this.t4 = dataService.t4;
    this.t5 = dataService.t5;
    this.Lottary = dataService.Lottary;

    // http.get(dataService.apiEndpoint + '/Lottary/1').subscribe((data: any) => {
    //   // console.log(data);
    //   this.t1 = data;
    // });



    // http.get(dataService.apiEndpoint + '/Lottary/2').subscribe((data: any) => {
    //   // console.log(data);
    //   this.t2 = data;
    // });


    // http.get(dataService.apiEndpoint + '/Lottary/3').subscribe((data: any) => {
    //   // console.log(data);
    //   this.t3 = data;
    // });

    // http.get(dataService.apiEndpoint + '/Lottary/4').subscribe((data: any) => {
    //   // console.log(data);
    //   // this.t4 = data;
    // });

    // http.get(dataService.apiEndpoint + '/Lottary/5').subscribe((data: any) => {
    //   console.log(data);
    //   this.t5 = data;
    // });

    // http.get(dataService.apiEndpoint + '/read').subscribe((data: any) => {
    //   console.log(data);
    //   this.Lottary = data;
    // });
    let array = [
      {
        "lid": 18,
        "name": " ดาวโจนส์VIP",
        "type": 1,
        "cid": 1
      },
      {
        "lid": 17,
        "name": "ลาวกาซาด ",
        "type": 1,
        "cid": 1
      },
      {
        "lid": 19,
        "name": "ดาวโจนส์STAR",
        "type": 1,
        "cid": 1
      }
    ]


  }
  ngAfterViewInit(): void {
    console.log("EE");

  }
  ngOnInit(): void {

    // let array!: any;
    let array = [
      {
        "lid": 18,
        "name": " ดาวโจนส์VIP",
        "type": 1,
        "cid": 1
      },
      {
        "lid": 17,
        "name": "ลาวกาซาด ",
        "type": 1,
        "cid": 1
      },
      {
        "lid": 19,
        "name": "ดาวโจนส์STAR",
        "type": 1,
        "cid": 1
      }
    ]

  }

  isbreak !: boolean
  ischs = 1;

  Createimage(array: any) {
    console.log(this.ischs);
    if (this.ischs == 1) {
      this.todateURL(array);
      if (confirm("ยืนยันการสร้างรูปภาพ") == true) {
        this.todateURL(array);
      }
      this.ischs++
    } else {
      this.todateURL(array);
      // this.ischs++
    }
    console.log(this.listdataURL);
  }

  todateURL(array: any) {
    this.listdataURL = this.listdataURL.filter(item => item !== item);
    let i = 0;

    while (i < array.length) {
      const element = array[i];

      let canvas = <HTMLCanvasElement>document.getElementById('canvas-' + i);
      let context = <CanvasRenderingContext2D>canvas.getContext('2d')

      console.log(context.font);
      // context.font = "Chuanchiim"
      if (context.font == "10px sans-serif") {
        context.font = "10px Chuanchiim"
        console.log("GGGGG");
      }
      else {
        console.log("EEEEE");
      }

      let img = new Image()

      img.src = "../../../assets/img/user1_1.jpg"

      const newWidth = 500;
      const newHeight = 500;
      // console.log("newHeight: " + newHeight);


      img.onload = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        let w = 500;
        let h = 500;
        let lenHH = element.name.length;
        context.drawImage(img, 0, 0, newWidth, newHeight)
        this.random();

        this.drawStroked(context, element.name, (w / 2) - (lenHH * 6.5), 140, "30px Superspace", "#FFD51E", "black", 8)


        this.drawStroked(context, this.DATE, (w / 2) - 34, 170, "18px Chuanchiim", "white", "", 0)



        this.drawStroked(context, this.A, ((w / 2) - 50) - 15, 230+10, "110px Chuanchiim", "#FFD51E", "black", 10)



        this.drawStroked(context, this.B, ((w / 2) + 50) - 15, 230+10, "110px Chuanchiim", "#FFD51E", "black", 10)


        this.A1.forEach((element, index) => {
          // context.fillText(element, (80 * index) + 155, 250);
          this.drawStroked(context, element, (70 * index) + 160, 290, "60px Chuanchiim", "#FFD51E", "black", 5)
        });

        this.B1.forEach((element, index) => {
          this.drawStroked(context, element, (70 * index) + 160, 340, "60px Chuanchiim", "#FFD51E", "black", 5)
        });

        this.C.forEach((element, index) => {
          this.drawStroked(context, element, (60 * index) + 140, 375, "36px Chuanchiim", "#FFD51E", "black", 5)
        });

        const png = canvas.toDataURL("image/jpg");
        // console.log(png);
        // this.checktodata(png,array)
        // if (png.length >= 530000 && png.length <= 540000) {
        //   // console.log("> GOOD " + png.length + "\t" + this.isbreak);
        //   console.log("GOOD " + i + " " + element.name + "\t" + png.length);
        //   // this.listdataURL.push(png)
        // } else {
        //   console.log("ERROR " + i + " " + element.name + "\t" + png.length);
        //   // this.gettoURL(array);
        //   // i--
        // }
        this.listdataURL.push(png)
      } // loadimage
      i++
    }//loop 1

    this.dataService.ALL = array;
    this.isShowG = true
    console.log(this.listdataURL.length);
  }



  onImageClick(index: number) {
    this.selectedImageIndex = index;
  }

  checktodata(png: any, array: any) {
    if (png.length >= 530000 && png.length <= 540000) {
      console.log("> GOOD " + png.length + "\t" + this.isbreak);
      this.listdataURL.push(png)
    } else {
      console.log("ERROR " + png.length + "\t" + this.isbreak);
      this.isbreak = false
      this.gettoURL(array);
      // this.todateURL(array);
    }
  }

  gettoURL(array: any) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      // console.log(element.name);

      let img = new Image()
      // img.src = "../../../assets/img/user1_1.jpg"
      if (this.local.getData("USER") == 'user1') {
        img.src = "../../../assets/img/user1_1.jpg"
      }
      else if (this.local.getData("USER") == 'user2') {
        img.src = "../../../assets/img/user2_1.jpg"
      } else {
        console.log("image user else");
      }
      // img.src = this.local.getData("img1") + "";
      const newWidth = 500;
      const newHeight = (img.height / img.width) * newWidth;
      // const canvas = <HTMLCanvasElement>document.getElementById('canvas-' + index);
      // const context = <CanvasRenderingContext2D>canvas.getContext('2d')

      img.onload = () => {
        this.random();
        const canvas = <HTMLCanvasElement>document.getElementById('canvas-' + index);
        const context = <CanvasRenderingContext2D>canvas.getContext('2d')
        let w = 500;
        let h = 500;
        let lenHH = element.name.length;
        // context.shadowOffsetX = 4;
        // context.shadowOffsetY = 4;
        // context.shadowBlur = 3;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, newWidth, newHeight)

        context.font = "32px Superspace"
        context.strokeStyle = "black";
        context.lineWidth = 8;

        context.strokeText(element.name, (w / 2) - (lenHH * 7), 145);
        context.fillStyle = "#FFD51E";
        context.fillText(element.name, (w / 2) - (lenHH * 7), 145);

        let x = (w / 2) - 34
        let y = 170
        context.font = "18px Chuanchiim"
        context.strokeStyle = ""
        context.lineWidth = 0
        context.strokeText(this.DATE, x, y);
        context.fillStyle = "white"
        context.fillText(this.DATE, x, y);


        context.font = "90px Chuanchiim"
        context.strokeStyle = "black"
        context.lineWidth = 10
        context.strokeText(this.A, ((w / 2) - 50) - 15, 230);
        context.fillStyle = "#FFD51E"
        context.fillText(this.A, ((w / 2) - 50) - 15, 230);

        context.font = "90px Chuanchiim"
        context.strokeStyle = "black"
        context.lineWidth = 10
        context.strokeText(this.B, ((w / 2) + 50) - 15, 230);
        context.fillStyle = "#FFD51E"
        context.fillText(this.B, ((w / 2) + 50) - 15, 230);

        this.A1.forEach((element, index) => {
          // context.fillText(element, (80 * index) + 155, 250);
          this.drawStroked(context, element, (70 * index) + 160, 280, "60px Chuanchiim", "#FFD51E", "black", 5)
          // this.drawStroked(context, element, (70 * index) + 160, 320, "60px chuanchiim", "#FFD51E", "black", 5)
        });
        this.B1.forEach((element, index) => {
          this.drawStroked(context, element, (70 * index) + 160, 320, "60px Chuanchiim", "#FFD51E", "black", 5)
        });

        this.C.forEach((element, index) => {
          this.drawStroked(context, element, (60 * index) + 140, 360, "36px Chuanchiim", "#FFD51E", "black", 5)
        });
      } // loadimage
    }//loop 1
  }


  async candown(array: any) {
    // console.log(this.listdataURL);
    for (let index = 0; index < this.listdataURL.length; index++) {
      const element = this.listdataURL[index];
      console.log(element.length);
    }
    this.DOWLOADS();
    // try {
    //   // let temp = false
    //   // let isCKto = false;
    //   // for (let index = 0; index < this.listdataURL.length; index++) {
    //   //   const element = this.listdataURL[index];
    //   //   const name = this.ALL1[index].name;
    //   //   console.log(element.length);
    //   //   let data = element.length;
    //   //   if (data >= 530000 && data <= 540000) {
    //   //     // this.DOWLOADS();
    //   //     isCKto = true;
    //   //     break;
    //   //   } else {
    //   //     console.log("NOT DOWLOADS");
    //   //     isCKto = false;
    //   //     this.todateURL(this.ALL1);
    //   //     break;
    //   //     // alert("กรุณา Dowload อีกครั้ง")
    //   //   }
    //   // }
    //   // if (isCKto) {
    //   //   this.DOWLOADS();
    //   // } else {
    //   //   // alert("confirm Dowload")
    //   //   // this.DOWLOADS();
    //   //   alert("กรุณา Dowload อีกครั้ง")
    //   // }

    //   this.DOWLOADS();

    // } catch (E) {
    //   console.log("catch ERROR DOWLOAD");
    //   this.todateURL(this.ALL1)
    //   alert("กรุณา Dowload อีกครั้ง")
    //   // console.log(this.listdataURL);
    // }
  }

  DOWLOADS() {
    const zip = new JSZip();
    for (let index = 0; index < this.listdataURL.length; index++) {
      const element = this.listdataURL[index];
      const name = this.ALL1[index].name;
      zip.file(`${name}.png`, element.substr(element.indexOf(',') + 1), { base64: true });
    }

    zip.generateAsync({ type: "blob" }).then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'images' + this.DATE + '.zip';
      link.click();
    });
    this.listdataURL = this.listdataURL.filter(item => item !== item);
  }

  getRandomNumber(min: number, max: number, previous?: number): number {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    while (num === previous) {
      num = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return num;
  }

  getRandomNumbers(number: any): number[] {
    let num = number.toString();
    let result: number[] = []
    const allNumbers: number[] = Array.from({ length: 9 }, (_, i) => i + 0);
    const shuffledNumbers = allNumbers.sort(() => Math.random() - 0.5);
    this.arr = shuffledNumbers.slice(0, 3);
    result = [
      num + this.arr[0],
      num + this.arr[1],
      num + this.arr[2]
    ]
    // console.log(result);
    return result
  }

  time() {
    if (this.istime) {
      this.istime = false
    } else {
      this.istime = true
    }

    if (this.istime) {
      console.log("ON");

    } else {
      console.log("OFF");

    }
  }

  generateArray(num1: any, num2: any): number[] {
    let arr: number[] = []
    arr = [
      this.getRandomNumber(100, 999),
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

  drawStroked(ctx: CanvasRenderingContext2D, text: any, x: any, y: any, font: any, color: any, strokeStyle: any, lineWidth: any) {
    ctx.font = font;
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.strokeText(text, x, y);
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }


  trackByFn(index: any) {
    return (index);
  }

  logout() {
    this.router.navigateByUrl("login")
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
    // this.todateURL(this.ALL1);
    // this.isShowG = false
  }

  remove() {
    this.ALL1 = this.ALL1.filter(item => item !== item);
  }


}

