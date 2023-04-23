// import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { DataserveiceService } from 'src/app/dataserveice.service';
import { LocalService } from 'src/app/local.service';
import { Image } from './imageD.model';


import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import JSZip from 'jszip';
// import { saveAs } from 'file-saver';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmedComponent } from '../confirmed/confirmed.component';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
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
  date_value!: any;
  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();


  canvas  !: HTMLCanvasElement;
  context !: CanvasRenderingContext2D | undefined;
  listcanvas: HTMLCanvasElement[] = [];
  DATE!: any | GlobalEventHandlers;
  All: any[] = [];
  ALL1: any[] = [];
  imagesD: Image[] = [
    { src: '' + this.local.getData("img1"), alt: 'Image 1' },
    { src: '' + this.local.getData("img1"), alt: 'Image 2' },
    { src: '' + this.local.getData("img1"), alt: 'Image 3' },
  ];

  listdataURL: any[] = [];
  arrayOfIndexes: any[] = []
  getDate !: any;
  tempdata!: any;

  animal!: string;
  name!: string;

  constructor(
    private dataService: DataserveiceService,
    private http: HttpClient,
    private local: LocalService,
    private el: ElementRef,
    private router: Router,
    public dialog: MatDialog
    // private datePipe: DatePipe
    // private datePipe: DatePipe
  ) {

    console.log(local.getData("img1"));
    this.imageuser = local.getData("img1");

    this.date_value = this.todayISOString.split("T", 1);
    console.log(this.date_value);
    let ss: any[] = []
    this.date_value.forEach((element: any) => {
      console.log(element);
      ss = element.split("-");
    });
    console.log(ss);
    let getdatetemp = "";

    for (let index = ss.length - 1; index >= 0; index--) {
      const element = ss[index];
      getdatetemp = getdatetemp + "-" + element
    }
    console.log(getdatetemp);
    this.DATE = getdatetemp.slice(1, getdatetemp.length)

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



  }
  ngOnInit(): void {

    try {
      let array!: any;
      array = [
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
      // let array: any[] = []

      // getImage();
      this.arrayOfIndexes = this.arrayOfIndexes.filter(item => item !== item);
      this.listcanvas = this.listcanvas.filter(item => item !== item);
      this.listdataURL = this.listdataURL.filter(item => item !== item);

      for (let index = 0; index < array.length; index++) {
        const element = array[index];

        // const img = await (this.loadImagesss(this.local.getData("img1") + ''));
        // const newWidth = 500;
        // const newHeight = (img.height / img.width) * newWidth;
        // context.drawImage(img, 0, 0, newWidth, newHeight)

        const img = new Image()
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
        img.onload = () => {
          const canvas = <HTMLCanvasElement>document.getElementById('canvas-' + index);
          const context = <CanvasRenderingContext2D>canvas.getContext('2d')

          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0, newWidth, newHeight)
          this.random();
          let w = 500;
          let h = 500;
          let lenHH = element.name.length;
          context.shadowOffsetX = 4;
          context.shadowOffsetY = 4;
          context.shadowBlur = 3;


          context.font = "32px Superspace"
          context.strokeStyle = "black";
          context.lineWidth = 8;

          context.strokeText(element.name, (w / 2) - (lenHH * 7), 145);
          context.fillStyle = "#FFD51E";
          context.fillText(element.name, (w / 2) - (lenHH * 7), 145);



          for (let index = 0; index < array.length; index++) {
            // this.drawStroked(context, this.DATE, (w / 2) - 34, 170, "18px chuanchiim", "white", "", 0)
            let x = (w / 2) - 34
            let y = 170
            context.font = "18px chuanchiim"
            context.strokeStyle = ""
            context.lineWidth = 0
            context.strokeText(this.DATE, x, y);
            context.fillStyle = "white"
            context.fillText(this.DATE, x, y);

            // this.drawStroked(context, this.A, ((w / 2) - 50) - 15, 230, "90px chuanchiim", "#FFD51E", "black", 10)

            context.font = "90px chuanchiim"
            context.strokeStyle = "black"
            context.lineWidth = 10
            context.strokeText(this.A, ((w / 2) - 50) - 15, 230);
            context.fillStyle = "#FFD51E"
            context.fillText(this.A, ((w / 2) - 50) - 15, 230);


            this.drawStroked(context, this.B, ((w / 2) + 50) - 15, 230, "90px chuanchiim", "#FFD51E", "black", 10)

            this.A1.forEach((element, index) => {
              // context.fillText(element, (80 * index) + 155, 250);
              this.drawStroked(context, element, (70 * index) + 160, 280, "60px chuanchiim", "#FFD51E", "black", 5)
              // this.drawStroked(context, element, (70 * index) + 160, 320, "60px chuanchiim", "#FFD51E", "black", 5)
            });
            this.B1.forEach((element, index) => {
              this.drawStroked(context, element, (70 * index) + 160, 320, "60px chuanchiim", "#FFD51E", "black", 5)
            });

            this.C.forEach((element, index) => {
              this.drawStroked(context, element, (60 * index) + 140, 360, "36px chuanchiim", "#FFD51E", "black", 5)
            });
          }//for2

          // const png = canvas.toDataURL("image/jpg");
          // console.log(png);
        }

        // const png = canvas.toDataURL("image/jpg");
        // console.log(png);
        // }

      }
    } catch {
      console.log("CON");
    }
  }

  async todateURL(array: any) {


    this.arrayOfIndexes = this.arrayOfIndexes.filter(item => item !== item);
    this.listcanvas = this.listcanvas.filter(item => item !== item);
    this.listdataURL = this.listdataURL.filter(item => item !== item);

    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      console.log(element.name);


      // const img = await (this.loadImagesss(this.local.getData("img1") + ''));
      // const newWidth = 500;
      // const newHeight = (img.height / img.width) * newWidth;
      // context.drawImage(img, 0, 0, newWidth, newHeight)

      const img = new Image()
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
      img.onload = () => {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas-' + index);
        const context = <CanvasRenderingContext2D>canvas.getContext('2d')
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, newWidth, newHeight)
        this.random();
        let w = 500;
        let h = 500;
        let lenHH = element.name.length;
        context.shadowOffsetX = 4;
        context.shadowOffsetY = 4;
        context.shadowBlur = 3;


        context.font = "32px Superspace"
        context.strokeStyle = "black";
        context.lineWidth = 8;

        context.strokeText(element.name, (w / 2) - (lenHH * 7), 145);
        context.fillStyle = "#FFD51E";
        context.fillText(element.name, (w / 2) - (lenHH * 7), 145);



        for (let index = 0; index < array.length; index++) {
          // this.drawStroked(context, this.DATE, (w / 2) - 34, 170, "18px chuanchiim", "white", "", 0)
          let x = (w / 2) - 34
          let y = 170
          context.font = "18px chuanchiim"
          context.strokeStyle = ""
          context.lineWidth = 0
          context.strokeText(this.DATE, x, y);
          context.fillStyle = "white"
          context.fillText(this.DATE, x, y);

          // this.drawStroked(context, this.A, ((w / 2) - 50) - 15, 230, "90px chuanchiim", "#FFD51E", "black", 10)

          context.font = "90px chuanchiim"
          context.strokeStyle = "black"
          context.lineWidth = 10
          context.strokeText(this.A, ((w / 2) - 50) - 15, 230);
          context.fillStyle = "#FFD51E"
          context.fillText(this.A, ((w / 2) - 50) - 15, 230);


          this.drawStroked(context, this.B, ((w / 2) + 50) - 15, 230, "90px chuanchiim", "#FFD51E", "black", 10)

          this.A1.forEach((element, index) => {
            // context.fillText(element, (80 * index) + 155, 250);
            this.drawStroked(context, element, (70 * index) + 160, 280, "60px chuanchiim", "#FFD51E", "black", 5)
            // this.drawStroked(context, element, (70 * index) + 160, 320, "60px chuanchiim", "#FFD51E", "black", 5)
          });
          this.B1.forEach((element, index) => {
            this.drawStroked(context, element, (70 * index) + 160, 320, "60px chuanchiim", "#FFD51E", "black", 5)
          });

          this.C.forEach((element, index) => {
            this.drawStroked(context, element, (60 * index) + 140, 360, "36px chuanchiim", "#FFD51E", "black", 5)
          });
        }//for2




        const png = canvas.toDataURL("image/jpg");
        // console.log(png);
        this.listdataURL.push(png)
      }

      // const png = canvas.toDataURL("image/jpg");
      // console.log(png);
      // }

    }

    // this.dialog.open(ConfirmedComponent, {
    //   // minWidth: '300px'
    // });
  }

  async Cimg(ee: any) {


    // console.log(ee);


    this.arrayOfIndexes = this.arrayOfIndexes.filter(item => item !== item);
    this.listcanvas = this.listcanvas.filter(item => item !== item);
    this.listdataURL = this.listdataURL.filter(item => item !== item);

    console.log(ee);

    for (let index = 0; index < ee.length; index++) {
      const elements = this.ALL1[index];
      const nameimg = elements.name;

      // const image = <HTMLImageElement>document.getElementById("imageQ")
      // console.log(image);

      // const newWidth = 500;
      // const newHeight = (image.height / image.width) * newWidth;

      this.canvas = <HTMLCanvasElement>document.getElementById('canvas-' + index);
      const context = this.canvas.getContext('2d')



      //  this.context = context;
      if (context) {
        this.random();

        context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // context.drawImage(image, 0, 0, newWidth, newHeight);

        let w = 500;
        let h = 500;
        let lenHH = nameimg.length;
        context.shadowOffsetX = 4;
        context.shadowOffsetY = 4;
        context.shadowBlur = 3;


        context.font = "32px Superspace"
        context.strokeStyle = "black";
        context.lineWidth = 8;

        context.strokeText(nameimg, (w / 2) - (lenHH * 7), 145);
        context.fillStyle = "#FFD51E";
        context.fillText(nameimg, (w / 2) - (lenHH * 7), 145);


        // this.drawStroked(context, nameimg, (w / 2) - (lenHH * 7), 145, "32px Superspace", "#FFD51E", "black", 8) //ชื่อหวย

        for (let index = 0; index < ee.length; index++) {
          // this.drawStroked(context, this.DATE, (w / 2) - 34, 170, "18px chuanchiim", "white", "", 0)
          let x = (w / 2) - 34
          let y = 170
          context.font = "18px chuanchiim"
          context.strokeStyle = ""
          context.lineWidth = 0
          context.strokeText(this.DATE, x, y);
          context.fillStyle = "white"
          context.fillText(this.DATE, x, y);
        }//for2


        for (let index = 0; index < ee.length; index++) { // ตัวเลข  0  0
          this.drawStroked(context, this.A, ((w / 2) - 50) - 15, 230, "90px chuanchiim", "#FFD51E", "black", 10)

          this.drawStroked(context, this.B, ((w / 2) + 50) - 15, 230, "90px chuanchiim", "#FFD51E", "black", 10)
        }//for3


        for (let index = 0; index < ee.length; index++) {
          this.A1.forEach((element, index) => {
            // context.fillText(element, (80 * index) + 155, 250);
            this.drawStroked(context, element, (70 * index) + 160, 280, "60px chuanchiim", "#FFD51E", "black", 5)
            // this.drawStroked(context, element, (70 * index) + 160, 320, "60px chuanchiim", "#FFD51E", "black", 5)
          });
          this.B1.forEach((element, index) => {
            this.drawStroked(context, element, (70 * index) + 160, 320, "60px chuanchiim", "#FFD51E", "black", 5)
          });
        }//for4

        for (let index = 0; index < ee.length; index++) {
          this.C.forEach((element, index) => {
            this.drawStroked(context, element, (60 * index) + 140, 360, "36px chuanchiim", "#FFD51E", "black", 5)
          });
        }//for5

        // const dateURL = this.canvas.toDataURL("image/png");
        // console.log(dateURL);

        const Dtext = this.canvas.toDataURL("image/png");
        const text = new Image();
        text.src = Dtext;
        const img = new Image()

        // img.src = this.local.getData("img1") + '';
        img.src = '../../../assets/tempimage.jpg';
        const newWidth = 500;
        const newHeight = (img.height / img.width) * newWidth;
        img.onload = () => {
          context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          context.drawImage(img, 0, 0, newWidth, newHeight);
          context.drawImage(text, 0, 0, newWidth, newHeight)
        }
        const png = this.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        console.log(png);
        this.listdataURL.push(png);

        // const newWidth = 500;
        // const newHeight = (imgs.height / imgs.width) * newWidth;
        // imgs.src = this.local.getData("img1") + '';
        // imgs.onload = () => {
        //   context.drawImage(imgs, 0, 0, newWidth, newHeight);
        // };


        // var myImg = new Image();
        // myImg.src = (this.local.getData("img1") + '');

        // myImg.onload = () => {
        //   context.drawImage(myImg, 0, 0, newWidth, newHeight);
        //   context.drawImage(text, 0, 0);
        // };
        // const ima = <HTMLImageElement>document.getElementById("imageQ").src = png;



        this.listcanvas.push(this.canvas);

      }//if context

      // let jsons = {
      //   "A": this.A,
      //   "B": this.B,
      //   "A1": this.A1,
      //   "B1": this.B1,
      //   "C": this.C
      // }

    }//for 1

    // for (let index = 0; index < this.listdataURL.length; index++) {
    //   const element = this.listdataURL[index];

    //   const canvas = <HTMLCanvasElement>document.getElementById('canvas-' + index);
    //   const context = canvas.getContext('2d')


    //   if (context) {


    //     const imgs = new Image();

    //     imgs.src = "../../../assets/tempimage.jpg";
    //     const newWidth = 500;
    //     const newHeight = (imgs.height / imgs.width) * newWidth;

    //     imgs.onload = () => {
    //       context.drawImage(imgs, 0, 0, newWidth, newHeight);
    //     };


    //     const png = canvas.toDataURL("image/png");
    //     console.log(png);
    //     this.listdataURL.push(png);

    //   }

    // }
    // console.log(this.listcanvas);
    // console.log(this.listdataURL);
  }


  async loadImagesss(src: string): Promise<HTMLImageElement> {
    const image = new Image();
    image.src = src;
    return new Promise(resolve => {
      image.onload = (ev) => {
        resolve(image);
        console.log(image);
      }
    });
  }


  async candown(array: any) {

    const zip = new JSZip();
    // this.listdataURL = this.listdataURL.filter(item => item !== item);
    // console.log(this.listdataURL);

    for (let index = 0; index < this.listdataURL.length; index++) {
      const element = this.listdataURL[index];
      const name = this.ALL1[index].name;

      // console.log(element);

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

  randomN1(number: any): number[] {
    let s1 = this.getRandomNumber(0, 4);
    let arr: number[] = []
    let num = number.toString();
    // console.log("NUMGET: " + num)
    // console.log("S1: " + s1)
    if (s1 == 0) {
      arr = [
        this.getRandomNumber(0, 9) + num,
        num + this.getRandomNumber(0, 9),
        this.getRandomNumber(0, 99)
      ];
    } else if (s1 == 1) {
      arr = [
        num + this.getRandomNumber(0, 9),
        this.getRandomNumber(0, 9) + num,
        this.getRandomNumber(0, 9) + num
      ];
    } else if (s1 == 2) {
      arr = [
        this.getRandomNumber(0, 9) + num,
        num + this.getRandomNumber(0, 9),
        this.getRandomNumber(0, 9) + num,
      ];
    } else if (s1 == 3) {
      arr = [
        this.getRandomNumber(0, 9) + num,
        num + this.getRandomNumber(0, 9),
        num + this.getRandomNumber(0, 9)
      ];
    } else if (s1 == 4) {
      arr = [
        num + this.getRandomNumber(0, 9),
        this.getRandomNumber(0, 9) + num,
        num + this.getRandomNumber(0, 9)
      ];
    }
    else if (s1 == 5) {
      arr = [
        this.getRandomNumber(0, 9) + num,
        this.getRandomNumber(0, 99),
        num + this.getRandomNumber(0, 9)
      ];
    }
    else {
      console.log("s1 ERROR")
    }

    for (let i = 0; i < arr.length; i++) {
      let ck = this.checkindex(arr[i], arr);
      if (ck == 2) {
        // console.log("num Angil:\t" + arr[i])
        // console.log("============CK2===============")
        arr[i] = this.getRandomNumber(0, 99)
      } else if (ck == 1) {
        // console.log("=============CK1==============")
        arr[i] = this.getRandomNumber(0, 9) + arr[i];
      } else {
        // console.log("=============CK0==============")
        ck = this.checkindex(arr[i], arr);
      }
    }
    return arr
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

    const arr1 = this.randomN1(randomNum1);
    const arr2 = this.randomN1(randomNum2);

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
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.strokeText(text, x, y);
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }


  loadImage(url: string): Promise<HTMLImageElement> {
    // console.log("loadImage");
    // console.log("url: " + url);

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () =>
        resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  }



  trackByFn(index: any) {
    return (index);
  }

  checkbox(obj: any) {
    const lid = obj.lid;
    const index = this.ALL1.findIndex((element) => element.lid === lid);
    console.log(lid);

    if (index >= 0) {

      // The checkbox is already selected, so remove it from the array
      this.ALL1.splice(index, 1);
      this.isShowG = false
    } else {
      this.isShowG = true
      // The checkbox is not selected, so add it to the array
      this.ALL1.push(obj);

      // Remove any existing items from the array with the same `lid` value
      // this.ALL1 = this.ALL1.filter((element) => element.lid !== lid);
    }

    console.log(this.ALL1);
  }

  checkALL() {
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
    console.log(this.ALL1);
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

