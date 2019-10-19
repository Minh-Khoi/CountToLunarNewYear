import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkWithServerService {
  dataFromJSON: string;

  constructor() {
    let self = this;
    this.loadData(self.dataFromJSON);
  }

  public loadData(obj){
    let xhr = new XMLHttpRequest();
    // console.log( xhr.responseText.length + " ok");
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // storingDOM.innerHTML += (this.responseText);
        obj = this.responseText;
      } else {
        // console.log("reponse loading: " + this.readyState+"-------"+ this.status);
      }
    };
    // console.log(this.dataFromJSON);
    xhr.open("GET", "./assets/data.json", true);
    xhr.send();
  }
  private callbackForLoadData(a, c) {
    //When the loadData2() use the XMLHttpRequest non-async method
    // Use this function as a callback inside the state "onreadystatechange"
  }

  public loadData2(){
    let self = this;
    let xhr = new XMLHttpRequest();
    // console.log( xhr.responseText.length + " ok");
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        self.dataFromJSON = this.responseText
      } else {
        // console.log("reponse loading: " + this.readyState+"-------"+ this.status);

      }
    };
    xhr.open("GET", "./assets/data.json", false);
    xhr.send();
    return (self.dataFromJSON);
  }

  loadBgImg(url: string, target:any){
    target=url;
  }
}
