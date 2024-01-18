// import { ErrorService } from "./error.service";
import { Loader } from "./loader.service";
import { RedirectService } from "../services/redirect.service"
import { Router } from "vue-router";
import { Cookies } from "quasar";
import api from './api.service';
import { StoreDefinition } from "pinia";
import { useUserStore } from "src/stores/user";

export class AuthService {
  private static redirectService: RedirectService;
  private static store: StoreDefinition;

  public static initialize(router: Router) {
    this.redirectService = new RedirectService(router);
  }

  static async auth(email: string, password: string, loaderRef: Loader): Promise<void> {
    loaderRef.activate();
    const tokenInfo = await api.post('/login',
      {
        email,
        password
      },
      {
        showError: true
      }
    );

    this.setTokenCookie(tokenInfo.token);
    const userInfo = await this.getUserInfoByToken();
    const store = useUserStore()
  }

  static async getUserInfoByToken() {
    return await api.get('/me')
  }

  private static setTokenCookie(token: string): void {
    Cookies.set('token', token);
  }

  private static getTokenCookie(): string {
    return Cookies.get('token') || '';
  }
}