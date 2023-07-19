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
            origen: "Alemania",
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
            origen: "Estados Unidos",
            precio: 39.99
          },
          {
            id: 3,
            nombre: "Splendor",
            marca: "Space Cowboys",
            genero: "Estrategia",
            jugadores: "2-4",
            edades: "10+",
            imagen: "https://example.com/splendor.jpg",
            origen: "Francia",
            precio: 27.99
          },
          {
            id: 4,
            nombre: "Scythe",
            marca: "Stonemaier Games",
            genero: "Estrategia",
            jugadores: "1-5",
            edades: "14+",
            imagen: "https://example.com/scythe.jpg",
            origen: "Estados Unidos",
            precio: 49.99
          },
          {
            id: 5,
            nombre: "Puerto Rico",
            marca: "Rio Grande Games",
            genero: "Estrategia",
            jugadores: "2-5",
            edades: "12+",
            imagen: "https://example.com/puerto-rico.jpg",
            origen: "Estados Unidos",
            precio: 34.99
          },
          {
            id: 6,
            nombre: "Dungeons & Dragons",
            marca: "Wizards of the Coast",
            genero: "Rol",
            jugadores: "2+",
            edades: "12+",
            imagen: "https://example.com/dungeons-dragons.jpg",
            origen: "Estados Unidos",
            precio: 49.99
          },
          {
            id: 7,
            nombre: "Pathfinder",
            marca: "Paizo",
            genero: "Rol",
            jugadores: "2+",
            edades: "12+",
            imagen: "https://example.com/pathfinder.jpg",
            origen: "Estados Unidos",
            precio: 39.99
          },
          {
            id: 8,
            nombre: "Call of Cthulhu",
            marca: "Chaosium",
            genero: "Rol",
            jugadores: "2+",
            edades: "14+",
            imagen: "https://example.com/call-of-cthulhu.jpg",
            origen: "Estados Unidos",
            precio: 44.99
          },
          {
            id: 9,
            nombre: "Warhammer Fantasy Roleplay",
            marca: "Games Workshop",
            genero: "Rol",
            jugadores: "2+",
            edades: "14+",
            imagen: "https://example.com/warhammer-fantasy.jpg",
            origen: "Reino Unido",
            precio: 54.99
          },
          {
            id: 10,
            nombre: "Shadowrun",
            marca: "Catalyst Game Labs",
            genero: "Rol",
            jugadores: "2+",
            edades: "14+",
            imagen: "https://example.com/shadowrun.jpg",
            origen: "Estados Unidos",
            precio: 49.99
          },
          {
            id: 11,
            nombre: "UNO",
            marca: "Mattel",
            genero: "Cartas",
            jugadores: "2-10",
            edades: "7+",
            imagen: "https://example.com/uno.jpg",
            origen: "Estados Unidos",
            precio: 9.99
          },
          {
            id: 12,
            nombre: "Coup",
            marca: "Indie Boards and Cards",
            genero: "Cartas",
            jugadores: "2-6",
            edades: "10+",
            imagen: "https://example.com/coup.jpg",
            origen: "Estados Unidos",
            precio: 14.99
          },
          {
            id: 13,
            nombre: "Hanabi",
            marca: "R&R Games",
            genero: "Cartas",
            jugadores: "2-5",
            edades: "8+",
            imagen: "https://example.com/hanabi.jpg",
            origen: "Japón",
            precio: 11.99
          },
          {
            id: 14,
            nombre: "Dominion",
            marca: "Rio Grande Games",
            genero: "Cartas",
            jugadores: "2-4",
            edades: "14+",
            imagen: "https://example.com/dominion.jpg",
            origen: "Estados Unidos",
            precio: 34.99
          },
          {
            id: 15,
            nombre: "Love Letter",
            marca: "AEG",
            genero: "Cartas",
            jugadores: "2-4",
            edades: "10+",
            imagen: "https://example.com/love-letter.jpg",
            origen: "Estados Unidos",
            precio: 9.99
          }
      ];

      setTimeout(() => {
         resolve(juegos);
       }, 1000);

   })
}

export default getData