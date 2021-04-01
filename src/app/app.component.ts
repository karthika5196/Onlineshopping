import { Component } from '@angular/core';
import{ Router } from '@angular/router';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineshopping';
  constructor(private router:Router){}
  register(){
    this.router.navigateByUrl('register');
  }

}
