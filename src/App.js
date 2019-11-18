import React from 'react';
import './App.css';
import Carta from './Carta';
import Header from './Header';
import Tiempo from './Tiempo';
import Equipo from './Equipo';

import Fab from '@material-ui/core/Fab';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckIcon from '@material-ui/icons/Check';

import {withStyles} from '@material-ui/core/styles';

import {purple} from '@material-ui/core/colors/purple';
import PropTypes from "prop-types";

import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
  },
  fabLeft: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: purple
  },
  fabRight: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  fabTabu: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  }
});

const palabras = [
  {
    palabra: 'OBELISCO',
    tabues: [
      'Monumento',
      'Buenos Aires',
      'Corrientes',
      'Símbolo',
      'República',
    ]}, {
    palabra: 'Cocktail',
    tabues: [
      'Alcohol',
      'Trago',
      'Copa',
      'Mezcla',
      'Bebida',
    ]}, {
    palabra: 'Semana',
    tabues: [
      'Mes',
      'Cuatro',
      'Tiempo',
      'Siete',
      'Días',
    ]}, {
    palabra: 'Helicoptero',
    tabues: [
      'Avión',
      'Volar',
      'Rotor',
      'Vertical',
      'Hélice',
    ]}, {
    palabra: 'Congreso',
    tabues: [
      'Cámara',
      'Senado',
      'Gobierno',
      'Diputados',
      'Poder Legislativo',
    ]}, {
    palabra: 'Monstruo',
    tabues: [
      'Miedo',
      'Criatura',
      'Asustar',
      'Horrible',
      'Feo',
    ]}, {
    palabra: 'Tesoro',
    tabues: [
      'Piratas',
      'Mapa',
      'Cofre',
      'Oro',
      'Isla',
    ]}, {
    palabra: 'Asado',
    tabues: [
      'Fuego',
      'Parrilla',
      'Carbón',
      'Carne',
      'Cocinar',
    ]}, {
    palabra: 'Aguijon',
    tabues: [
      'Clavar',
      'Abeja',
      'Veneno',
      'Mosquito',
      'Avispa',
    ]}, {
    palabra: 'Submarino',
    tabues: [
      'Barco',
      'Periscopio',
      'Torpedo',
      'Inmersión',
      'Guerra',
    ]}, {
    palabra: 'Hospital',
    tabues: [
      'Doctor',
      'Medico',
      'Curar',
      'Internar',
      'Enfermo',
    ]}, {
    palabra: 'Puñal',
    tabues: [
      'Arma',
      'Mano',
      'Cuchillo',
      'Espada',
      'Daga',
    ]}, {
    palabra: 'Voto',
    tabues: [
      'Sufragio',
      'Presidente',
      'Cuarto Oscuro',
      'Urna',
      'Elecciones',
    ]}, {
    palabra: 'Camisa de fuerza',
    tabues: ['Mangas',
      'Atar',
      'Manicomio',
      'Loco',
      'Demente'
    ]}, {
    palabra: 'Anillo',
    tabues: [
      'Dedos',
      'Mano',
      'Sortija',
      'Compromiso',
      '}, Alianza',
    ]},{
    palabra: 'Anestesia',
    tabues: [
      'Dolor',
      'Operación',
      'Dormir',
      'Sentir',
      'Medico',
    ]}, {
    palabra: 'Xuxa',
    tabues: [
      'Brasil',
      'TV',
      'Niños',
      'Paquitas',
      'Pele',
    ]}, {
    palabra: 'Sillon',
    tabues: [
      'Respaldo',
      'Cómodo',
      'Asiento',
      'Sentarse',
      'Sofá',
    ]}, {
    palabra: 'Lagarto',
    tabues: [
      'Cocodrilo',
      'Animal',
      'Sol',
      'Reptil',
      'Pequeño',
    ]}, {
    palabra: 'Lacoste',
    tabues: [
      'Chomba',
      'Marca',
      'Ropa',
      'Cocodrilo',
      'Lagarto',
    ]}, {
    palabra: 'Aiwa',
    tabues: [
      'Grabador',
      'Música',
      'Minicomponente',
      'Marca',
      'Parlantes',
    ]}, {
    palabra: 'Flecha',
    tabues: [
      'Arco',
      'Punta',
      'Lanzar',
      'Ballesta',
      'Indios',
    ]}, {
    palabra: 'Shopping',
    tabues: [
      'Alto Palermo',
      'Comprar',
      'Unicenter',
      'Negocios',
      'Galería',
    ]}, {
    palabra: 'Insomnio',
    tabues: [
      'Cama',
      'Dormir',
      'Desvelo',
      'Sueño',
      'Noche',
    ]}, {
    palabra: 'Lanzar',
    tabues: [
      'Pelota',
      'Jabalina',
      'Tirar',
      'Echar',
      'Arrojar',
    ]}, {
    palabra: 'Ventana',
    tabues: [
      'Casa',
      'Pared',
      'Vidrio',
      'Mirar',
      'Luz',
    ]}, {
    palabra: 'Almibar',
    tabues: [
      'Azúcar',
      'Dulce',
      'Fruta',
      'Lata',
      'Liquido',
    ]}, {
    palabra: 'Colador',
    tabues: [
      'Te',
      'Agujeros',
      'Filtro',
      'Fideos',
      'Agua',
    ]}, {
    palabra: 'Ducha',
    tabues: [
      'Baño',
      'Canilla',
      'Toallon',
      'Agua',
      'Cuerpo',
    ]}, {
    palabra: 'Mastil',
    tabues: [
      'Bandera',
      'Palo',
      'Poste',
      'Izar',
      'Velas',
    ]}, {
    palabra: 'Estampilla',
    tabues: [
      'Carta',
      'Sobre',
      'Correo',
      'Lamer',
      'Sello',
    ]}, {
    palabra: 'Bala',
    tabues: [
      'Cartucho',
      'Pistola',
      'Disparar',
      'Proyectil',
      'Escopeta',
    ]}, {
    palabra: 'Hoguera',
    tabues: [
      'Madera',
      'Quemar',
      'Leña',
      'Fuego',
      'Campamento',
    ]}, {
    palabra: 'Bosque',
    tabues: [
      'Plantas',
      'Árboles',
      'Animales',
      'Madera',
      'Selva',
    ]}, {
    palabra: 'Alarma',
    tabues: [
      'Robo',
      'Casa',
      'Banco',
      'Atraco',
      'Ladrón',
    ]}, {
    palabra: 'Havanna',
    tabues: [
      'Alfajor',
      'Marca',
      'Golosina',
      'Mar del Plata',
      'Chocolate',
    ]}, {
    palabra: 'Software',
    tabues: [
      'Computadora',
      'Programa',
      'Disquette',
      'Lenguaje',
      'Hardware',
    ]}, {
    palabra: 'Hormiga',
    tabues: [
      'Insecto',
      'Comer',
      'Jardín',
      'Fila',
      'Plantas',
    ]}, {
    palabra: 'Corbata',
    tabues: [
      'Vestir',
      'Seda',
      'Camisa',
      'Cuello',
      'Nudo',
    ]}, {
    palabra: 'Gatillo',
    tabues: [
      'Dedo',
      'Tirar',
      'Apretar',
      'Disparar',
      'Pistola',
    ]}, {
    palabra: 'Escarbadientes',
    tabues: [
      'Madera',
      'Palito',
      'Aperitivo',
      'Boca',
      'Hilo dental',
    ]}, {
    palabra: 'Maraton',
    tabues: [
      'Carrera',
      'Competencia',
      'Kilómetros',
      'Olimpiadas',
      'Grecia',
    ]}, {
    palabra: 'Florero',
    tabues: [
      'Planta',
      'Recipiente',
      'Ramo',
      'Pote',
      'Agua',
    ]}, {
    palabra: 'Anzuelo',
    tabues: [
      'Caña',
      'Pescador',
      'Tirar',
      'Cebo',
      'Lombriz',
    ]}, {
    palabra: 'Uva',
    tabues: [
      'Vid',
      'Fruta',
      'Parra',
      'Racimo',
      'Vino',
    ]}, {
    palabra: 'Electricidad',
    tabues: [
      'Luz',
      'Corriente',
      'Energía',
      'Enchufe',
      'Lámpara',
    ]}, {
    palabra: 'Poker',
    tabues: [
      'Apostar',
      'Naipes',
      'Juego',
      'Baraja',
      'Cartas',
    ]}, {
    palabra: 'Sombrero',
    tabues: [
      'Gorra',
      'Casco',
      'Poner',
      'Cabeza',
      'Ala',
    ]}, {
    palabra: 'Chatarra',
    tabues: [
      'Autos',
      'Coche',
      'Hierro',
      'Basura',
      'Metal',
    ]}, {
    palabra: 'Valiente',
    tabues: [
      'Cobarde',
      'Miedo',
      'Defender',
      'Héroe',
      'Salvar',
    ]}, {
    palabra: 'Mochila',
    tabues: [
      'Bolso',
      'Hombro',
      'Caminata',
      'Llevar',
      'Espalda',
    ]}, {
    palabra: 'Mamadera',
    tabues: [
      'Leche',
      'Tetina',
      'Comer',
      'Bebe',
      'Chupar',
    ]}, {
    palabra: 'Aduana',
    tabues: [
      'Control',
      'Frontera',
      'Pasaporte',
      'Declarar',
      'Contrabando',
    ]}, {
    palabra: 'Dolar',
    tabues: [
      'Verde',
      'Dinero',
      'Moneda',
      'EE UU',
      'Plata',
    ]}, {
    palabra: 'Playa',
    tabues: [
      'Arena',
      'Costa',
      'Verano',
      'Mar',
      'Olas',
    ]}, {
    palabra: 'Percha',
    tabues: [
      'Colgar',
      'Ropa',
      'Placard',
      'Arruga',
      'Vestido',
    ]}, {
    palabra: 'Intendente',
    tabues: [
      'Funcionario',
      'Ciudad',
      'Municipalidad',
      'Grosso',
      'Cargo',
    ]}, {
    palabra: 'Whisky',
    tabues: [
      'Licor',
      'Alcohol',
      'Tomar',
      'Caro',
      'Bebida',
    ]}, {
    palabra: 'Pirata',
    tabues: [
      'Calavera',
      'Abordaje',
      'Barcos',
      'Mar',
      'Pata',
    ]}, {
    palabra: 'Colonia',
    tabues: [
      'Desodorante',
      'Aroma',
      'Perfume',
      'Olor',
      'Fragancia',
    ]}, {
    palabra: 'Portero',
    tabues: [
      'Mantenimiento',
      'Encargado',
      'Edificio',
      'Basura',
      'Limpio',
    ]}, {
    palabra: 'Neon',
    tabues: [
      'Luces',
      'Negocios',
      'Tubos',
      'Publicidad',
      'Gas',
    ]}, {
    palabra: 'Brillante',
    tabues: [
      'Diamante',
      'Sol',
      'Luz',
      'Radiante',
      'Luminoso',
    ]}, {
    palabra: 'Antepasado',
    tabues: [
      'Árbol Genealógico',
      'Descendiente',
      'Familiar',
      'Abuelo',
      'Ascendiente',
    ]}, {
    palabra:
        'Bote de goma',
    tabues: [
      'Pileta',
      'Remos',
      'Agua',
      'Navegar',
      'Inflar',
    ]}, {
    palabra: 'Uña',
    tabues: [
      'Manicura',
      'Limar',
      'Dedo',
      'Esmalte',
      'Pintar',
    ]}, {
    palabra: 'Mariposa',
    tabues: [
      'Larva',
      'Volar',
      'Insecto',
      'Flores',
      'Alas',
    ]}, {
    palabra: 'Balanza',
    tabues: [
      'Pesar',
      'Platillo',
      'Kilos',
      'Farmacia',
      'Gramo',
    ]}, {
    palabra: 'Vidriera',
    tabues: [
      'Negocio',
      'Mirar',
      'Calle',
      'Galería',
      'Cristal',
    ]}, {
    palabra: 'Bruja',
    tabues: [
      'Escoba',
      'Fea',
      'Cuentos',
      'Mala',
      'Magia',
    ]}, {
    palabra: 'Ladrillo',
    tabues: [
      'Construir',
      'Casa',
      'Barro',
      'Edificio',
      'Obra',
    ]}, {
    palabra: 'Antena',
    tabues: [
      'TV',
      'Radio',
      'Captar',
      'Emisión',
      'Onda',
    ]}, {
    palabra: 'Tieso',
    tabues: [
      'Inmóvil',
      'Cadáver',
      'Rígido',
      'Tabla',
      'Duro',
    ]}, {
    palabra: 'Taxi',
    tabues: [
      'Reloj',
      'Ficha',
      'Coche',
      'Alquiler',
      'Amarillo',
    ]}, {
    palabra: 'Inyeccion',
    tabues: [
      'Jeringa',
      'Aguja',
      'Pinchar',
      'Cola',
      'Dolor',
    ]}, {
    palabra: 'Indice',
    tabues: [
      'Orden',
      'Libro',
      'Principio',
      'Paginas',
      'Final',
    ]}, {
    palabra: 'Afuera',
    tabues: [
      'Exterior',
      'Salida',
      'Ir',
      'Adentro',
      'Echar',
    ]}, {
    palabra: 'Globo',
    tabues: [
      'Aire',
      'Soplar',
      'Inflar',
      'Cumpleaños',
      'Boca',
    ]}, {
    palabra: 'Reventar',
    tabues: [
      'Explotar',
      'Globo',
      'Bomba',
      'Detonar',
      'Dinamita',
    ]}, {
    palabra: 'Cliente',
    tabues: [
      'Vendedor',
      'Pagar',
      'Comprar',
      'Razón',
      'Negocio',
    ]}, {
    palabra: 'Samurai',
    tabues: [
      'Soldado',
      'Espada',
      'Japón',
      'Antiguo',
      'Hara-Kiri',
    ]}, {
    palabra: 'Loro',
    tabues: [
      'Pájaro',
      'Hablar',
      'Plumas',
      'Verde',
      'Pirata',
    ]}, {
    palabra: 'Dracula',
    tabues: [
      'Conde',
      'Sangre',
      'Transilvania',
      'Colmillos',
      'Vampiro',
    ]}, {
    palabra: 'Bostezo',
    tabues: [
      'Boca',
      'Abrir',
      'Sueño',
      'Aburrimiento',
      'Contagioso',
    ]}, {
    palabra: 'Tetera',
    tabues: [
      'Infusión',
      'Calentar',
      'Pava',
      'Agua',
      'Preparar',
    ]}, {
    palabra: 'Indio',
    tabues: [
      'Plumas',
      'Tribu',
      'Carpa',
      'Flecha',
      'Pintura',
    ]}, {
    palabra: 'Tranvia',
    tabues: [
      'Trolebús',
      'Eléctrico',
      'Calle',
      'Vías',
      'Tren',
    ]}, {
    palabra: 'Singular',
    tabues: [
      'Plural',
      'Individual',
      'Uno',
      'Particular',
      'Solo',
    ]}, {
    palabra: 'Estornudo',
    tabues: [
      'Tos',
      'Resfrió',
      'Nariz',
      'Pañuelo',
      'Pimienta',
    ]}, {
    palabra: 'Depresion',
    tabues: [
      'Bajón',
      'Animo',
      'Contento',
      'Tristeza',
      'Mal',
    ]}, {
    palabra: 'Domicilio',
    tabues: [
      'Vivir',
      'Casa',
      'Calle',
      'Dirección',
      'Numero',
    ]}, {
    palabra: 'Propina',
    tabues: [
      'Mozo',
      'Acomodador',
      'Cine',
      'Dinero',
      'Asiento',
    ]}, {
    palabra: 'Nariz',
    tabues: [
      'Cara',
      'Tabique',
      'Oler',
      'Fosas',
      'Anteojos',
    ]}, {
    palabra: 'Pata',
    tabues: [
      'Pierna',
      'Animal',
      'Garra',
      'Palo',
      'Pisar',
    ]}, {
    palabra: 'Nota',
    tabues: [
      'Musical',
      'Canción',
      'Pentagrama',
      'Sonido',
      'Escala',
    ]}, {
    palabra: 'Ayer',
    tabues: [
      'Mañana',
      'Tiempo',
      'Antes',
      'Día',
      'Pasado',
    ]}, {
    palabra: 'Diamante',
    tabues: [
      'Duro',
      'Kilates',
      'Joyas',
      'Brillante',
      'Piedra',
    ]}, {
    palabra: 'Rio',
    tabues: [
      'Mar',
      'Pescar',
      'Navegar',
      'Corriente',
      'Agua',
    ]}, {
    palabra: 'Jarron',
    tabues: [
      'Flores',
      'Agua',
      'Adorno',
      'Porcelana',
      'Cristal',
    ]}, {
    palabra: 'Naufrago',
    tabues: [
      'Isla',
      'Barco',
      'Palmera',
      'Barba',
      'Botella',
    ]}, {
    palabra: 'Hombro',
    tabues: [
      'Cuerpo',
      'Espalda',
      'Brazo',
      'Parte',
      'Cuello',
    ]}, {
    palabra: 'Colmillo',
    tabues: [
      'Mordedura',
      'Diente',
      'Marfil',
      'Vampiro',
      'Elefante',
    ]}, {
    palabra: 'Trigo',
    tabues: [
      'Harina',
      'Grano',
      'Pan',
      'Cereal',
      'Espiga',
    ]}, {
    palabra: 'Ballena',
    tabues: [
      'Mar',
      'Animal',
      'Grande',
      'Surtidor',
      'Moby Dick',
    ]}, {
    palabra: 'Cabaret',
    tabues: [
      'Desnudarse',
      'Streap-Tease',
      'Bar',
      'Música',
      'Baile',
    ]}, {
    palabra: 'Fama',
    tabues: [
      'Reputación',
      'Artistas',
      'Celebridad',
      'Popular',
      'Conocido',
    ]}, {
    palabra: 'Rally',
    tabues: [
      'Carrera',
      'Auto',
      'Etapas',
      'Competencia',
      'Copiloto',
    ]}, {
    palabra: 'Pavo real',
    tabues: ['Pájaro',
      'Ave',
      'Pollo',
      'Plumas',
      'Cola',
    ]}, {
    palabra: 'Cocodrilo',
    tabues: [
      'Dientes',
      'Río',
      'Piel',
      'Animal',
      'Caimán',
    ]}, {
    palabra: 'Nudo',
    tabues: [
      'Corbata',
      'Marinero',
      'Atar',
      'Lazo',
      'Moño',
    ]}, {
    palabra: 'Guardaespalda',
    tabues: [
      'Matón',
      'Policía',
      'Detective',
      'Proteger',
      'Cuidar',
    ]}, {
    palabra: 'Cuarteto',
    tabues: [
      'Instrumentos',
      'Música',
      'Cantantes',
      'Conjunto',
      'Grupo',
    ]}, {
    palabra: 'Nuez',
    tabues: [
      'Fruta',
      'Árbol',
      'Navidad',
      'Almendra',
      'Avellana',
    ]}, {
    palabra: 'Diario',
    tabues: [
      'Periódico',
      'Matutino',
      'Vespertino',
      'Quiosco',
      'Canillita',
    ]}, {
    palabra: 'Cafe',
    tabues: [
      'Taza',
      'Grano',
      'Moler',
      'Negro',
      'Filtro',
    ]}, {
    palabra: 'Polen',
    tabues: [
      'Flores',
      'Abeja',
      'Mariposa',
      'Planta',
      'Polvo',
    ]}, {
    palabra: 'Lluvia',
    tabues: [
      'Agua',
      'Caer',
      'Paraguas',
      'Tiempo',
      'Mojar',
    ]}, {
    palabra: 'Mago',
    tabues: [
      'Sombrero',
      'Paloma',
      'Truco',
      'Desaparecer',
      'Varita',
    ]}, {
    palabra: 'Ateo',
    tabues: [
      'Dios',
      'Creer',
      'Religión',
      'Vida',
      'Muerte',
    ]}, {
    palabra: 'Carilina',
    tabues: [
      'Nariz',
      'Papel',
      'Descartable',
      'Pañuelo',
      'Hojas',
    ]}, {
    palabra: 'Telegrama',
    tabues: [
      'Mensaje',
      'Correo',
      'Carta',
      'Urgente',
      'Morse',
    ]}, {
    palabra: 'Profesor',
    tabues: [
      'Enseñar',
      'Universidad',
      'Colegio',
      'Facultad',
      'Secundaria',
    ]}, {
    palabra: 'Jazz',
    tabues: [
      'Música',
      'New Orleans',
      'Negro',
      'Trompeta',
      'Piano',
    ]}, {
    palabra: 'Ronald Reagan',
    tabues: ['Bush',
      'Actor',
      'Político',
      'Presidente',
      'Estados Unidos',
    ]}, {
    palabra: 'Jarabe',
    tabues:[
      'Liquido',
      'Espeso',
      'Cuchara',
      'Frasco',
      'Tos',
    ]},{
    palabra: 'Dentadura',
    tabues: [
      'POSTIZA',
      'Boca',
      'Corega',
      'Puente',
      'Artificial',
      'Muelas',
    ]},{
    palabra: 'Espantapajaros',
    tabues: [
      'Asustar',
      'Campo',
      'Aves',
      'Maizal',
      '}, Proteger',
    ]},{
    palabra: 'Dedo',
    tabues: [
      'Mano',
      'Uñas',
      'Nudillos',
      'Anillo',
      'Puño',
    ]}, {
    palabra: 'Lapida',
    tabues: [
      'Piedra',
      'Cementerio',
      'Epitafio',
      'Tumba',
      'Sepultura',
    ]}, {
    palabra: 'Modista',
    tabues: [
      'Coser',
      'Vestido',
      'Mujer',
      'Sastre',
      'Probar',
    ]}, {
    palabra: 'Martir',
    tabues: [
      'Santo',
      'Muerte',
      'Religión',
      'Sacrificio',
      'Sufrir',
    ]}, {
    palabra: 'Dinosaurio',
    tabues: [
      'Prehistórico',
      'Grande',
      'Gigante',
      'Reptil',
      'Antigüedad',
    ]}, {
    palabra: 'Gimnasia',
    tabues: [
      'Ejercicio',
      'Pesas',
      'Aparatos',
      'Deporte',
      'Aerobic',
    ]}, {
    palabra: 'Puerta',
    tabues: [
      'Entrada',
      'Cerradura',
      'Llave',
      'Timbre',
      'Casa',
    ]}, {
    palabra: 'Puente',
    tabues: [
      'Cruzar',
      'Río',
      'Levadizo',
      'Colgante',
      'Sobre',
    ]}, {
    palabra: 'Chocolate',
    tabues: [
      'Comer',
      'Bombón',
      'Dulce',
      'Cacao',
      'Alfajor',
    ]}, {
    palabra: 'Piraña',
    tabues: [
      'Morder',
      'Comer',
      'Pez',
      'Diente',
      'Río',
    ]}, {
    palabra: 'Abanico',
    tabues: [
      'España',
      'Aire',
      'Mujer',
      'Plegable',
      'Calor',
    ]}, {
    palabra: 'Ametralladora',
    tabues: [
      'Arma',
      'Automático',
      'Disparar',
      'Balas',
      'Gatillo',
    ]}, {
    palabra: 'Mensajero',
    tabues: [
      'Llevar',
      'Telegrama',
      'Carta',
      'Paquetes',
      'Moto',
    ]}, {
    palabra: 'Desfile',
    tabues: [
      'Modas',
      'Pasar',
      '9 de Julio',
      'Militar',
      'Marcha',
    ]}, {
    palabra: 'Minuto',
    tabues: [
      'Agujas',
      'Reloj',
      'Tiempo',
      'Segundos',
      'Horas',
    ]}, {
    palabra: 'Tarde',
    tabues: [
      'Mañana',
      'Mediodía',
      'Horas',
      'PM',
      'Siesta',
    ]}, {
    palabra: 'Horoscopo',
    tabues: [
      'Astrología',
      'Doce',
      'Zodiaco',
      'Signos',
      'Futuro',
    ]}, {
    palabra: 'Amigdalas',
    tabues: [
      'Glándulas',
      'Garganta',
      'Inflamar',
      'Operación',
      'Niño',
    ]}, {
    palabra: 'Insulto',
    tabues: [
      'Ofensa',
      'Palabras',
      'Gritar',
      'Enojado',
      'Decir',
    ]}, {
    palabra: 'Loteria',
    tabues: [
      'Billete',
      'Números',
      'Bolillero',
      'Sorteo',
      'Juego',
    ]}, {
    palabra: 'Autocine',
    tabues: [
      'Película',
      'Coche',
      'Estacionar',
      'Aire Libre',
      'Mirar',
    ]}, {
    palabra: 'Asociacion',
    tabues: [
      'Club',
      'Grupo',
      'Organización',
      'Sociedad',
      'Compañía',
    ]}, {
    palabra: 'Ancla',
    tabues: [
      'Hierro',
      'Clavar',
      'Puntas',
      'Agua',
      'Barco',
    ]}, {
    palabra: 'Dados',
    tabues: [
      'Generala',
      'Tirar',
      'Juego',
      'Cubo',
      'Caras',
    ]}, {palabra: 'Aerolineas Argentinas',
    tabues: [
      'Ezeiza',
      'Aviones',
      'Volar',
      'Iberia',
      'Compañía'
    ]}, {

    palabra: 'Fantasia',
    tabues: [
      'Imaginación',
      'Pensamiento',
      'Ilusión',
      'Deseo',
      '}, Sueño',
    ]},{
    palabra: 'Aguja',
    tabues: [
      'Pajar',
      'Coser',
      'Alfiler',
      'Costura',
      'Hilo',
    ]}, {
    palabra: 'Trineo',
    tabues: [
      'Esquíes',
      'Patinar',
      'Nieve',
      'Perros',
      'Hielo',
    ]}, {
    palabra: 'Espuma',
    tabues: [
      'Burbujas',
      'Cerveza',
      'Lavado',
      'Olas',
      'Jabón',
    ]}, {
    palabra: 'Alfabeto',
    tabues: [
      'Vocales',
      'Consonantes',
      'Leer',
      'Abecedario',
      'Letras',
    ]}, {
    palabra: 'Naturaleza',
    tabues: [
      'Aire',
      'Verde',
      'Animales',
      'Montaña',
      'Árboles',
    ]}, {
    palabra: 'Abuelo',
    tabues: [
      'Nieto',
      'Padre',
      'Viejo',
      'Jubilado',
      'Anciano',
    ]}, {
    palabra: 'Pariente',
    tabues: [
      'Abuelos',
      'Padres',
      'Tíos',
      'Familiar',
      'Cónyuge',
    ]}, {
    palabra: 'Osram',
    tabues: [
      'Luz',
      'Marca',
      'Lamparita',
      'Electricidad',
      'Philips',
    ]}, {
    palabra: 'Escarapela',
    tabues: [
      'Azul',
      'Blanca',
      'Argentina',
      'Solapa',
      'Redonda',
    ]}, {
    palabra: 'Medianoche',
    tabues: [
      'Cenicienta',
      'Mediodía',
      'Final',
      'Hora 24',
      'Doce en Punto',
    ]}, {
    palabra: 'Helado',
    tabues: [
      'Frío',
      'Crema',
      'Palito',
      'Cucurucho',
      'Bombón',
    ]}, {
    palabra: 'Espuelas',
    tabues: [
      'Jinete',
      'Montar',
      'Caballo',
      'Metal',
      'Puntas',
    ]}, {
    palabra: 'Agujero',
    tabues: [
      'Pozo',
      'Hueco',
      'Orificio',
      'Hoyo',
      'Colador',
    ]}, {
    palabra: 'Escamas',
    tabues: [
      'Reptiles',
      'Placas',
      'Piel',
      'Cubrir',
      'Peces',
    ]}, {
    palabra: 'Voley',
    tabues: [
      'Pelota',
      'Juego',
      'Remate',
      'Saque',
      'Red',
    ]}, {
    palabra: 'Secretaria',
    tabues: [
      'Ayudante',
      'Ejecutivo',
      'Oficina',
      'Jefe',
      'Agenda',
    ]}, {
    palabra: 'Cenicero',
    tabues: [
      'Cigarrillo',
      'Colilla',
      'Fumar',
      'Fósforo',
      'Habano',
    ]}, {
    palabra: 'Amnesia',
    tabues: [
      'Recuerdos',
      'Memoria',
      'Acordarse',
      'Cabeza',
      'Olvidarse',
    ]}, {
    palabra: 'Caspa',
    tabues: [
      'Cuero Cabelludo',
      'Shampoo',
      'Pelo',
      'Tener',
      'Cabeza',
    ]}, {
    palabra: 'Restaurante',
    tabues: [
      'Mozos',
      'Mesas',
      'Comer',
      'Carta',
      'Servir',
    ]}, {
    palabra: 'Grasa',
    tabues: [
      'Aceite',
      'Lubricante',
      'Gordo',
      'Freír',
      'Colesterol',
    ]}, {
    palabra: 'Rinoceronte',
    tabues: [
      'Cuerno',
      'Animal',
      'África',
      'Mamífero',
      'Salvaje',
    ]}, {
    palabra: 'Tatuaje',
    tabues: [
      'Aguja',
      'Cuerpo',
      'Dibujo',
      'Piel',
      'Tinta',
    ]}, {
    palabra: 'Dibujo',
    tabues: [
      'Lápiz',
      'Pintar',
      'Garabato',
      'Papel',
      'Retrato',
    ]}, {
    palabra: 'Salmon',
    tabues: [
      'Río',
      'Rosado',
      'Trucha',
      'Ahumado',
      'Pez',
    ]}, {
    palabra: 'Jorobado',
    tabues: [
      'Encorvado',
      'Espalda',
      'Deforme',
      'Giba',
      'Notre Dame',
    ]}, {
    palabra: 'Anana',
    tabues: [
      'Fruta',
      'Rodajas',
      'Piña',
      'Brasil',
      'Comer',
    ]}, {
    palabra: 'Baño',
    tabues: [
      'Espejo',
      'Toilet',
      'Ducha',
      'Lavarse',
      'Inodoro',
    ]}, {
    palabra: 'Polo',
    tabues: [
      'Pelota',
      'Juego',
      'Deporte',
      'Caballo',
      'Jinete',
    ]}, {
    palabra: 'Remolacha',
    tabues: [
      'Comida',
      'Tubérculo',
      'Cocinar',
      'Morada',
      'Azúcar',
    ]}, {
    palabra: 'Tortuga',
    tabues: [
      'Animal',
      'Manuelita',
      'Lenta',
      'Caparazón',
      'M . Elena Walsh',
    ]}, {
    palabra: 'Crudo',
    tabues: [
      'Cocinar',
      'Fuego',
      'Cocido',
      'Comida',
      'Carne',
    ]}, {
    palabra: 'Terraza',
    tabues: [
      'Arriba',
      'Plantas',
      'Sol',
      'Techo',
      'Ropa',
    ]}, {
    palabra: 'Ensalada',
    tabues: [
      'Comida',
      'Fría',
      'Lechuga',
      'Mixta',
      'Tomate',
    ]}, {
    palabra: 'Paciente',
    tabues: [
      'Hospital',
      'Esperar',
      'Curarse',
      'Doctor',
      'Enfermo',
    ]}, {
    palabra: 'Bomberos',
    tabues: [
      'Incendio',
      'Apagar',
      'Fuego',
      'Sirena',
      'Mangueras',
    ]}, {
    palabra: 'Pararrayos',
    tabues: [
      'Tormenta',
      'Relámpago',
      'Eléctrico',
      'Protección',
      'Techo',
    ]}, {
    palabra: 'Cobarde',
    tabues: [
      'Valor',
      'Atreverse',
      'Miedo',
      'Enfrentar',
      'Defenderse',
    ]}, {
    palabra: 'Toldo',
    tabues: [
      'Sol',
      'Lluvia',
      'Balcón',
      'Tela',
      'Protección',
    ]},
  {palabra: 'Esposas',
    tabues: [
      'Arresto',
      'Policía',
      'Mano',
      'Preso',
      'Muñeca',
    ]
  },{
    palabra: 'Risa',
    tabues: [
      'Ridículo',
      'Cómico',
      'Carcajada',
      'Chiste',
      'Broma',
    ]
  },{
    palabra: 'Cenizas',
    tabues: [
      'Fuego',
      'Fumar',
      'Polvo',
      'Quemar',
      'Cigarrillo',
    ]
  },{
    palabra: 'Botiquin',
    tabues: [
      'Baño',
      'Espejo',
      'Remedios',
      'Guardar',
      'Armario',
    ]
  },{
    palabra: 'Antifaz',
    tabues: [
      'Ojos',
      'Tapar',
      'Mascara',
      'Carnaval',
      'Cara',
    ]
  },{
    palabra: 'Pasaporte',
    tabues: [
      'Documento',
      'Extranjero',
      'Viajar',
      'Aduana',
      'Visa',
    ]
  }, {
    palabra: 'Radiador',
    tabues: [
      'Anticongelante',
      'Enfriar',
      'Coche',
      'Agua',
      'Motor',
    ]
  }, {
    palabra: 'Pinocho',
    tabues: [
      'Mentira',
      'Nariz',
      'Gepetto',
      'Muñeco',
      'Cuento'
    ]
  }, {
    palabra: 'Sueño',
    tabues: [
      'Dormir',
      'Cama',
      'Noche',
      'Soñar',
      'Roncar'
    ]
  },
  {
    palabra: 'Angel',
    tabues: [
      'Paraíso',
      'Cielo',
      'Diablo',
      'Demonio',
      'Alas'
    ]
  },
  {
    palabra: 'Corpiño',
    tabues: [
      'Mujer',
      'Pechos',
      'Sostén',
      'Ropa',
      'Bombacha'
    ]
  },
  {
    palabra: 'Cine',
    tabues: [
      'Película',
      'Pantalla',
      'Filmar',
      'Proyectar',
      'Cámara'
    ]
  },
  {
    palabra: 'Nido',
    tabues: [
      'Pájaro',
      'Pichones',
      'Huevos',
      'Casa',
      'Árbol'
    ]
  },
  {
    palabra: 'Bandoneón',
    tabues: [
      'Acordeón',
      'Música',
      'Instrumento',
      'Tango',
      'Piazzola'
    ]
  },
  {
    palabra: 'Corpiño',
    tabues: [
      'Mujer',
      'Pechos',
      'Sostén',
      'Ropa',
      'Bombacha'
    ]
  },
  {
    palabra: 'Futbol',
    tabues: [
      'Pelota',
      'Deporte',
      'Maradona',
      'Cancha',
      'Messi'
    ]
  },
  {
    palabra: 'Pictionary',
    tabues: [
      'Juego',
      'Dibujar',
      'Lapiz',
      'Tablero',
      'Marca'
    ]
  },
  {
    palabra: 'Guardapolvo',
    tabues: [
      'Blanco',
      'Escuela',
      'Primaria',
      'Maestra',
      'Alumno'
    ]
  },
  {
    palabra: 'Palmera',
    tabues: [
      'Datil',
      'Coco',
      'Arbol',
      'Mono',
      'Trópico'
    ]
  },
  {
    palabra: 'Navidad',
    tabues: [
      'Diciembre',
      'Papa Noel',
      'Villancicos',
      'Arbolito',
      'Nacimiento'
    ]
  },
  {
    palabra: 'Comer',
    tabues: [
      'Comida',
      'Boca',
      'Hambre',
      'Heladera',
      'Masticar'
    ]
  },
  {
    palabra: 'Mosquito',
    tabues: [
      'Picar',
      'Rascar',
      'Insecto',
      'Raid',
      'Espiral'
    ]
  },
  {
    palabra: 'Carga',
    tabues: [
      'Bultos',
      'Pesado',
      'Camión',
      'Barco',
      'Tren'
    ]
  },
  {
    palabra: 'Cuna',
    tabues: [
      'Bebé',
      'Dormir',
      'Canción',
      'Barras',
      'Muebles'
    ]
  },
  {
    palabra: 'Roncar',
    tabues: [
      'Noche',
      'Ruido',
      'Nariz',
      'Dormir',
      'Molestar'
    ]
  },
  {
    palabra: 'Micro escolar',
    tabues: [
      'Colegio',
      'Chicos',
      'Vehículo',
      'Niño',
      'Naranja'
    ]
  },
  {
    palabra: 'Tenis',
    tabues: [
      'Deporte',
      'Raqueta',
      'Cancha',
      'Red',
      'Pelota'
    ]
  },
  {
    palabra: 'Rua',
    tabues: [
      'Levantar',
      'Auto',
      'Avería',
      'Estacionamiento',
      'Auxilio',
    ],
  },{
    palabra: 'Lagrima',
    tabues: [
      'Ojos',
      'Llorar',
      'Agua',
      'Gotas',
      'Triste',
    ],
  },{
    palabra: 'Pais',
    tabues: [
      'Estado',
      'Nación',
      'Gobierno',
      'Frontera',
      'Bandera',
    ],
  },{
    palabra: 'Billiken',
    tabues: [
      'Anteojito',
      'Revista',
      'Infantil',
      'Quiosco',
      'Niños',
    ],
  },{
    palabra: 'Nube',
    tabues: [
      'Cielo',
      'Despejado',
      'Lluvia',
      'Sol',
      'Trueno',
    ],
  },{
    palabra: 'Convento',
    tabues: [
      'Iglesia',
      'Habito',
      'Religión',
      'Monja',
      'Cura',
    ],
  },{
    palabra: 'Carpa',
    tabues: [
      'Campamento',
      'Tienda',
      'Dormir',
      'Camping',
      'Circo',
    ],
  }, {
    palabra: 'Uniforme',
    tabues: [
      'Vestido',
      'Igual',
      'Colegio',
      'Ejercito',
      'Policía',
    ],
  },
  {palabra: 'Monja',
    tabues: [
      'Habito',
      'Religión',
      'Hermana',
      'Convento',
      'Novicia',
    ]
  }, {
    palabra: 'Pimpollo',
    tabues: [
      'Capullo',
      'Botón',
      'Flor',
      'Rosa',
      'Cerrado',
    ]
  }, {
    palabra: 'Lavarropas',
    tabues: [
      'Maquina',
      'Electrodoméstico',
      'Tambor',
      'Centrifugar',
      'Jabón',
    ]
  }, {
    palabra: 'Terremoto',
    tabues: [
      'Derrumbe',
      'Sismo',
      'Temblor',
      'Tierra',
      'Movimiento',
    ]
  }, {
    palabra: 'Dia',
    tabues: [
      'Noche',
      'Sol',
      'Horas',
      'Semana',
      'Despierto',
    ]
  },{
    palabra: 'Kremlin',
    tabues: [
      'Moscu',
      'URSS',
      'Palacio',
      'Rusia',
      'Plaza Roja'
    ]
  },{
    palabra: 'Reloj',
    tabues: [
      'Hora',
      'Tiempo',
      'Despertador',
      'Muñeca',
      'Agujas',
    ]

  },
  {
    palabra: 'Confucio',
    tabues: [
      'Filosofo',
      'Chino',
      'Proverbio',
      'Religión',
      'Sabio',
    ]
  }, {
    palabra: 'Incendio',
    tabues: [
      'Quemar',
      'Apagar',
      'Fuego',
      'Llama',
      'Bomberos',
    ]
  }, {
    palabra: 'Hipnotizar',
    tabues: [
      'Dormir',
      'Mirada',
      'Mago',
      'Despertar',
      'Sueño',
    ]
  }, {
    palabra: 'Quiosco',
    tabues: [
      'Golosinas',
      'Negocio',
      'Caramelos',
      'Cigarrillos',
      'Vender',
    ]
  }, {
    palabra: 'Suerte',
    tabues: [
      'Buena',
      'Yeta',
      'Amuleto',
      'Mala',
      'Culo',
    ]
  }, {
    palabra: 'Arquitecto',
    tabues: [
      'Obra',
      'Planos',
      'Dibujo',
      'Diseño',
      'Construcción',
    ]
  }, {
    palabra: 'Rosa',
    tabues: [
      'Espinas',
      'Flor',
      'Pantera',
      'Color',
      'Rojo',
    ]
  }, {
    palabra: 'Estomago',
    tabues: [
      'Panza',
      'Tripa',
      'Comida',
      'Cuerpo',
      'Digestión',
    ]
  }, {
    palabra: 'Plomero',
    tabues: [
      'Gotera',
      'Agua',
      'Caños',
      'Arreglar',
      'Canillas',
    ]
  }, {
    palabra: 'Museo',
    tabues: [
      'Arte',
      'Edificio',
      'Pinturas',
      'Exhibición',
      'Colecciones',
    ]
  }, {
    palabra: 'Polvo',
    tabues: [
      'Limpio',
      'Sucio',
      'Tierra',
      'Plumero',
      'Muebles',
    ]
  }, {
    palabra: 'Barro',
    tabues: [
      'Lluvia',
      'Tierra',
      'Lodo',
      'Agua',
      'Fango',
    ]
  }, {
    palabra: 'Pimienta',
    tabues: [
      'Cocina',
      'Picante',
      'Sabor',
      'Condimento',
      'Sal',
    ]
  }, {
    palabra: 'Cuchillo',
    tabues: [
      'Cuchara',
      'Tenedor',
      'Cortar',
      'Cubierto',
      'Afilado',
    ]
  }, {
    palabra: 'Manejar',
    tabues: [
      'Auto',
      'Volante',
      'Coche',
      'Conductor',
      'Vehiculo',
    ]
  }, {
    palabra: 'Cowboy',
    tabues: [
      'Pistola',
      'Sombrero',
      'Caballo',
      'Indios',
      'Oeste',
    ]
  }, {
    palabra: 'Cerdo',
    tabues: [
      'Animal',
      'Embutido',
      'Jamón',
      'Chancho',
      'Fiambre',
    ]
  }, {
    palabra: 'Poncho',
    tabues: [
      'Gaucho',
      'Cubrir',
      'Ropa',
      'Cabeza',
      'Capa',
    ]
  }, {
    palabra: 'Fecha',
    tabues: [
      'Mes',
      'Año',
      'Almanaque',
      'Día',
      'Calendario',
    ]
  }, {
    palabra: 'Arena',
    tabues: [
      'Playa',
      'Fina',
      'Piedra',
      'Rocas',
      'Erosión',
    ]
  }, {
    palabra: 'Futbol',
    tabues: [
      'Maradona',
      'Deporte',
      'Arco',
      'Gol',
      'Pelota',
    ]
  }, {
    palabra: 'Calendario',
    tabues: [
      'Mes',
      'Almanaque',
      'Fecha',
      'Días',
      'Año',
    ]
  }, {
    palabra: 'Albañil',
    tabues: [
      'Construcción',
      'Ladrillo',
      'Casa',
      'Obra',
      'Cemento',
    ]
  }, {
    palabra: 'Podio',
    tabues: [
      'Campeón',
      'Ganador',
      'Pedestal',
      'Triunfador',
      'Subir',
    ]
  }, {
    palabra: 'Dedal',
    tabues: [
      'Aguja',
      'Pinchar',
      'Metal',
      'Protección',
      'Coser',
    ]
  }, {
    palabra: 'Pescador',
    tabues: [
      'Pez',
      'Caña',
      'Anzuelo',
      'Carnada',
      'Lombriz',
    ]
  }, {
    palabra: 'Circulo',
    tabues: [
      'Anillo',
      'Redondo',
      'Compás',
      'Línea',
      'Curva',
    ]
  }, {
    palabra: 'Flan',
    tabues: [
      'Leche',
      'Molde',
      'Postre',
      'Huevos',
      'Caramelo',
    ]
  }, {
    palabra: 'Skate',
    tabues: [
      'Patineta',
      'Monopatín',
      'Cuatro',
      'Ruedas',
      'Tabla',
    ]
  }, {
    palabra: 'Gas',
    tabues: [
      'Estufa',
      'Cocinar',
      'Envasado',
      'Calefón',
      'Termotanque',
    ]
  }, {
    palabra: 'Izquierda',
    tabues: [
      'Lado',
      'Derecha',
      'Zurdo',
      'Comunista',
      'Dirección',
    ]
  }, {
    palabra: 'Camello',
    tabues: [
      'Animal',
      'Desierto',
      'Joroba',
      'Arena',
      'Dromedario',
    ]
  }, {
    palabra: 'Compact Disk',
    tabues: [
      'Escuchar',
      'Láser',
      'Canción',
      'Casette',
      'Música',

    ]
  },
  {palabra: 'Pochoclo',
    tabues: [
      'Maíz',
      'Dulce',
      'Salado',
      'Cine',
      'Blanco',
    ]
  }, {
    palabra: 'Carrefour',
    tabues: [
      'Supermercado',
      'Caja',
      'Carrito',
      'Comprar',
      'Góndolas',
    ]
  }, {
    palabra: 'Aluminio',
    tabues: [
      'Metal',
      'Cacerola',
      'Avión',
      'Acero',
      'Liviano',
    ]
  }, {
    palabra: 'Pollo',
    tabues: [
      'Ave',
      'Plumas',
      'Comer',
      'Gallina',
      'Pavo',
    ]
  }, {
    palabra: 'Muñeco',
    tabues: [
      'Niñas',
      'Bebote',
      'Juguete',
      'Mama',
      'Regalo',
    ]
  }, {
    palabra: 'Contrato',
    tabues: [
      'Papel',
      'Firmar',
      'Acuerdo',
      'Alquiler',
      'Escritorio',
    ]
  }, {
    palabra: 'Agenda',
    tabues: [
      'Abecedario',
      'Días',
      'Direcciones',
      'Teléfonos',
      'Morgan',
    ]
  }, {
    palabra: 'Farmacia',
    tabues: [
      'Medico',
      'Inyección',
      'Remedios',
      'Receta',
      'Turno',
    ]
  },

  {
    palabra: 'Carne',
    tabues: [
      'Vaca',
      'Asado',
      'Comer',
      'Milanesa',
      'Hamburguesa',
    ]
  },
  {
    palabra: 'Estacion',
    tabues: [
      'Terminal',
      'Tren',
      'Parada',
      'Anden',
      'Bonetería',
    ]
  },
  {
    palabra: 'Cosquillas',
    tabues:
        [
          'Dedos',
          'Hacer',
          'Pies',
          'Sensación',
          'Risa',
        ]
  },
  {
    palabra: 'Fuego',
    tabues:
        [
          'Fósforo',
          'Llamas',
          'Hoguera',
          'Quemar',
          'Leña',
        ]
  },
  {
    palabra: 'Idioma',
    tabues: [
      'Lengua',
      'País',
      'Diccionario',
      'Traducir',
      'Estudiar',
    ]
  },
  {
    palabra: 'Oficial de policia',
    tabues: [
      'Esposas',
      'Agente',
      'Patrullero',
      'Comisaría',
      'Arrestar',
    ]
  },
  {
    palabra: 'Herida',
    tabues: [
      'Sangre',
      'Corte',
      'Curita',
      'Coser',
      'Puntos',
    ]
  },
  {
    palabra: 'Arroz',
    tabues: [
      'Cereal',
      'Comida',
      'Grano',
      'Chino',
      'Integral',
    ] },
  {
    palabra: 'Humor',

    tabues: [
      'Alegría',
      'Animo',
      'Broma',
      'Risa',
      'Comedia',
    ] },
  {
    palabra: 'Levadura',
    tabues: [
      'Masa',
      'Pan',
      'Harina',
      'Cocinar',
      'Royal',
    ] },
  {
    palabra: 'Costillas',
    tabues: [
      'Esqueleto',
      'Espalda',
      'Huesos',
      'Pecho',
      'Cuerpo',
    ] },
  {
    palabra: 'Hoja',
    tabues: [
      'Verde',
      'Caer',
      'Árbol',
      'Planta',
      'Rama',
    ] },
  {
    palabra: 'Telefono',
    tabues: [
      'PUBLICO',
      'Llamar',
      'Calle',
      'Hablar',
      'Cospeles',
    ] },
  'Fichas',
  {
    palabra: 'Basquet',
    tabues: [
      'Deporte',
      'Pelota',
      'Equipo',
      'Aro',
      'Cancha',
    ] },
  {
    palabra: 'Pizza',
    tabues: [
      'Napolitana',
      'Mozzarella',
      'Queso',
      'Faina',
      'Fugaza',
    ] },
  {
    palabra: 'Algodón',
    tabues: [
      'Cura',
      'Sangre',
      'Herida',
      'Rama',
      'Farmacia',
    ] },
  {
    palabra: 'Recreo',
    tabues: [
      'Patio',
      'Escuela',
      'Jugar',
      'Campana',
      'Tiempo',
    ] },
  {
    palabra: 'Ostra',
    tabues: [
      'Perla',
      'Mar',
      'Bivalvo',
      'Marisco',
      'Comer',
    ] },
  {
    palabra: 'Anchoa',
    tabues: [
      'Sardina',
      'Pescado',
      'Lata',
      'Comida',
      'Salado',
    ] },
  {
    palabra: 'Fantasma',
    tabues: [
      'Sabana',
      'Miedo',
      'Cadenas',
      'Castillo',
      'Espíritu',
    ] },
  {
    palabra: 'Gol',
    tabues: [
      'Pelota',
      'Hacer',
      'Puntuación',
      'Futbol',
      'Arco',
    ] },
  {
    palabra: 'Cuadro',
    tabues: [
      'Museo',
      'Pintor',
      'Óleo',
      'Caballete',
      'Tela',
    ] },
  {
    palabra: 'Circo',
    tabues: [
      'Pista',
      'Carpa',
      'Payasos',
      'Trapecista',
      'Domador',
    ] },
  {
    palabra: 'Pintar',
    tabues: [
      'Artista',
      'Cuadro',
      'Colores',
      'Pincel',
      'Pared',
    ] },
  {
    palabra: 'Hamster',
    tabues: [
      'Animal',
      'Jaula',
      'Mascota',
      'Rata',
      'Roedor',
    ] },
  {    palabra: 'Noche',
    tabues: ['Día',
      'Oscuridad',
      'Luna',
      'Estrellas',
      'Sol',
    ]
  }, {palabra: 'Colchon',
    tabues: ['Cama',
      'Almohada',
      'Acostarse',
      'Sabanas',
      'Dormir',
    ]
  }, {palabra: 'Sala de espera',
    tabues: ['Consultorio',
      'Revistas',
      'Paciente',
      'Medico',
      'Asientos',
    ]
  }, {palabra: 'Fotografia',
    tabues: ['Revelar',
      'Rollo',
      'Film',
      'Álbum',
      'Cámara',
    ]
  }, {palabra: 'China',
    tabues: ['Oriental',
      'Amarillo',
      'País',
      'Asia',
      'Muralla',
    ]
  }, {palabra: 'Espia',
    tabues: ['CIA',
      'Side',
      'Traidor',
      'Secreto',
      'James Bond',
    ]
  }, {palabra: 'Brujula',
    tabues: ['Orientarse',
      'Norte',
      'Aguja',
      'Imantada',
      'Cardinales',
    ]
  }, {palabra: 'Rimmel',
    tabues: ['Ojos',
      'Maquillaje',
      'Cepillo',
      'Cosmético',
      'Pestaña',
    ]
  }, {palabra: 'Calefaccion',
    tabues: ['Invierno',
      'Estufa',
      'Aire',
      'Caldera',
      'Frío',
    ]
  }, {palabra: 'Girasol',
    tabues: ['Planta',
      'Semillas',
      'Aceite',
      'Flor',
      'Amarillo',
    ]
  }, {palabra: 'Nashua',
    tabues: ['Japonesa',
      'Fotocopiadora',
      'Marca',
      'Librería',
      'Maquina',
    ]
  }, {palabra: 'Granero',
    tabues: ['Trigo',
      'Edificio',
      'Silo',
      'Cereales',
      'Campo',
    ]
  }, {palabra: 'Lentes de contacto',
    tabues: ['Duras',
      'Blandas',
      'Anteojos',
      'Colores',
      'Vista',
    ]
  }, {palabra: 'Bebida',
    tabues: ['Liquido',
      'Tomar',
      'Agua',
      'Sed',
      'Brindar',
    ]
  }, {palabra: 'Ciudad',
    tabues: ['Municipio',
      'Capital',
      'Población',
      'Edificios',
      'Intendente',
    ]
  }, {palabra: 'Pelota',
    tabues: ['Balón',
      'Redonda',
      'Futbol',
      'Bola',
      'Patear',
    ]
  }, {palabra: 'Dinero',
    tabues: ['Comprar',
      'Plata',
      'Moneda',
      'Billetes',
      'Guita',
    ]
  }, {palabra: 'Botella',
    tabues: ['Tapón',
      'Envase',
      'Recipiente',
      'Vidrio',
      'Frasco',
    ]
  }, {palabra: 'Artista',
    tabues: ['Pintor',
      'Escultor',
      'Actor',
      'Fama',
      'Premio',
    ]
  }, {palabra: 'Diablo',
    tabues: ['Lucifer',
      'Ángel',
      'Demonio',
      'Infierno',
      'Satanás',
    ]
  }, {palabra: 'Pañuelo',
    tabues: ['Nariz',
      'Sonarse',
      'Tela',
      'Mocos',
      'Resfrió',
    ]
  }, {palabra: 'Cupido',
    tabues: ['Arco',
      'Flechazo',
      'Amor',
      'Dios',
      'Corazón',
    ]
  }, {palabra: 'Azulejo',
    tabues: ['Cerámica',
      'Pared',
      'Baño',
      'Cocina',
      'Decoración',
    ]
  }, {palabra: 'Nieve',
    tabues: ['Blanca',
      'Agua',
      'Invierno',
      'Esquiar',
      'Frío',
    ]
  }, {palabra: 'Manzana',
    tabues: ['Comer',
      'Sidra',
      'Verde',
      'Rojo',
      'Fruta',
    ]
  }, {palabra: 'Telefono',
    tabues: ['Numero',
      'Llamar',
      'Movicom',
      'Tomo',
      'Ocupado',
    ]
  }, {palabra: 'Eructo',
    tabues: ['Ruido',
      'Bebe',
      'Comer',
      'Boca',
      'Provechito',
    ]
  }, {palabra: 'Estribos',
    tabues: ['Montura',
      'Ensillar',
      'Pies',
      'Espuelas',
      'Caballo',
    ]
  }, {palabra: 'Caballo',
    tabues: ['Estribos',
      'Ensillar',
      'Jinete',
      'Montar',
      'Carrera',
    ]
  }, {palabra: 'Boleadoras',
    tabues: ['Cazar',
      'Caballo',
      'Lanzar',
      'Indios',
      'Avestruz',
    ]
  }, {palabra: 'Parquimetro',
    tabues: ['Ficha',
      'Coche',
      'Estacionar',
      'Tiempo',
      'Reloj',
    ]
  }, {palabra: 'Edad',
    tabues: ['Años',
      'Vida',
      'Nacer',
      'Fecha',
      'Tiempo',
    ]
  }, {palabra: 'Surf',
    tabues: ['Playa',
      'Tabla',
      'Mar',
      'Olas',
      'Equilibrio',
    ]
  }, 'COLUMNA',
  {    palabra: 'Vertebral',
    tabues: ['Esqueleto',
      'Cuerpo',
      'Costillas',
      'Huesos',
      'Sostener',
    ]
  }, {palabra: 'Gorila',
    tabues: ['Mono',
      'Chimpance',
      'Orangutan',
      'King kong',
      'Zoológico',
    ]
  }, {palabra: 'Bateria',
    tabues: ['Platillos',
      'Instrumento',
      'Música',
      'Ritmo',
      'Bombo',
    ]
  }, {palabra: 'Piramide',
    tabues: ['Tumba',
      'Momia',
      'Egipto',
      'Keops',
      'Faraón',
    ]
  }, {palabra: 'Pronostico',
    tabues: ['Predicción',
      'Nublado',
      'Lluvia',
      'Temperatura',
      'Tiempo',
    ]
  }, {palabra: 'Anden',
    tabues: ['Tren',
      'Estación',
      'Esperar',
      'Subir',
      'Bajar',
    ]},
  {palabra: 'Cirujano',
    tabues: ['Hospital',
      'Anestesia',
      'Operación',
      'Doctor',
      'Escalpelo',
    ]},
  {palabra: 'Mate',
    tabues: ['Yerba',
      'Bombilla',
      'Agua',
      'Amargo',
      'Azúcar',
    ]},
  {palabra: 'Critico',
    tabues: ['Película',
      'Opinión',
      'Teatro',
      'Arte',
      'Comentar',
    ]},
  {palabra: 'Angulo',
    tabues: ['Recta',
      'Grado',
      'Geometría',
      'Polígono',
      'Lado',
    ]},
  {palabra: 'Geniol',
    tabues: ['Aspirina',
      'Dolor',
      'Farmacia',
      'Remedio',
      'Marca',
    ]},
  {palabra: 'Banco',
    tabues: ['Cheque',
      'Cuenta',
      'Cajero',
      'Dinero',
      'Cambio',
    ]},
  {palabra: 'Pan',
    tabues: ['Harina',
      'Levadura',
      'Galletitas',
      'Sándwich',
      'Tostadas',
    ]},
  {palabra: 'Fiesta',
    tabues: ['Cumpleaños',
      'Celebración',
      'Regalos',
      'Amigos',
      'Invitaciones',
    ]},
  {palabra: 'Firma',
    tabues: ['Nombre',
      'Apellido',
      'Rubrica',
      'Autógrafo',
      'Contrato',
    ]},
  {palabra: 'Sugus',
    tabues: ['Caramelo',
      'Masticar',
      'Quiosco',
      'Marca',
      'Golosina',
    ]},
  {palabra: 'Pijama',
    tabues: ['Dormir',
      'Cama',
      'Ponerse',
      'Ropa',
      'Camisón',
    ]},
  {palabra: 'Alfombra',
    tabues: ['Carpeta',
      'Kalpakian',
      'Piso',
      'Moqueta',
      'Suelo',
    ]},
  {palabra: 'Almohada',
    tabues: ['Cama',
      'Dormir',
      'Pluma',
      'Acostarse',
      'Cabeza',]},
  {
    palabra: 'Dulce',
    tabues: ['Chocolate',
      'Caramelo',
      'Sabor',
      'Galletitas',
      'Bombón',
    ]
  }, {  palabra: 'Luna',
    tabues: ['Noche',
      'Sol',
      'Satélite',
      'Espacio',
      'Estrellas',
    ]},
  {  palabra: 'Cicatriz',
    tabues: ['Señal',
      'Marca',
      'Herida',
      'Piel',
      'Huella',
    ]},
  {  palabra: 'Payaso',
    tabues: ['Circo',
      'Nariz',
      'Zapatones',
      'Bofetada',
      'Reír',
    ]},
  {  palabra: 'Repasador',
    tabues: ['Trapo',
      'Secar',
      'Platos',
      'Cocina',
      'Tela',
    ]},
  {  palabra: 'Albino',
    tabues: ['Blanco',
      'Ojos',
      'Cara',
      'Piel',
      'Color',
    ]},
  {  palabra: 'Gelatina',
    tabues: ['Flan',
      'Comer',
      'Postre',
      'Helado',
      'Transparente',
    ]},
  {  palabra: 'Oxigeno',
    tabues: ['Respirar',
      'Aire',
      'Atmosfera',
      'Hidrogeno',
      'Gas',
    ]},
  {  palabra: 'Huella',
    tabues: ['Digital',
      'Rastro',
      'Pisada',
      'Señal',
      'Mano',
    ]},
  {  palabra: 'Nafta',
    tabues: ['Combustible',
      'Surtidor',
      'Auto',
      'Tanque',
      'Estación',
    ]},
  {  palabra: 'Olimpico',
    tabues: ['Atletas',
      'Medallas',
      'Juegos',
      'Competición',
      'Países',
    ]},
  {  palabra: 'Medialuna',
    tabues: ['Panadería',
      'Factura',
      'Comer',
      'Grasa',
      'Croissant',
    ]},
  {  palabra: 'Inodoro',
    tabues: ['Caca',
      'Pis',
      'Baño',
      'Agua',
      'Sentarse',
    ]},
  {  palabra: 'Color',
    tabues: ['Amarillo',
      'Tojo',
      'Verde',
      'Azul',
      'Marrón',
    ]},
  {  palabra: 'Analisis',
    tabues: ['Sangre',
      'Orina',
      'Laboratorio',
      'Medico',
      'Enfermo',
    ]},
  {  palabra: 'Inocente',
    tabues: ['Absuelto',
      'Niño',
      'Culpable',
      'Ingenuo',
      'Veredicto',
    ]},
  {  palabra: 'Animal',
    tabues: ['Vivo',
      'Salvaje',
      'Domestico',
      'Veterinario',
      'Irracional',
    ]},
  {  palabra: 'Mercenario',
    tabues: ['Soldado',
      'Guerra',
      'Pago',
      'Extranjero',
      'Militar',
    ]},
  {  palabra: 'Corona',
    tabues: ['Rey',
      'Cabeza',
      'Oro',
      'Redonda',
      'Símbolo',
    ]}];

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      equipo: 0,
      puntos: [],
      running: false,
      carta: 0
    }
  }

  agregarEquipos(equipos){
    var arrayPuntos = this.state.puntos;

    equipos.forEach((equipo, index)=> {
      arrayPuntos[index] = {
        nombre: equipo,
        puntos: 0
      };
    });

    this.setState({puntos: arrayPuntos});
  };

  cambiarPuntos(equipoActual, puntosNuevos){
    var puntosActuales = this.state.puntos;
    puntosActuales[equipoActual].puntos = puntosNuevos;
    this.setState({puntos: puntosActuales});
  };

  timeSUp(){
    this.setState({running: false});
    var equipoSiguiente = this.state.equipo + 1;
    if (equipoSiguiente === this.state.puntos.length)
      equipoSiguiente = 0;
    this.setState({equipo: equipoSiguiente});
  }

  render(){
    const {classes} = this.props;
    const {running, puntos, carta, equipo } = this.state;

    return (
        <div className="App">
          {!puntos.length ? <Equipo agregarEquipos={(equipos) => this.agregarEquipos(equipos)}/> : ''}
          <Header nombre={puntos[equipo] ? puntos[equipo].nombre : ''} puntos={puntos[equipo] ? puntos[equipo].puntos : ''}/>
          <Tiempo minutes={0} seconds={10} running={running} tiempo={()=> this.timeSUp() }/>
          {running ?
              <Carta carta={palabras[carta]}/>
              :
              <Button variant="contained" color="secondary" className={classes.button} onClick={() => {
                this.setState({running: true});
                console.log(this.state);
              }}>
                Empezar
              </Button>
          }
          <Fab className={[classes.fab, classes.fabLeft]} color="primary" onClick={() => {
            if (running){
              this.setState({ carta: Math.floor(Math.random() * palabras.length)});
              this.cambiarPuntos(equipo, puntos[equipo].puntos + 1);
            }
          }}>
            <CheckIcon />
          </Fab>
          <Fab className={[classes.fab, classes.fabRight]} color="secondary" onClick={() => { if (running) this.setState({carta: Math.floor(Math.random() * palabras.length)}) }}>
            <ArrowForwardIcon />
          </Fab>
        </div>
    );
  }
}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);