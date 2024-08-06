import fs from 'node:fs/promises';

export class CartManager {
    constructor(path){
        this.path = path
        this.carts = []
    }

   

    async addProductToCard(id, productId){ // 'api/cart/:cid/product/:pid'
        this.carts = await this.getCarts(); // recuperamos del archivo cart.json, toda la info del carrito o carritos
        const cardsUpdated = this.carts.map((cart)=>{
            if(cart.id !== id) return cart // si no es el carrito, no lo modifico
            // saltea el if si el carrito es el recibido por parametro (id)
            const indexProd = cart.products.findIndex(prod => prod.id === productId); // el indice del elemento en el array o -1 si no lo encontro
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
