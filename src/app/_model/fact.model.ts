export class Fact {
  seriesId?: string = '';
  statusCode: string = '';
  message: string = '';
  constructor(x?: any) {
    if(x) {
      this.seriesId = x.seriesId ? x.seriesId : '';
      this.statusCode = x.statusCode ? x.statusCode : '';
      this.message = x.message ? x.message : '';
    }
  }
}
