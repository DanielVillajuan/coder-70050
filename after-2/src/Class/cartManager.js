import fs from 'node:fs/promises';

export class CartManager {
    constructor(path){
        this.path = path
        this.carts = []
    }


    async addProductToCard(id, productId){
        this.carts = await this.getCarts();
        const cardsUpdated = this.carts.map((cart)=>{
            if(cart.id !== id) return cart
            
            const indexProd = cart.products.findIndex(prod => prod.id === productId);
            if(indexProd === -1){
                cart.products.push({ id: productId, quantity: 1 })
                return cart;
            }
            cart.products[indexProd] = { ...cart.products[indexProd], quantity: cart.products[indexProd].quantity + 1 }
            return cart;
            
        })
        this.carts = [...cardsUpdated]
        await fs.writeFile(this.path,JSON.stringify({ data: this.carts }))
    }

}
