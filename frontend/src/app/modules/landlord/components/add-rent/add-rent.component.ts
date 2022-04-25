import { Component, OnInit } from '@angular/core';
import { RentService } from '../../services/rent.service';

import Swal from 'sweetalert2'

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-rent',
  templateUrl: './add-rent.component.html',
  styleUrls: ['./add-rent.component.scss']
})
export class AddRentComponent implements OnInit {
  AddModel: any = {}
  user: any = {}
  constructor(private Rentservice: RentService,
    private route: Router,
    //private rentService: RentService,
  ) { }

  ngOnInit(): void {
  }

  navigationExtra = {
    queryParams: {
      option: 'landlord'
    }
  }
  back() {
    this.route.navigate(['/rent-details-list'], this.navigationExtra)
  }
  Addroom() {

    this.user = JSON.parse(localStorage.getItem('userId') || '{}')
    this.AddModel['landLordId'] = this.user._id

    this.Rentservice.Addroom(this.AddModel).subscribe((res) => {
      Swal.fire('Rent details added successfully')
      console.log(res)
    }, error => {
      console.log(error)

    }, () => {

    })
    console.log(this.AddModel)



    // this.router.navigate(['/'],navigationExtra)
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['rent-details-list'], this.navigationExtra);


  }
  getBase64 = (file: any) => new Promise(function (resolve: any, reject: any) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error: any) => reject('Error:', error);
  })
  changeImg = (e: any) => {
    const file = e.target.files[0];
    let encoded;
    this.getBase64(file)
      .then((result) => {
        encoded = result;
        this.AddModel.image = result
        console.log(encoded)
      })
      .catch(e => console.log(e))
  }
}