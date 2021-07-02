import auth from 'firebase';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: Observable<User>;

  constructor( public afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router,/*private google: GooglePlus*/){
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerifcationEmail();
      return user;
    } catch (error) {
      console.log('Ya esta registrado o No cumple las condiciones');
    }
  }

  async mibellologin(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.error('No cumple las Condiciones');
    }
  }


  async sendVerifcationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      console.log('El correo no Cumple las Condiciones o No existe', error);
    }
  }

  isEmailVerified(user: User): boolean {
    return user.emailVerified === true ? true : false;
  }

  logout(){
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

 public updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    return userRef.set(data, { merge: true });
  }

  async loginwithfacebook(): Promise<User>{
    try{
      const {user} = await this.afAuth.signInWithPopup(new auth.auth.FacebookAuthProvider());
      this.updateUserData(user);
      return user;
    }
    catch (error){console.log('Error->', error);
  }
  }

  async loginwithgoogle(): Promise<User>{
    try{
      const {user} = await this.afAuth.signInWithPopup(new auth.auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user;
    }
    catch (error){console.log('Error->', error);
  }
  }

}
