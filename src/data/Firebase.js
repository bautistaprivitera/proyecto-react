import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, getDocs, where, query, addDoc , getDoc} from "firebase/firestore";
import products from "./products";

const firebaseConfig = {

  apiKey: "AIzaSyCG1mTFYq4Gw4bLjeeGYJKlrCac3IVAf-Y",
  authDomain: "proyecto-react-6c5b3.firebaseapp.com",
  projectId: "proyecto-react-6c5b3",
  storageBucket: "proyecto-react-6c5b3.firebasestorage.app",
  messagingSenderId: "606437369621",
  appId: "1:606437369621:web:2fd55c1ddf15d24cff6b1c",
  measurementId: "G-500CEKDBVV"

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
    const documentSnapshot = await getDoc(docRef);

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
    const newDoc = await addDoc(orderRef, orderData);

    return newDoc;  
  }

  export async function subirProducto(params) {
    for(let item of products){
      const newDoc = await addDoc(collection(db, "products"), item);
      console.log("item creado", newDoc.id);
    }
  }

  
