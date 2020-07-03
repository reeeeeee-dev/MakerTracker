import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

/** General "Contact Us" page for entire site. */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  /**
   * Initializes a new instance of the ContactComponent class.
   * @param auth The authentication service, for displaying the register/go to dashboard button
   * @param route ActivatedRoute used to extract query parameter to view previous page
   */
  constructor(
    public auth: AuthService,
    private route: ActivatedRoute) {}
}
