export class LoadManager {
  private callback!: (progress: number) => void;

  setCallback(callback: (progress: number) => void) {
    this.callback = callback;
  }


  load() {
    let num = 0;
    const id = setInterval(() => {
      num += 0.01;
      this.callback(num);

      if (num >= 1) {
        clearInterval(id);
      }
    }, 10);

  }
}
