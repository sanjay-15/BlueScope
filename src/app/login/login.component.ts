import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: String = '';
  password: String = '';
  userDetails:any=[];
  user:any = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
  };
  showRegistration:boolean = false;
  showLogin:boolean = true;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  openRegistration(){
    this.user = {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      confirmPassword:''
    };
    this.showLogin=false;
    this.showRegistration=true;
  }

  createAccount(){
    if(this.user.firstName==""||this.user.lastName==""||this.user.email==""||this.user.password==""||this.user.confirmPassword==""){
      alert("all fields are required");
    }else{
    if(this.user.password != this.user.confirmPassword){
      alert('Password and Confirm password not matched');
    }else{
      this.userDetails.push(this.user);
      alert('Your Account is Created');
      this.showLogin=true;
      this.showRegistration=false;
    }
   }
  }

  validate(){
    let isEmailNotMatch = false;
    let isPasswordNotMatch = false;
    for(let i=0; i<this.userDetails.length; i++){
      if(this.userDetails[i].email == this.email){
        isEmailNotMatch = false;
        if(this.userDetails[i].password == this.password){
          isPasswordNotMatch = false
          alert("Logined succesfully");
          break;
        }else{
          isPasswordNotMatch = true;
        }
      }else{
        isEmailNotMatch = true;
      }
  }
  if(isEmailNotMatch){
    alert('Enter Valid Email');
  } else if(isPasswordNotMatch){
    alert('Enter Valid Password');
  }
}

}
