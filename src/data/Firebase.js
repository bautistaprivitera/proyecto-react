import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, getDocs, where, query, addDoc } from "firebase/firestore";
import products from "./products";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN, 
  projectId: import.meta.env.VITE_FIREBASE_PROJECT,
  storageBucket: import.meta.env.VITE_FIREBASE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDERID, 
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

 export async function getProducts(){
  const productsRef = collection(db, "products");
  const productsSnapshot = await getDocs(productsRef);

  const dataDocs = productsSnapshot.docs.map(doc => {
    return {id: doc.id, ...doc.data()}
  })

  return dataDocs;
  }

  export async function getProductsById(idParam) {
    const docRef = doc(db, "products", idParam);
    const documentSnapshot = await getDocs(docRef);

    return {id: documentSnapshot.id, ...documentSnapshot.data()}
  }

  export async function getProductsByCategory(categParam) {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", categParam));
    const productsSnapshot = await getDocs(q);

    const documentData = productsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

    return documentData;
  
  }

  export async function createOrder(orderData) {
    const orderRef = collection(db, "orders");
    const newDoc = addDoc(orderRef, orderData);

    return newDoc;  
  }

  export async function subirProducto(params) {
    for(let item of products){
      const newDoc = await addDoc(collection(db, "products"), item);
      console.log("item creado", newDoc.id);
    }
  }

  
