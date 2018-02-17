import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-tmp-drvn',
    template: `
  <div class="container">
  <div class="row">
  <div class="col-md-12">
      <h4> Template Driven </h4>    
  </div>      
</div>   
	<div class="row">
    <div class="col-md-4">
		<div class="form_main">
                <h4 class="heading">
                <strong>Quick </strong> Contact <span></span></h4>
                <div class="form" >
                <form (ngSubmit)="onSubmit(frm)" #frm="ngForm">
                    <input 
                        type="text" 
                        required="" 
                        placeholder="Please input your Name" 
                        value="" name="nm" 
                        class="txt"
                        [ngModel]="preObj.nm"
                        #nm = "ngModel">
                    
                    <span *ngIf="!nm.valid" class="text-muted">Invalid Name </span>

                    <input 
                        type="text" 
                        required="" 
                        placeholder="Please input your mobile No" 
                        value="" 
                        name="mob" 
                        class="txt"
                        [ngModel]="preObj.mob"
                        #mob="ngModel">

                        <span *ngIf="!mob.valid" class="text-muted"> Invalid Mobile</span>

                    <input 
                        type="text" 
                        required="" 
                        placeholder="Please input your Email" 
                        value="" name="eml" 
                        class="txt"
                        [ngModel]="preObj.eml"
                        [pattern]="emlPtrn"
                        #eml="ngModel">

                        <span *ngIf="!eml.valid" class="text-muted"> Invalid email</span>
                     <input 
                        type="submit" 
                        value="submit" 
                        name="submit" 
                        class="txt2"
                        *ngIf="frm.valid">
                </form>
            </div>
            </div>
            </div>
	</div>
</div>
  `,
    styles: [`
  form_main {
    width: 100%;
}
.form_main h4 {
    font-family: roboto;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 15px;
    margin-top: 20px;
    text-transform: uppercase;
}
.heading {
    border-bottom: 1px solid #fcab0e;
    padding-bottom: 9px;
    position: relative;
}
.heading span {
    background: #9e6600 none repeat scroll 0 0;
    bottom: -2px;
    height: 3px;
    left: 0;
    position: absolute;
    width: 75px;
}   
.form {
    border-radius: 7px;
    padding: 6px;
}
.txt[type="text"] {
    border: 1px solid #ccc;
    margin: 10px 0;
    padding: 10px 0 10px 5px;
    width: 100%;
}
.txt_3[type="text"] {
    margin: 10px 0 0;
    padding: 10px 0 10px 5px;
    width: 100%;
}
.txt2[type="submit"] {
    background: #242424 none repeat scroll 0 0;
    border: 1px solid #4f5c04;
    border-radius: 25px;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    line-height: 35px;
    margin: 10px 0;
    padding: 0;
    text-transform: uppercase;
    width: 30%;
}
.txt2:hover {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    color: #5793ef;
    transition: all 0.5s ease 0s;
}`]
})
export class TmpDrvnComponent implements OnInit {

    preObj = {
        nm: 'android',
        mob: '9762548833',
        eml: 'aa@gmail.com'
    }
    emlPtrn = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    constructor() { }

    ngOnInit() {
    }

    onSubmit(frm: NgForm) {
        console.log(frm)
    }
}
