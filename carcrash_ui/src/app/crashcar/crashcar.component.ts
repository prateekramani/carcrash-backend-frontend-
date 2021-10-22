import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../services/homeservices.service';

@Component({
  selector: 'app-crashcar',
  templateUrl: './crashcar.component.html',
  styleUrls: ['./crashcar.component.css']
})


export class CrashcarComponent implements OnInit {
  crashdetails = [ {
    vehicle_type_code1  : "",
    vehicle_type_code2  : "",
    crash_date  : "",
    crash_time  : "",
  }]

  year  : any = "" 
  month: any = ""
  day : any= ""
  


  constructor(private homeService : HomeservicesService) { }

  ngOnInit(): void {debugger
    this.homeService.getCrashes().subscribe((data: any)=>{
      // console.log(data)
      this.crashdetails = data
    })
  }

  DateChange(value  : any){debugger
     this.year = value.value.getUTCFullYear()
     this.day = value.value.getDate()
     this.month = value.value.getMonth()
      this.homeService.filterCrashesbyDate(this.year, this.month, this.day).subscribe((data: any)=>{
        this.crashdetails = data
      })
  }

  }

 



