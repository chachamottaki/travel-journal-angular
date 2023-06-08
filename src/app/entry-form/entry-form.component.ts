import { Component } from '@angular/core';
import { EntryService } from '../entry.service'
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent {
  entryForm:FormGroup;

  constructor(private entryservice: EntryService, private formBuilder: FormBuilder){
    this.entryForm = this.formBuilder.group({
      date: '',
      location: '',
      entry:''
    });
  }

  submit(){
    console.log("form submitted :)")
    const date = (<string>this.entryForm.get('date')?.value);
    const location = (<string>this.entryForm.get('location')?.value);
    const entry = (<string>this.entryForm.get('entry')?.value);
    // console.log(email,password);
      this.entryservice.addEntry(5,date, location, entry).subscribe(
        result =>{
          console.log(date,location,entry);
          this.entryForm.reset();
      })
  }
}
