import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
    submit: boolean=false;
    
    form: FormGroup = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl(''),
    })

    onSubmit(event: any): void{
      event.preventDefault();
      this.submit= true;
      this.form.setValue(
        {
          firstname:'',
          lastName:'',
          email:'',
          subject:'',
          message:''
        }
      )   
    }
  }

