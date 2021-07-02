import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import firebase from 'firebase'
import auth = firebase.auth

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private iaAuth: boolean = false

  constructor(private auth: AngularFireAuth) {
    if (!!localStorage.uid) {
      this.iaAuth = true
    }
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => res.user)
      .then(user => {
        localStorage.uid = user!.uid
        this.iaAuth = true
      })
  }

  logout() {
    this.auth.signOut()
    this.iaAuth = false
    localStorage.removeItem('uid')
  }

  getAuth() {
    return this.iaAuth
  }
}
