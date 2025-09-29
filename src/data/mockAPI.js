import products from "./products";

export default function getProducts() {
    return new Promise((resolve) => {
        console.log("2. Promesa creada, procesando...")
        setTimeout(() => resolve(products), 1500)
    })
}

export function getProductsById(idParam) {
    const promiseProduct = new Promise((resolve, reject) => {
        const productRequest = products.find(prod => prod.id === Number(idParam))
        console.log("Devolviendo producto segun su ID", productRequest)
        setTimeout(() => {
            if (productRequest) {
                resolve(productRequest)
            }
            else {
                reject("Este producto no existe")
            }
        }
            , 1000)
    })
    return promiseProduct;

}

export function getProductsByCategory(categParam) {
    const promiseProduct = new Promise((resolve, reject) => {
        const productsRequest = products.filter(prod => prod.category === categParam)
        console.log("Devolviendo productos según su categoria", productsRequest)
        setTimeout(() => resolve(productsRequest), 1000);
    })
    return promiseProduct;
}