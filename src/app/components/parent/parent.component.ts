import { Component, OnInit } from '@angular/core';
import {  FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { memberdata} from './user.function';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  myform = new FormGroup({
    fname:new FormControl("",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],),
    fpass:new FormControl("",[Validators.required,Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')],)
  })
  // formdata :any;
// formModal:any;
// formSubmit = false;
counter = 0;
memberdatalObj : memberdata = new memberdata(); 
  constructor(private formBuilder: FormBuilder,public apiobj:ApiService) { }

  ngOnInit(): void {

    
    
  }
adduser()
{
  

  // this.formSubmit = true;
  if( this.myform.valid){
   console.log("harsh");
   console.log(this.myform.value.fname,this.myform.value.fpass)
    this.memberdatalObj.email = this.myform.value.fname;
    this.memberdatalObj.pass = this.myform.value.fpass;
    console.log("OBject",this.memberdatalObj)
    this.apiobj.postuser(this.memberdatalObj).subscribe(res=>{
      
      this.counter++;
      this.myform.reset();
      
    },
    error=>{
      alert("There is some error,please try again"+error)
    }) 
   }
  
}
  get xyz()
  {
    return this.myform.controls;
  }
    // postdata()
    // {
    //   let formdata=this.myform.getRawValue();
    //   console.log(formdata);
    // }  
}

