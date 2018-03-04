import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsAdv'
})
export class JsAdvPipe implements PipeTransform {

  transform(value: { [key: string]: any }, args?: number[]): string {
    let cnstObj = value
    cnstObj.tm = new Date().getMilliseconds()
    console.log(args.length)
    cnstObj.nms = args
    return JSON.stringify(cnstObj);
  }
}
