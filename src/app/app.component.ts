import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user_management_system';
  users: any[] = [];

  onFormSubmitted(formData: FormGroup): void {
    if (formData.valid) {
      this.users.push(formData.value);
    }
  }
}
