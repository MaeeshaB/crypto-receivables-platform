import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  getLoggedInClientID(): number {
    // For now, just return 1, the user for MB
    return 1;
  }
}
