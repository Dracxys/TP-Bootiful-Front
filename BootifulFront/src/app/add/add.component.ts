import { Component, OnInit } from '@angular/core';
import {AddService} from "../service/add.service";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  private _current: string;
  private _addnumber: string;

  get current(): string {
    return this._current;
  }

  get addnumber(): string {
    return this._addnumber;
  }

  set current(value: string) {
    this._current = value;
  }

  set addnumber(value: string) {
    this._addnumber = value;
  }

  constructor(private _serviceadd: AddService) { }

  ngOnInit() {
    this._serviceadd.getCurrent().subscribe(_ => this._current = _);
  }

  add() {
    this._serviceadd.add_current(this.addnumber).subscribe(null,null,() => this.ngOnInit());
  }
}
