import { Router } from "vue-router";

export class RedirectService {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public toExpertMain = (): void => {
    this.router.push('/admin');
  }

  public toDisciplines = (): void => {
    this.router.push('/disciplines');
  }
}
