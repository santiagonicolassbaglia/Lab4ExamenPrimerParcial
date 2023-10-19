import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    
    if (username === 'usuario' && password === 'contraseña') {
      this.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  }

  logout() {
    // Cierra la sesión del usuario, establece isAuthenticated en false y elimina la información del Local Storage.
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
  }

  esUsuarioAutenticado(): boolean {
    // Verifica si el usuario está autenticado.
    return this.isAuthenticated;
  }
}
