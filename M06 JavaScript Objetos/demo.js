var Less = [{
    Nombre: "Leslie",
    Apellido: "Medina",
    Trabaja: true,
    Estudia: true,
    PhoneNumber: 958367243,
    DNI: 72314598,
    Saludar: function(){console.log("Hola, " + this.Nombre + " " + this.Apellido)
    return "nn"},
    Hobbie: "Llegar tarde a cualquier lugar",
    Gustan: ["ojos", "ocurrencias", "tenasidad", "resiliencia", "nobleza"],
    Amigas: [{nombre: "Milito"}, {nombre:"Elito"}, {nombre:"Marito"},]
},
{
   Test: "Blanca como la nieve",
   Ojitos: "Café",
   Nerviosa: "Colorada",
   Laboral: "Trabaja muy duro",
   Graduación: ["Vestido negro", "Casaca negra", "Tacos dorados", "Eres, hermosísima"],
   Academicamente: {
       Carrera: "Economía",
       Uni: "U del Pacífico",
       Distrito: "Jesús María",
       Despierta: "5 a.m.",
   }
}
];

console.log(Less[0].PhoneNumber);


    // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
    // Este arreglo contiene objetos (post).
    // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
    // Debes sumar los likes de todos los post y retornar el resultado.
    // Tu código:
    
    let crisius = {
        nombre: "cris",
        post: [
            {
                likes: 75
            },
            {
                likes: 189
            },
            {
                likes: 1200
            }
        ]
    };

    console.log(crisius.post[2].likes);
