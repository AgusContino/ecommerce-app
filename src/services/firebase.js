import { initializeApp } from "firebase/app";
import { getFirestore, writeBatch, collection, doc, getDocs, where, query, getDoc, addDoc } from "firebase/firestore"

const firebaseConfig = {
   apiKey: "AIzaSyDppmMK9O1ePj0QLmjHoIfyzWfsNGqb5UI",
   authDomain: "lunatica-ecommerce.firebaseapp.com",
   projectId: "lunatica-ecommerce",
   storageBucket: "lunatica-ecommerce.appspot.com",
   messagingSenderId: "638822886947",
   appId: "1:638822886947:web:7708357b3d340a72378b96"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase)

async function getData() {
   const collectionRef = collection(db, "products")
   const collectionSnap = await getDocs(collectionRef)
   const documents = collectionSnap.docs
   const docsData = documents.map((item) => {
      return { id: item.id, ...item.data() }
   })

   return docsData

}

async function getCategoryData(categoryURL) {

   const collectionRef = collection(db, "products")
   const q = query(collectionRef, where("genero", "==", categoryURL))
   const collectionSnap = await getDocs(q)
   const documents = collectionSnap.docs
   const docsData = documents.map((item) => {
      return { id: item.id, ...item.data() }
   })

   return docsData

}

async function getProductData(idURL) {

   const docRef = doc(db, "products", idURL)
   const docSnap = await getDoc(docRef)

   return { id: docSnap.id, ...docSnap.data() }

}

async function exportOrderData(orderData) {
   const collectionRef = collection(db, "orders")
   const createdDoc = await addDoc(collectionRef, orderData)
   return createdDoc.id
}

async function getOrderData(orderId) {
   const docRef = doc(db, "orders", orderId)
   const docSnap = await getDoc(docRef)

   return ({ id: docSnap.id, ...docSnap.data() })
}

async function exportProductsBatch() {

   const juegos = [
      {
         nombre: "Catan",
         marca: "Devir",
         genero: "Estrategia",
         jugadores: "3-4",
         edades: "10+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Alemania",
         precio: 29.99,
         stock: 5
      },
      {
         nombre: "Ticket to Ride",
         marca: "Days of Wonder",
         genero: "Estrategia",
         jugadores: "2-5",
         edades: "8+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Estados Unidos",
         precio: 39.99,
         stock: 4
      },
      {
         nombre: "Splendor",
         marca: "Space Cowboys",
         genero: "Estrategia",
         jugadores: "2-4",
         edades: "10+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Francia",
         precio: 27.99,
         stock: 3
      },
      {
         nombre: "Scythe",
         marca: "Stonemaier Games",
         genero: "Estrategia",
         jugadores: "1-5",
         edades: "14+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Estados Unidos",
         precio: 49.99,
         stock: 1
      },
      {
         nombre: "Puerto Rico",
         marca: "Rio Grande Games",
         genero: "Estrategia",
         jugadores: "2-5",
         edades: "12+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Estados Unidos",
         precio: 34.99,
         stock: 0
      },
      {
         nombre: "Dungeons & Dragons",
         marca: "Wizards of the Coast",
         genero: "Rol",
         jugadores: "2+",
         edades: "12+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Estados Unidos",
         precio: 49.99,
         stock: 6
      },
      {
         nombre: "Pathfinder",
         marca: "Paizo",
         genero: "Rol",
         jugadores: "2+",
         edades: "12+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Estados Unidos",
         precio: 39.99,
         stock: 0
      },
      {
         nombre: "Call of Cthulhu",
         marca: "Chaosium",
         genero: "Rol",
         jugadores: "2+",
         edades: "14+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Estados Unidos",
         precio: 44.99,
         stock: 7
      },
      {
         nombre: "Warhammer Fantasy Roleplay",
         marca: "Games Workshop",
         genero: "Rol",
         jugadores: "2+",
         edades: "14+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Reino Unido",
         precio: 54.99,
         stock: 1
      },
      {
         nombre: "Shadowrun",
         marca: "Catalyst Game Labs",
         genero: "Rol",
         jugadores: "2+",
         edades: "14+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Estados Unidos",
         precio: 49.99,
         stock: 2
      },
      {
         nombre: "UNO",
         marca: "Mattel",
         genero: "Cartas",
         jugadores: "2-10",
         edades: "7+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Estados Unidos",
         precio: 9.99,
         stock: 5
      },
      {
         nombre: "Coup",
         marca: "Indie Boards and Cards",
         genero: "Cartas",
         jugadores: "2-6",
         edades: "10+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Estados Unidos",
         precio: 14.99,
         stock: 4
      },
      {
         nombre: "Hanabi",
         marca: "R&R Games",
         genero: "Cartas",
         jugadores: "2-5",
         edades: "8+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Japón",
         precio: 11.99,
         stock: 5
      },
      {
         nombre: "Dominion",
         marca: "Rio Grande Games",
         genero: "Cartas",
         jugadores: "2-4",
         edades: "14+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Estados Unidos",
         precio: 34.99,
         stock: 2
      },
      {
         nombre: "Love Letter",
         marca: "AEG",
         genero: "Cartas",
         jugadores: "2-4",
         edades: "10+",
         imagen: "https://placehold.co/200x100/red/white?text=Game",
         origen: "Estados Unidos",
         precio: 9.99,
         stock: 0
      },
   ];

   const batch = writeBatch(db)

   juegos.forEach(producto => {

      const newDoc = doc(collection(db, "products"))
      batch.set(newDoc, producto)

   })

   await batch.commit()
}

export { getData, getCategoryData, getProductData, exportOrderData, getOrderData }