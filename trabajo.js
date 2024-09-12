// Variables usando let
let planeta = "Marte";
let satelites = 2;
let temperatura = -63;
let distanciaAlSol = 227.9; // en millones de km
let tieneVida = false;
let gravedad = 3.721; // m/s²
let radio = 3389.5; // en km
let añoMarte = 687; // días terrestres
let misiones = 7;
let habitantes = 0;

// Variables usando const
const velocidadLuz = 299792.458; // km/s
const pi = 3.1416;
const gravedadTierra = 9.81; // m/s²
const nombreGalaxia = "Vía Láctea";
const diametroTierra = 12742; // en km

// Operaciones con variables
let diferenciaGravedad = gravedadTierra - gravedad;
let distanciaAlSolKm = distanciaAlSol * 1e6; // convertir a km
let radioMarte = pi * radio ** 2; // área aproximada de Marte
let misionesFuturas = misiones + 3;
let vidaPosible = tieneVida ? "Sí" : "No";

// Operador ternario
let esPlanetaHabitable = habitantes > 0 ? "Sí, ya tiene habitantes" : "No, aún no hay habitantes";

// Resultados
console.log("Planeta:", planeta);
console.log("Satelites:", satelites);
console.log("Temperatura en °C:", temperatura);
console.log("Distancia al Sol en km:", distanciaAlSolKm);
console.log("Diferencia de gravedad con la Tierra:", diferenciaGravedad);
console.log("Radio de Marte:", radioMarte);
console.log("¿Tiene vida?", vidaPosible);
console.log("Misiones futuras a Marte:", misionesFuturas);
console.log("¿Es habitable el planeta?", esPlanetaHabitable);
