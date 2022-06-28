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
    this.helperService
      .getUser(this.form.get('name').value)
      .subscribe((resp: any) => {
        this.userList = resp.filter(item=>item.fork==this.form.get('fork').value).sort((a, b) => b.size - a.size);
        console.log(resp);
      },(err)=>{
console.log("err",err)
      });
  }
}
