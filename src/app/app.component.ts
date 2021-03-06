import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelperService } from './helper.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  userList: any ;
  form: FormGroup;
submitted: boolean;
  constructor(private helperService: HelperService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      fork: [false],
    });
  }

  searchUser() {
    console.log('call');
    this.userList = [];
    this.submitted=true;
    this.helperService
      .getUser(this.form.get('name').value)
      .subscribe((resp: any) => {
        if(!this.form.get('fork').value){
          resp = resp.filter(item=>item.fork==this.form.get('fork').value)
        }
        this.userList = resp.sort((a, b) => b.size - a.size);
        console.log(resp);
      },(err)=>{
console.log("err",err)
      });
  }
}
