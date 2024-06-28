import fs from 'node:fs'

class ProductManager {
    constructor(path){
        this.path = path;
        this.productList = [];
    }

    async getProductList(){
        const list = await fs.promises.readFile(this.path,'utf-8')
        this.productList = [...JSON.parse(list).data]
        return [...this.productList]
    }

    async addProduct(product){
        await this.getProductList();
        this.productList.push(product);
        await fs.promises.writeFile(this.path, JSON.stringify({ data: this.productList }))
    }

}

export default ProductManager
