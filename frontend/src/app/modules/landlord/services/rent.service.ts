import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  serverURL = environment.serverURL


  constructor(private http: HttpClient) { }
  Addroom(AddModel:any){  
    return this.http.post(`${this.serverURL}api/landlord/add-rent-details`,AddModel)
  }
  Editroom(editRoomDetails:any){
    const {_id:userId} = editRoomDetails
    return this.http.put(`${this.serverURL}api/landlord/edit-rent-details/${userId}`,editRoomDetails)
  }
  getRentDetails() {
    // const userId: any = localStorage.getItem('userId')
    // console.log("user id is",userId)
// return this.http.get(`${this.serverURL}api/landlord/get-all-rent-details/${userId}`)
  const userDetails:any = JSON.parse(localStorage.getItem('userId')|| '{}') 

  if(userDetails?.role=='landlord'){
  return this.http.get(`${this.serverURL}api/landlord/get-all-rent-details/${userDetails._id}`)

  }else{
    return this.http.get(`${this.serverURL}api/tenant/get-tenant-rent-details`)

      }

  }
    
  
  deleteRentDetails(){
   const deletedRoom = JSON.parse(localStorage.getItem('deleteRoom') || '{}')
   const {_id:userId} = deletedRoom;
   return this.http.delete(`${this.serverURL}api/landlord/delete-rent-details/${userId}`)
  }

  
}
