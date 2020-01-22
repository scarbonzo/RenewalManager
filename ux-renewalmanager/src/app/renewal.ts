export class Renewal {
    id: number;
    name: string;
    description: string;
    categoryId: number;
    typeId: number;
    vendorId: number;
    notes: string;
    createDate: Date;
    expirationDate: Date;
    alerts: Date[];
}
