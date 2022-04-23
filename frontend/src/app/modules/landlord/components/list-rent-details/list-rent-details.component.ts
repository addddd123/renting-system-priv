import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { RentService } from '../../services/rent.service';
export interface listrent {

  streetname: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  roomtype: string;
  action: string;

}

 const ELEMENT_DATA: listrent[] = [];

@Component({
  selector: 'app-list-rent-details',
  templateUrl: './list-rent-details.component.html',
  styleUrls: ['./list-rent-details.component.scss']
})


export class ListRentDetailsComponent implements OnInit {
  param:any=""
  userDetails:any={}
  constructor(private route: Router, private rentService: RentService,private router:ActivatedRoute) {
    this.router.queryParams.subscribe((params=>{
      this.param = params['option'];
    }))
   }


  

  ngOnInit(): void {
    this.getRentDetails();
   
  }


  info(row:any){
    localStorage.setItem('viewRoom',JSON.stringify(row))
    this.route.navigate(['/viewdetails'])
  }

  add_room() {
    this.route.navigate(['/addrent']);
  }
  displayedColumns: string[] = ['streetname', 'city', 'district', 'state', 'pincode', 'roomtype', 'action'];
   dataSource = ELEMENT_DATA;
  getRentDetails() {
    //call to backend
    this.rentService.getRentDetails().subscribe((res: any) => {
      console.log(res)
      this.dataSource = res;
      
    })
  }
  
  
  editDetails(row:any){
    localStorage.setItem('editRoom',JSON.stringify(row));
    this.route.navigate(['/editrent']);
  }

  deleteDetails(row:any){
    localStorage.setItem('deleteRoom',JSON.stringify(row))
   

    this.rentService.deleteRentDetails().subscribe((res:any)=>{
    
     
   
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = 'reload';
        this.route.navigate(['./'], { relativeTo: this.router });
      
    })
  }



}