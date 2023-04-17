// import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataserveiceService } from 'src/app/dataserveice.service';
import { LocalService } from 'src/app/local.service';
import { Image } from './imageD.model';



import * as JSZip from 'jszip';
// import { saveAs } from 'file-saver';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild('canvas', { static: true }) myCanvas !: ElementRef;
  @ViewChild('Arraycanvas', { static: true }) Arraycanvas!: ElementRef[];

  ctx!: CanvasRenderingContext2D;
  areAllImagesLoaded = false;

  myDate !: any;
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
  A1: any[] = [];
  B1: any[] = [];
  isShowG = false;
  isSelected = false;
  checked = false;


  All: any[] = [];
  ALL1: any[] = [];
  imagesD: Image[] = [
    { src: '' + this.local.getData("img1"), alt: 'Image 1' },
    { src: '' + this.local.getData("img1"), alt: 'Image 2' },
    { src: '' + this.local.getData("img1"), alt: 'Image 3' },
  ];
  arrayOfIndexes: any[] = []






  constructor(
    private dataService: DataserveiceService,
    private http: HttpClient,
    private local: LocalService,
    private el: ElementRef,
    // private datePipe: DatePipe
  ) {
    // this.myDate = new Date();
    // this.myDate = this.datePipe.transform(this.myDate, 'dd-MM-yyyy');
    // console.log(this.myDate);

    console.log(local.getData("img1"));
    this.imageuser = local.getData("img1");





    // http.get(dataService.apiEndpoint + '/image/' + local.getData("USER")).subscribe((data: any) => {
    //   console.log(data);
    //   let img = data[0].img1
    //   this.imageuser = img;
    //   console.log("img: " + this.imageuser);
    // });

    http.get(dataService.apiEndpoint + '/Lottary/1').subscribe((data: any) => {
      console.log(data);
      this.t1 = data;
    });

    http.get(dataService.apiEndpoint + '/Lottary/2').subscribe((data: any) => {
      console.log(data);
      this.t2 = data;
    });


    http.get(dataService.apiEndpoint + '/Lottary/3').subscribe((data: any) => {
      console.log(data);
      this.t3 = data;
    });

    http.get(dataService.apiEndpoint + '/Lottary/4').subscribe((data: any) => {
      console.log(data);
      this.t4 = data;
    });

    http.get(dataService.apiEndpoint + '/Lottary/5').subscribe((data: any) => {
      console.log(data);
      this.t5 = data;
    });

    http.get(dataService.apiEndpoint + '/read').subscribe((data: any) => {
      console.log(data);
      this.Lottary = data;
    });


  }

  async Cimg(ee: any) {

    this.All = this.arrayOfIndexes.filter(item => item !== item);
    console.log(ee);
    ee.forEach((element: any) => {
      this.All.push(element)
    });
    // this.dialog.open(ConfirmationDialogComponent, {
    //   minWidth: '300px'
    // });
    let text = "";

    // if (confirm("กรุณากรอกข้อมูลให้ครบถ้วน") == true) {

    text = "Create image";
    this.arrayOfIndexes = this.arrayOfIndexes.filter(item => item !== item);
    // this.listimages = this.listimages.filter(item => item !== item);
    console.log(ee);
    for (let index = 0; index < ee.length; index++) {
      const element = this.ALL1[index];
      const nameimg = element.name;
      console.log(nameimg);
      // this.arrayOfIndexes.push(index)
      // console.log(this.arrayOfIndexes);
      let canvas = <HTMLCanvasElement>this.el.nativeElement.querySelector('#canvas-' + index);
      const context = canvas.getContext('2d')

      if (context) {
        this.random();

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = 'red';
        context.fillStyle = 'rgba(17, 0, 255, 0.5)';

        const imgs = await (this.loadImage(this.local.getData("img1") + ''));

        // Calculate the new width and height
        const newWidth = 500;
        const newHeight = (imgs.height / imgs.width) * newWidth;

        // Draw the resized image on the canvas
        context.drawImage(imgs, 0, 0, newWidth, newHeight);

        let w = 500;
        let h = 500;
        let lenHH = nameimg.length;
        context.shadowOffsetX = 4;
        context.shadowOffsetY = 4;
        context.shadowBlur = 3;
        this.drawStroked(context, nameimg, (w / 2) - (lenHH * 7), 145, "32px Superspace", "#FFD51E", "black", 8) //ชื่อหวย
        for (let index = 0; index < ee.length; index++) {
          this.drawStroked(context, this.myDate, (w / 2) - 30, 170, "18px chuanchiim", "white", "", 0)

          for (let index = 0; index < ee.length; index++) { // ตัวเลข  0  0
            this.drawStroked(context, this.A, ((w / 2) - 50) - 15, 230, "90px chuanchiim", "#FFD51E", "black", 10)
            this.drawStroked(context, this.B, ((w / 2) + 50) - 15, 230, "90px chuanchiim", "#FFD51E", "black", 10)

            for (let index = 0; index < ee.length; index++) {


              this.A1.forEach((element, index) => {
                // context.fillText(element, (80 * index) + 155, 250);
                this.drawStroked(context, element, (70 * index) + 160, 280, "60px chuanchiim", "#FFD51E", "black", 5)
                // this.drawStroked(context, element, (70 * index) + 160, 320, "60px chuanchiim", "#FFD51E", "black", 5)
              });
              this.B1.forEach((element, index) => {
                this.drawStroked(context, element, (70 * index) + 160, 320, "60px chuanchiim", "#FFD51E", "black", 5)
              });

              for (let index = 0; index < ee.length; index++) {
                let A1 = ["132", "423", "331", "123"];
                A1.forEach((element, index) => {
                  this.drawStroked(context, element, (60 * index) + 140, 360, "36px chuanchiim", "#FFD51E", "black", 5)
                });
              }//for5
            }//for4
          }//for3
        }//for2

      }
    }//for 1

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
    console.log("NUMGET: " + num)
    console.log("S1: " + s1)
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
      this.checkindex(arr[i], arr)
    }
    return arr
  }

  random() {
    let previousNumber: number | undefined;

    const randomNum1 = this.getRandomNumber(0, 9);
    const randomNum2 = this.getRandomNumber(0, 9, randomNum1);


    // console.log(randomNum1);
    // console.log(randomNum2);


    const arr1 = this.randomN1(randomNum1);
    const arr2 = this.randomN1(randomNum2);
    console.log("Arr1: " + arr1)
    console.log("Arr2: " + arr2)

    this.A = randomNum1;
    this.B = randomNum2;
    this.A1 = arr1;
    this.B1 = arr2;
  }

  checkindex(num: any, arr: any) {
    let len = num.toString().length
    if (len > 0) {

      if (len == 1) {
        // console.log(num + "\tnum == 1 ");
        this.randomN1(this.getRandomNumber(0, 9))
      } else if (len == 2) {
        let temp = 0
        // console.log(num + "\tnum == 2 ");
        if (arr.includes(num)) {
          arr.forEach((ee: any) => {
            if (ee == num) {
              temp++
            }
            if (temp > 1) {
              console.log("==========================")
              this.randomN1(this.getRandomNumber(0, 9))
            }
            // else{
            //     temp=0
            // }
            // console.log(temp)
          });
        } else {

        }

      } else {
        // console.log(num + "\tnum > 2 ");
      }
    }
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
    console.log("loadImage");
    console.log("url: " + url);

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () =>
        resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  }

  Dowload() {
    console.log("Dowload");

  }

  // downloadImagesALL(images: any[], zipName: string) {
  //   let zipFile: JSZip = new JSZip();
  //   let imgFolder!: any;
  //   imgFolder = zipFile.folder('images');
  //   images.forEach((image, index) => {
  //     const xhr = new XMLHttpRequest();
  //     xhr.open('GET', image.src, true);
  //     xhr.responseType = 'blob';
  //     xhr.onload = () => {
  //       const blob = xhr.response;
  //       imgFolder.file(`${image.alt}.jpg`, blob);
  //       if (index === images.length - 1) {
  //         zipFile.generateAsync({ type: 'blob' }).then((content: any) => {
  //           saveAs(content, `${zipName}.zip`);
  //         });
  //       }
  //     };
  //     xhr.send();
  //   });
  // }

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

