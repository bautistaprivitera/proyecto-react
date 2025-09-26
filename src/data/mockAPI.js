import products from "./products";

export default function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1500);
    });
}

export function getProductsById(idParam){
    const promiseProduct = new Promise(((resolve, reject) => {
        const productRequest = products.find( prod => prod.id === Number(idParam))
        setTimeout (() => resolve(productRequest), 1000);
    }))
    return promiseProduct;
}

export function getProductsByCategory(categoryParam){
    const promiseProduct = new Promise(((resolve, reject) => {
        const productsRequest = products.filter( prod => prod.category === (categoryParam))
        setTimeout (() => resolve(productsRequest), 1000);
    }))
    return promiseProduct;
}