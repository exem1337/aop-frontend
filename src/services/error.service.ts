import { Notify } from 'quasar';

export class ErrorService {
  public static async showError(text: string) {
    Notify.create({
      type: 'negative',
      message: text,
      position: 'top-right'
    });
  }
}