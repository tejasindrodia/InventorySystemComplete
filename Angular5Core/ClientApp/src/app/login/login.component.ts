import { Component, OnInit, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams,HttpResponse } from '@angular/common/http';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: Login[] = [];
  public response: Response[] = [];
  password: boolean = false; 
  model: any = {};
  errorMessage: string;
  public bseUrl: string = "";
  public sUserName: "";
  public sPassword = "";

  constructor(private router: Router, private LoginService: LoginService,
    public http: HttpClient, @Inject('BASE_URL') baseUrl: string, 
  ) {
    
    this.bseUrl = baseUrl;
   // this.ngOnInit();
  }

  ngOnInit() {
  //  this.loginForm = this.fb.group({
  //    UserName: [null, [Validators.required]],
  //    Password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
  //  });

    sessionStorage.removeItem('UserName');
    sessionStorage.clear();
  }

  togglePassword() {
    this.password = !this.password;
  }

  login(username: string, password: string) {

    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      UserName: username, Password: password
    };

    let headerOptions = new HttpHeaders();
    headerOptions.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');


    //this.http.get<Response[]>(this.bseUrl + 'api/Login/UserLogin').subscribe(
    //  this.response = {
    //    heroesUrl: (data as any).heroesUrl,
    //    textfile: (data as any).textfile,
    //  }
    //  result => {
    //  this.response = result;
    //}, error => console.error(error));

    const httpParams = new HttpParams()
      .set('username', username)
      .set('password', password);
     
    this.http.post<any>(this.bseUrl + 'api/Login/UserLogin', body, { headers: headers }).subscribe(data => {
   
     // this.response = data;
      if (data == "1")
        this.router.navigate(['/fetch-data']);
      else if (data == "0")
        this.errorMessage = "UserName/Pw Invalid";
      else if (data == "-1")
        this.errorMessage = "User Inactive.";
       
    });

 
    //this.http.post<any>(this.bseUrl + 'api/Login/UserLogin', body, { headers }).subscribe(data => {
    //  alert('test');
    //  this.response = data;

    //  alert(data.Status);
    //});
          

    //this.http.post<Response>(this.bseUrl + 'api/Login/UserLogin', body, { headers }).subscribe(
    //  data => { 
    //    alert(data.Status);
    //    this.router.navigate(['/fetch-data']);
    //    if (data.Status == "Success") {
    //      alert('test');
    //      this.router.navigate(['/Dashboard']);
    //      // let snackBarRef = this.snackBar.open('loggedin Successfully!',
    //      //'Got it!', {
    //      //  duration: 3000,
    //      //  verticalPosition: 'top',
    //      //  horizontalPosition: 'right',
    //      //});
    //    }
    //    else {
    //      this.errorMessage = data.Message;
    //    }
    //  },
    //  error => {
    //    this.errorMessage = error.message;
    //  });
      

    //this.LoginService.Login(body).subscribe(
    //  data => {
    //    if (data.Status == "Success") {
    //      this.router.navigate(['/Dashboard']);
    //     // let snackBarRef = this.snackBar.open('loggedin Successfully!',
    //  //'Got it!', {
    //  //  duration: 3000,
    //  //  verticalPosition: 'top',
    //  //  horizontalPosition: 'right',
    //  //});
    //    }
    //    else {
    //      this.errorMessage = data.Message;
    //    }
    //  },
    //  error => {
    //    this.errorMessage = error.message;
    //  });
  };
}
export interface Login {
  UserName: string;
  Password: string; 
}

export interface Response {
  Status: string;
  Message: string;
}
