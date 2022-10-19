import { Component,OnInit} from "@angular/core";
import { __values } from "tslib";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'to-do';
  list:string[]=[];
 public todoS:string='';




  addToList():void{
    this.list.push(this.todoS);

  }
  removeFromList(index:number):void{
    this.list.splice(index,1);
   console.log(this.list);
  }
  ngOnInit() {
  }
}
