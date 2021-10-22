import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeservicesService {

  constructor(private http: HttpClient) { }
  
  getCrashes(): any {
    return this.http.get("https://data.cityofnewyork.us/resource/h9gi-nx95.json")
  }

url : any = ""
  filterCrashesbyDate(year: any , month : any , day: any): any {
     this.url  ="https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=2014-01-21T00:00:00.000"
     this.url = this.url.replace('2014-01-21',year+'-'+month+'-'+day)
     return this.http.get(this.url)
  }

}
