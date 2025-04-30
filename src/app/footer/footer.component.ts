import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent{
  sendEmail() {
    const mailtoLink = "mailto:mitulnakrani3010@gmail.com";
    window.open(mailtoLink, '_blank');
  }
  
}
