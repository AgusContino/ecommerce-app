function getData() {

   return new Promise((resolve, reject) => {

      const juegos = [
         {
            id: 1,
            nombre: "Catan",
            marca: "Devir",
            genero: "Estrategia",
            jugadores: "3-4",
            edades: "10+",
            imagen: "https://example.com/catan.jpg",
            pais: "Alemania",
            precio: 29.99
         },
         {
            id: 2,
            nombre: "Ticket to Ride",
            marca: "Days of Wonder",
            genero: "Estrategia",
            jugadores: "2-5",
            edades: "8+",
            imagen: "https://example.com/ticket-to-ride.jpg",
            pais: "Estados Unidos",
            precio: 39.99
         },
         {
            id: 3,
            nombre: "Pandemic",
            marca: "Z-Man Games",
            genero: "Cooperativo",
            jugadores: "2-4",
            edades: "10+",
            imagen: "https://example.com/pandemic.jpg",
            pais: "Estados Unidos",
            precio: 34.99
         },
         {
            id: 4,
            nombre: "Dixit",
            marca: "Libellud",
            genero: "Familiar",
            jugadores: "3-6",
            edades: "8+",
            imagen: "https://example.com/dixit.jpg",
            pais: "Francia",
            precio: 24.99
         },
         {
            id: 5,
            nombre: "Codenames",
            marca: "Czech Games Edition",
            genero: "Palabras",
            jugadores: "2-8+",
            edades: "14+",
            imagen: "https://example.com/codenames.jpg",
            pais: "República Checa",
            precio: 19.99
         },
         {
            id: 6,
            nombre: "Splendor",
            marca: "Space Cowboys",
            genero: "Estrategia",
            jugadores: "2-4",
            edades: "10+",
            imagen: "https://example.com/splendor.jpg",
            pais: "Francia",
            precio: 27.99
         },
         {
            id: 7,
            nombre: "7 Wonders",
            marca: "Repos Production",
            genero: "Estrategia",
            jugadores: "2-7",
            edades: "10+",
            imagen: "https://example.com/7-wonders.jpg",
            pais: "Francia",
            precio: 39.99
         },
         {
            id: 8,
            nombre: "Carcassonne",
            marca: "Z-Man Games",
            genero: "Estrategia",
            jugadores: "2-5",
            edades: "7+",
            imagen: "https://example.com/carcassonne.jpg",
            pais: "Alemania",
            precio: 23.99
         },
         {
            id: 9,
            nombre: "King of Tokyo",
            marca: "IELLO",
            genero: "Duelo",
            jugadores: "2-6",
            edades: "8+",
            imagen: "https://example.com/king-of-tokyo.jpg",
            pais: "Francia",
            precio: 29.99
         },
         {
            id: 10,
            nombre: "Scythe",
            marca: "Stonemaier Games",
            genero: "Estrategia",
            jugadores: "1-5",
            edades: "14+",
            imagen: "https://example.com/scythe.jpg",
            pais: "Estados Unidos",
            precio: 49.99
         }
      ];

      setTimeout(() => {
         resolve(juegos);
       }, 2000);

   })
}

export default getData