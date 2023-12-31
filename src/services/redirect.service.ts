import { Router } from "vue-router";

export class RedirectService {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
    console.log('constructor', this.router)
  }

  public toExpertMain(): void {
    this.router.push('/admin');
  }

  public toDisciplines(): void {
    console.log('toDisciplines', this.router)
    this.router.push('/disciplines');
  }
}
