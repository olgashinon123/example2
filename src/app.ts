interface Products {
    id: Number,
    name: String,
    description: String,
    fecha: Date,
    quantity: Number,
    price: Number
}
class MagementProduct {
    list: Array<Products>
    searchList: Array<Products>
    constructor() {
        this.list = new Array();
        this.searchList = new Array();
    }
    addProduct(product: Products) {
        this.list.push(product);
    }
    removeProduct(id: Number) {
         this.list = this.list.filter((item: Products) => {
            if (item.id == id) {
                return false;
            }
            return true;
        });
    }
    searchProduct(key: string) {
        var keyExpression: RegExp = new RegExp(key, "i");
        this.searchList = this.list.filter((item: Products) => {
            if (item.name.match(keyExpression) != null) {
                return true;
            }
            return false;
        });
        return this.searchList;
    }
}