//! DESACTIVADO
/*
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

function getData() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(juegos);
      }, 1000);
   });
}

export function getProductData(idURL) {
   return new Promise((resolve, reject) => {
      const productRequested = juegos.find(
         (item) => parseInt(item.id) === parseInt(idURL)
      );

      setTimeout(() => {
         resolve(productRequested);
      }, 1000);
   });
}

export function getCategoryData(categoryURL) {
   return new Promise((resolve, reject) => {
      const categoryRequested = juegos.filter((item) =>
         item.genero.toLowerCase() === categoryURL.toLowerCase()
      );

      setTimeout(() => {
         resolve(categoryRequested);
      }, 1000);
   });
}

export default getData;
*/