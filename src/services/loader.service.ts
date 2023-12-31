import { ref } from "vue";

export class Loader {
  private isActive = ref(false);

  public get getIsActive() {
    return this.isActive.value;
  }

  public activate() {
    this.isActive.value = true;
  }

  public deactivate() {
    this.isActive.value = false;
  }
}