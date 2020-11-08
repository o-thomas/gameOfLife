
export class Color  {
  hexa: string;
  rgb: Array<number>;

  constructor(hexa?: string) {
    this.hexa = hexa;
  }
  convertHexaToRgb(hex): object{
    let regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let r = parseInt(regex[1], 16);
    let g = parseInt(regex[2], 16);
    let b = parseInt(regex[3], 16);
    let result = {'r': r, 'g': g, 'b': b};
    return result;
    }
    componentToHex(c): any {
      let hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
  }

    rgbToHex(r, g, b): string {
    return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  mixColor(colorList): any {
    let colorRgbList = [];
    let colorR = 0;
    let colorG = 0;
    let colorB = 0;
    for (let i = 0; i < colorList.length; ++i){
    let color = this.convertHexaToRgb(colorList[i]);
    colorRgbList.push(color);
    }
    for (let i = 0; i < colorRgbList.length; ++i){
     colorR = colorR + colorRgbList[i]['r'];
     colorG = colorG + colorRgbList[i]['g'];
     colorB = colorB + colorRgbList[i]['b'];
    }
    colorR = colorR / colorRgbList.length;
    colorG = colorG / colorRgbList.length;
    colorB = colorB / colorRgbList.length;
    colorR = Math.floor(colorR);
    colorG = Math.floor(colorG);
    colorB = Math.floor(colorB);
    return this.rgbToHex(colorR, colorG, colorB);
  }
}

