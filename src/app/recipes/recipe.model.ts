export class Recipe {
  public name: string;
  public descrition: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    // assign arguments to properties of class
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
