import { ErrorService } from "./error.service";
import { Loader } from "./loader.service";
import { RedirectService } from "../services/redirect.service"
import { Router } from "vue-router";

export class AuthService {
  private static redirectService: RedirectService;

  public static initialize(router: Router) {
    this.redirectService = new RedirectService(router);
  }

  static async auth(email: string, password: string, loaderRef: Loader): Promise<void> {
    loaderRef.activate();
    ErrorService.showError('sasi');
    this.redirectService.toExpertMain();
  }
}