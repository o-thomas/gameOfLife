export class Grid{
  id: number;
  axeYLength: number;
  axeXLength: number;
  constructor(id: number, axeYLength: number, axeXLength: number) {
    this.id = id;
    this.axeYLength = axeYLength;
    this.axeXLength = axeXLength;
  }
  getId(): number{
    return this.id;
  }
  setId(id): void{
    this.id = id;
  }
  getAxeYLength(): number{
    return this.axeYLength;
  }
  setAxeYLength(axeYLength): void{
    this.axeYLength = axeYLength;
  }
  getAxeXLength(): number{
    return this.axeXLength;
  }
  setAxeXLength(axeXLength): void{
    this.axeXLength = axeXLength;
  }

}
