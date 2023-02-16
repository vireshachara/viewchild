import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{
  title = 'viewchild';

  // To access the DOM Elements within the HTML
  @ViewChild('dobInput') dateOfBirth!: ElementRef;
  @ViewChild('ageInput') age!: ElementRef;
  // To access the component
  @ViewChild(DemoComponent, { static: true }) demoComp!: DemoComponent;
  @ViewChild('headline') head! : ElementRef;
  @ViewChild(DemoComponent) Demo! : DemoComponent;


  caluclateAge() {
    let birthYear = new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();

    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;

    // console.log(this.dateOfBirth);
    // console.log(this.age)
  }

  ngAfterViewInit(): void {
    //Example 3
    console.log(this.head.nativeElement.innerHTML);
    // Example 4
    this.Demo.isSuperAdmin = true;
  }
}
