export class Coupon {
  public constructor(
    public id?: number,
    public companyID?: number,
    public category?: number,
    public title?: string,
    public description?: String,
    public startDate?: Date,
    public endDate?: Date,
    public amount?: number,
    public price?: number,
    public image?: String) {

  }

}
