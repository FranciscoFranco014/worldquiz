import Ciencia from '/assets/ciencia.webp';
import Deportes from '/assets/deportes.webp';
import Filosofia from '/assets/filosofía.webp';
import Geografia from '/assets/geografía.webp';
import Historia from '/assets/historia.webp';
import Literatura from '/assets/literatura.webp';
import Tecnologia from '/assets/tecnología.webp';
import Esports from '/assets/esports.webp'

export const imgs = [
	Ciencia,
	Deportes,
	Filosofia,
	Geografia,
	Historia,
	Literatura,
	Tecnologia,
	Esports,
];

export const categories = {
	historia: 'Historia', 
	literatura: 'Literatura',
	deportes: 'Deportes',
	ciencia: 'Ciencia',
	filosofia: 'Filosofía',
	tecnologia: 'Tecnología',
	geografia: 'Geografía',
	esports: 'Esports'
};

const {
	historia,
	tecnologia,
	literatura,
	deportes,
	ciencia,
	filosofia,
	geografia,
	esports,
} = categories;

export const questions = [
	{
		id: 1,
		difficulty: 'Fácil',
		question: '¿Qué evento inició la Primera Guerra Mundial?',
		category: historia,
		correct_answer:
			'El asesinato del Archiduque Franz Ferdinand de Austria',
		incorrect_answers: [
			'El hundimiento del Titanic',
			'La invasión de Polonia por Alemania',
			'La Revolución Francesa',
		],
	},
	{
		id: 2,
		difficulty: 'Fácil',
		question: '¿Quién es el autor de "Cien años de soledad"?        ',
		category: literatura,
		correct_answer: 'Gabriel García Márquez',
		incorrect_answers: [
			'Julio Cortázar',
			'Mario Vargas Llosa',
			'Pablo Neruda',
		],
	},
	{
		id: 3,
		difficulty: 'Fácil',
		question: '¿En qué deporte se utiliza un disco?',
		category: deportes,
		correct_answer: 'Hockey sobre hielo',
		incorrect_answers: ['Fútbol', 'Baloncesto', 'Béisbol'],
	},
	{
		id: 4,
		difficulty: 'Medio',
		question:
			"¿Qué sustancia es conocida como la 'molécula de la vida'?",
		category: ciencia,
		correct_answer: 'El ADN',
		incorrect_answers: ['La glucosa', 'La insulina', 'La proteína'],
	},
	{
		id: 5,
		difficulty: 'Difícil',
		question:
			'¿Quién es considerado el padre de la filosofía occidental?',
		category: filosofia,
		correct_answer: 'Sócrates',
		incorrect_answers: ['Aristóteles', 'Platón', 'Nietzsche'],
	},
	{
		id: 6,
		difficulty: 'Medio',
		question: '¿En qué año fue fundada la compañía Apple?',
		category: tecnologia,
		correct_answer: '1976',
		incorrect_answers: ['1984', '1991', '1967'],
	},
	{
		id: 7,
		difficulty: 'Fácil',
		question: '¿Cuál es el río más largo del mundo?',
		category: geografia,
		correct_answer: 'El Río Amazonas',
		incorrect_answers: [
			'El Río Nilo',
			'El Río Yangtze',
			'El Río Misisipi',
		],
	},
	{
		id: 8,
		difficulty: 'Medio',
		question: '¿Cuál es el océano más grande del mundo?',
		category: geografia,
		correct_answer: 'El Océano Pacífico',
		incorrect_answers: [
			'El Océano Atlántico',
			'El Océano Índico',
			'El Océano Ártico',
		],
	},
	{
		id: 9,
		difficulty: 'Difícil',
		question: '¿Cuál es la obra más famosa de William Shakespeare?',
		category: literatura,
		correct_answer: 'Hamlet',
		incorrect_answers: ['Romeo y Julieta', 'Macbeth', 'El Rey Lear'],
	},
	{
		id: 10,
		difficulty: 'Medio',
		question: '¿Qué es lo que se mide con la escala de Richter?',
		category: ciencia,
		correct_answer: 'La magnitud de los terremotos',
		incorrect_answers: [
			'La velocidad del sonido',
			'La intensidad de los huracanes',
			'La temperatura en grados Fahrenheit',
		],
	},
	{
		id: 11,
		difficulty: 'Fácil',
		question: '¿Qué país ganó el primer Mundial de Fútbol?',
		category: deportes,
		correct_answer: 'Uruguay',
		incorrect_answers: ['Brasil', 'Argentina', 'Alemania'],
	},
	{
		id: 12,
		difficulty: 'Medio',
		question: '¿Qué es el efecto invernadero?',
		category: ciencia,
		correct_answer:
			'Un fenómeno atmosférico que retiene el calor en la Tierra',
		incorrect_answers: [
			'Un tipo de casa de vidrio para plantas',
			'Un proceso químico para conservar alimentos',
			'Un tipo de sistema de calefacción para edificios',
		],
	},
	{
		id: 13,
		difficulty: 'Medio',
		question:
			'¿En qué año se celebraron los primeros Juegos Olímpicos modernos?',
		category: deportes,
		correct_answer: '1896',
		incorrect_answers: ['1900', '1924', '1936'],
	},
	{
		id: 14,
		difficulty: 'Fácil',
		question: '¿Cuál es el planeta más grande del sistema solar?',
		category: ciencia,
		correct_answer: 'Júpiter',
		incorrect_answers: ['Saturno', 'Neptuno', 'Urano'],
	},
	{
		id: 15,
		difficulty: 'Fácil',
		question: "¿Quién escribió la obra 'Don Quijote de la Mancha'?",
		category: literatura,
		correct_answer: 'Miguel de Cervantes',
		incorrect_answers: [
			'Federico García Lorca',
			'Gabriel García Márquez',
			'Pablo Neruda',
		],
	},
	{
		id: 16,
		difficulty: 'Medio',
		question:
			'¿Cuál es el elemento químico más abundante en la Tierra?',
		category: ciencia,
		correct_answer: 'Oxígeno',
		incorrect_answers: ['Nitrógeno', 'Hierro', 'Silicio'],
	},
	{
		id: 17,
		difficulty: 'Medio',
		question: '¿Cuál es el país más poblado del mundo?',
		category: geografia,
		correct_answer: 'China',
		incorrect_answers: ['India', 'Estados Unidos', 'Brasil'],
	},
	{
		id: 18,
		difficulty: 'Medio',
		question:
			'¿Quién es considerado el padre de la filosofía occidental?',
		category: filosofia,
		correct_answer: 'Sócrates',
		incorrect_answers: ['Platón', 'Aristóteles', 'Descartes'],
	},
	{
		id: 19,
		difficulty: 'Difícil',
		question: '¿Qué científico propuso la teoría del Big Bang?',
		category: ciencia,
		correct_answer: 'Georges Lemaître',
		incorrect_answers: [
			'Albert Einstein',
			'Stephen Hawking',
			'Isaac Newton',
		],
	},
	{
		id: 20,
		difficulty: 'Fácil',
		question: '¿Quién es el autor de la novela "El viejo y el mar"?',
		category: literatura,
		correct_answer: 'Ernest Hemingway',
		incorrect_answers: [
			'William Shakespeare',
			'J.K. Rowling',
			'F. Scott Fitzgerald',
		],
	},
	{
		id: 21,
		difficulty: 'Fácil',
		question: '¿Cuál es el órgano más grande del cuerpo humano?',
		category: ciencia,
		correct_answer: 'La piel',
		incorrect_answers: ['El hígado', 'El corazón', 'Los pulmones'],
	},
	{
		id: 22,
		difficulty: 'Medio',
		question: '¿Quién es el creador del sistema operativo Linux?',
		category: tecnologia,
		correct_answer: 'Linus Torvalds',
		incorrect_answers: [
			'Steve Jobs',
			'Bill Gates',
			'Mark Zuckerberg',
		],
	},
	{
		id: 23,
		difficulty: 'Medio',
		question: '¿En qué año terminó la Segunda Guerra Mundial?',
		category: historia,
		correct_answer: '1945',
		incorrect_answers: ['1939', '1941', '1943'],
	},
	{
		id: 24,
		difficulty: 'Fácil',
		question: '¿Cuál es el planeta más cercano al Sol?',
		category: ciencia,
		correct_answer: 'Mercurio',
		incorrect_answers: ['Venus', 'Marte', 'Júpiter'],
	},
	{
		id: 25,
		difficulty: 'Medio',
		question:
			"¿Qué escritor es conocido por haber escrito 'Cien años de soledad'?",
		category: literatura,
		correct_answer: 'Gabriel García Márquez',
		incorrect_answers: [
			'Jorge Luis Borges',
			'Pablo Neruda',
			'Julio Cortázar',
		],
	},
	{
		id: 26,
		difficulty: 'Difícil',
		question:
			'¿Qué país es el más grande en términos de superficie terrestre?',
		category: geografia,
		correct_answer: 'Rusia',
		incorrect_answers: ['Estados Unidos', 'China', 'Australia'],
	},
	{
		id: 27,
		difficulty: 'Medio',
		question: '¿Cuál es la capital de Canadá?',
		category: geografia,
		correct_answer: 'Ottawa',
		incorrect_answers: ['Toronto', 'Montreal', 'Vancouver'],
	},
	{
		id: 28,
		difficulty: 'Fácil',
		question: '¿Qué elemento químico tiene el símbolo H?',
		category: ciencia,
		correct_answer: 'Hidrógeno',
		incorrect_answers: ['Helio', 'Hierro', 'Hormigón'],
	},
	{
		id: 29,
		difficulty: 'Medio',
		question:
			'¿Qué jugador de fútbol ha ganado más Balones de Oro en la historia?',
		category: deportes,
		correct_answer: 'Lionel Messi',
		incorrect_answers: [
			'Cristiano Ronaldo',
			'Johan Cruyff',
			'Diego Maradona',
		],
	},
	{
		id: 30,
		difficulty: 'Fácil',
		question: '¿En qué año ocurrió la Revolución Francesa?',
		category: historia,
		correct_answer: '1789',
		incorrect_answers: ['1848', '1917', '1492'],
	},
	// -------------------
	{
		id: 31,
		difficulty: 'Fácil',
		category: tecnologia,
		question: '¿Qué significa la sigla HTML?',
		correct_answer: 'HyperText Markup Language',
		incorrect_answers: [
			'Hyperlinks and Text Markup Language',
			'Home Tool Markup Language',
			'Hyperlinking Text Markup Language',
		],
	},
	{
		id: 32,
		difficulty: 'Fácil',
		category: tecnologia,
		question: '¿Cuál es el navegador web más utilizado en el mundo?',
		correct_answer: 'Google Chrome',
		incorrect_answers: ['Safari', 'Firefox', 'Internet Explorer'],
	},
	{
		id: 33,
		difficulty: 'Fácil',
		category: tecnologia,
		question:
			'¿Qué lenguaje de programación es más utilizado para el desarrollo web?',
		correct_answer: 'JavaScript',
		incorrect_answers: ['Python', 'Java', 'C++'],
	},
	{
		id: 34,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un servidor web?',
		correct_answer:
			'Un programa que recibe y procesa solicitudes HTTP',
		incorrect_answers: [
			'Un programa que envía correos electrónicos',
			'Un programa que protege la privacidad de los usuarios en línea',
			'Un programa que realiza operaciones matemáticas complejas',
		],
	},
	{
		id: 35,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un ataque de phishing?',
		correct_answer:
			'Un intento de obtener información confidencial a través de un correo electrónico falso',
		incorrect_answers: [
			'Un virus que daña los archivos del ordenador',
			'Un tipo de ataque DDoS',
			'Un intento de secuestrar el tráfico de internet',
		],
	},
	{
		id: 36,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un archivo CSV?',
		correct_answer:
			'Un archivo de texto con valores separados por comas',
		incorrect_answers: [
			'Un archivo de audio comprimido',
			'Un archivo de imagen en formato vectorial',
			'Un archivo de vídeo de alta definición',
		],
	},
	{
		id: 37,
		difficulty: 'Difícil',
		category: tecnologia,
		question: '¿Qué es un algoritmo de cifrado asimétrico?',
		correct_answer:
			'Un método de cifrado que utiliza dos claves diferentes',
		incorrect_answers: [
			'Un método de cifrado que utiliza la misma clave para cifrar y descifrar',
			'Un método de cifrado que no utiliza claves',
			'Un método de cifrado que solo se utiliza en aplicaciones militares',
		],
	},
	{
		id: 38,
		difficulty: 'Difícil',
		category: tecnologia,
		question: '¿Qué es una red privada virtual (VPN)?',
		correct_answer:
			'Una conexión segura a una red privada a través de internet',
		incorrect_answers: [
			'Una red de computadoras en una organización',
			'Una red de computadoras conectadas a internet',
			'Una red de computadoras que solo utiliza tecnología inalámbrica',
		],
	},
	{
		id: 39,
		difficulty: 'Difícil',
		question: '¿En qué año se produjo la Guerra de los Cien Años?',
		category: historia,
		correct_answer: '1337',
		incorrect_answers: ['1066', '1415', '1642'],
	},
	{
		id: 40,
		difficulty: 'Fácil',
		question: '¿En qué año se produjo el ataque a Pearl Harbor?',
		category: historia,
		correct_answer: '1941',
		incorrect_answers: ['1939', '1942', '1945'],
	},
	{
		id: 41,
		difficulty: 'Medio',
		question: '¿Qué tratado dio fin a la Primera Guerra Mundial?',
		category: historia,
		correct_answer: 'Tratado de Versalles',
		incorrect_answers: [
			'Tratado de Tordesillas',
			'Tratado de Westfalia',
			'Tratado de Nankín',
		],
	},
	{
		id: 42,
		difficulty: 'Difícil',
		question:
			'¿Quién fue el último emperador de la Dinastía Qing en China?',
		category: historia,
		correct_answer: 'Puyi',
		incorrect_answers: ['Hongwu', 'Wuzong', 'Kangxi'],
	},
	{
		id: 43,
		difficulty: 'Fácil',
		question:
			'¿Cuál fue el nombre de la primera expedición de Cristóbal Colón?',
		category: historia,
		correct_answer: 'La Santa María',
		incorrect_answers: [
			'La Pinta',
			'La Niña',
			'La Santísima Trinidad',
		],
	},
	{
		id: 44,
		difficulty: 'Medio',
		question:
			'¿Cuál fue el primer país en enviar un objeto hecho por el hombre a la luna?',
		category: historia,
		correct_answer: 'Estados Unidos',
		incorrect_answers: ['Unión Soviética', 'China', 'Japón'],
	},
	{
		id: 45,
		difficulty: 'Difícil',
		question:
			'¿Cuál fue la primera ciudad en el mundo en tener una población de más de un millón de habitantes?',
		category: historia,
		correct_answer: 'Roma',
		incorrect_answers: ['Atenas', 'Babilonia', 'Nínive'],
	},
	{
		id: 46,
		difficulty: 'Fácil',
		question:
			'¿Quién fue el primer presidente de los Estados Unidos?',
		category: historia,
		correct_answer: 'George Washington',
		incorrect_answers: [
			'Thomas Jefferson',
			'Abraham Lincoln',
			'Franklin D. Roosevelt',
		],
	},
	{
		id: 47,
		difficulty: 'Medio',
		question: '¿Cuál fue la primera dinastía en gobernar en China?',
		category: historia,
		correct_answer: 'Xia',
		incorrect_answers: ['Han', 'Tang', 'Song'],
	},
	{
		id: 48,
		difficulty: 'Fácil',
		question: '¿Quién escribió la obra "Don Quijote de la Mancha"?',
		category: literatura,
		correct_answer: 'Miguel de Cervantes',
		incorrect_answers: [
			'Gabriel García Márquez',
			'Jorge Luis Borges',
			'Pablo Neruda',
		],
	},
	{
		id: 49,
		difficulty: 'Medio',
		question:
			'¿Cuál de las siguientes novelas es escrita por Gabriel García Márquez?',
		category: literatura,
		correct_answer: 'Cien años de soledad',
		incorrect_answers: [
			'Rayuela',
			'La ciudad y los perros',
			'La casa de los espíritus',
		],
	},
	{
		id: 50,
		difficulty: 'Difícil',
		question: '¿Quién escribió "La metamorfosis"?',
		category: literatura,
		correct_answer: 'Franz Kafka',
		incorrect_answers: [
			'Virginia Woolf',
			'James Joyce',
			'F. Scott Fitzgerald',
		],
	},
	{
		id: 51,
		difficulty: 'Fácil',
		question: '¿Quién escribió "El retrato de Dorian Gray"?',
		category: literatura,
		correct_answer: 'Oscar Wilde',
		incorrect_answers: [
			'Edgar Allan Poe',
			'Emily Bronte',
			'Charles Dickens',
		],
	},
	{
		id: 52,
		difficulty: 'Medio',
		question:
			'¿Cuál de las siguientes obras no fue escrita por William Shakespeare?',
		category: literatura,
		correct_answer: 'Moby Dick',
		incorrect_answers: ['Hamlet', 'Macbeth', 'Otelo'],
	},
	{
		id: 53,
		difficulty: 'Difícil',
		question:
			'¿Cuál de las siguientes obras de José Saramago recibió el Premio Nobel de Literatura?',
		category: literatura,
		correct_answer: 'Ensayo sobre la ceguera',
		incorrect_answers: [
			'La caverna',
			'El evangelio según Jesucristo',
			'Las intermitencias de la muerte',
		],
	},
	{
		id: 54,
		difficulty: 'Fácil',
		question:
			'¿Quién escribió la novela "El guardián entre el centeno"?',
		category: literatura,
		correct_answer: 'J.D. Salinger',
		incorrect_answers: [
			'F. Scott Fitzgerald',
			'Ernest Hemingway',
			'Tennessee Williams',
		],
	},
	{
		id: 55,
		difficulty: 'Difícil',
		question: '¿Cuál es el país más grande de África?',
		category: geografia,
		correct_answer: 'Argelia',
		incorrect_answers: [
			'Sudán',
			'Libia',
			'República Democrática del Congo',
		],
	},
	{
		id: 56,
		difficulty: 'Fácil',
		question: '¿Cuál es el país más grande del mundo?',
		category: geografia,
		correct_answer: 'Rusia',
		incorrect_answers: ['China', 'Estados Unidos', 'Canadá'],
	},
	{
		id: 57,
		difficulty: 'Medio',
		question: '¿En qué continente se encuentra el lago Baikal?',
		category: geografia,
		correct_answer: 'Asia',
		incorrect_answers: ['Europa', 'África', 'América del Sur'],
	},
	{
		id: 58,
		difficulty: 'Medio',
		question: '¿Cuál es el país más poblado del mundo?',
		category: geografia,
		correct_answer: 'China',
		incorrect_answers: ['India', 'Estados Unidos', 'Indonesia'],
	},
	{
		id: 59,
		difficulty: 'Difícil',
		question: '¿Cuál es la montaña más alta del mundo?',
		category: geografia,
		correct_answer: 'El Monte Everest',
		incorrect_answers: ['El K2', 'El Mont Blanc', 'El Aconcagua'],
	},
	{
		id: 60,
		difficulty: 'Difícil',
		question: '¿Cuál es el país más pequeño del mundo?',
		category: geografia,
		correct_answer: 'El Vaticano',
		incorrect_answers: ['Mónaco', 'Nauru', 'Tuvalu'],
	},
	{
		id: 61,
		difficulty: 'Medio',
		question: '¿Cuál es el país más extenso de África?',
		category: geografia,
		correct_answer: 'Argelia',
		incorrect_answers: ['Nigeria', 'Egipto', 'Sudáfrica'],
	},
	{
		id: 62,
		difficulty: 'Fácil',
		question: '¿Qué país ganó la Copa Mundial de la FIFA en 2018?',
		category: deportes,
		correct_answer: 'Francia',
		incorrect_answers: ['Alemania', 'Brasil', 'Argentina'],
	},
	{
		id: 63,
		difficulty: 'Fácil',
		question: '¿Qué deporte se juega en Wimbledon?',
		category: deportes,
		correct_answer: 'Tenis',
		incorrect_answers: ['Golf', 'Fútbol', 'Rugby'],
	},
	{
		id: 64,
		difficulty: 'Medio',
		question:
			'¿Cuántos puntos vale un touchdown en el fútbol americano?',
		category: deportes,
		correct_answer: '6',
		incorrect_answers: ['4', '7', '5'],
	},
	{
		id: 65,
		difficulty: 'Medio',
		question:
			'¿Cuál es el jugador de baloncesto con más anillos de campeonato en la NBA?',
		category: deportes,
		correct_answer: 'Bill Russell',
		incorrect_answers: [
			'Michael Jordan',
			'Kareem Abdul-Jabbar',
			'LeBron James',
		],
	},
	{
		id: 66,
		difficulty: 'Medio',
		question:
			'¿Cuál es el país de origen del futbolista Lionel Messi?',
		category: deportes,
		correct_answer: 'Argentina',
		incorrect_answers: ['Brasil', 'España', 'Portugal'],
	},
	{
		id: 67,
		difficulty: 'Difícil',
		question:
			'¿En qué año se celebraron los Juegos Olímpicos de Beijing?',
		category: deportes,
		correct_answer: '2008',
		incorrect_answers: ['2012', '2004', '2016'],
	},
	{
		id: 68,
		difficulty: 'Difícil',
		question:
			'¿Quién es el máximo goleador en la historia de la Liga Española?',
		category: deportes,
		correct_answer: 'Lionel Messi',
		incorrect_answers: [
			'Cristiano Ronaldo',
			'Telmo Zarra',
			'Hugo Sánchez',
		],
	},
	{
		id: 69,
		difficulty: 'Difícil',
		question: '¿En qué deporte se utiliza el término "smash"?',
		category: deportes,
		correct_answer: 'Bádminton',
		incorrect_answers: ['Voleibol', 'Tenis', 'Squash'],
	},
	{
		id: 70,
		category: filosofia,
		difficulty: 'Fácil',
		question: '¿Cuál es la obra más conocida de Platón?',
		correct_answer: 'La República',
		incorrect_answers: ['El Banquete', 'Timeo', 'Fedón'],
	},
	{
		id: 71,
		category: filosofia,
		difficulty: 'Medio',
		question:
			'¿Cuál es el concepto central de la filosofía de Descartes?',
		correct_answer: 'El cogito ergo sum',
		incorrect_answers: [
			'El empirismo',
			'El materialismo',
			'La fenomenología',
		],
	},
	{
		id: 72,
		category: filosofia,
		difficulty: 'Difícil',
		question: '¿Qué es la dialéctica en la filosofía de Hegel?',
		correct_answer:
			'El método para llegar a la verdad mediante la contradicción',
		incorrect_answers: [
			'La creación de un sistema filosófico',
			'La negación de la realidad',
			'El análisis de los procesos cognitivos',
		],
	},
	{
		id: 73,
		category: filosofia,
		difficulty: 'Medio',
		question: '¿Qué es el nihilismo en la filosofía?',
		correct_answer: 'La negación de todos los valores y creencias',
		incorrect_answers: [
			'La afirmación de la existencia de un ser superior',
			'La creencia en la reencarnación',
			'La negación de la existencia del mundo externo',
		],
	},
	{
		id: 74,
		category: filosofia,
		difficulty: 'Difícil',
		question:
			'¿Qué es la deconstrucción en la filosofía de Jacques Derrida?',
		correct_answer:
			'El análisis crítico de la relación entre los significados y los conceptos',
		incorrect_answers: [
			'La creación de nuevos conceptos a partir de la combinación de los antiguos',
			'La búsqueda de la verdad absoluta',
			'La negación de la existencia del lenguaje',
		],
	},
	{
		id: 75,
		category: filosofia,
		difficulty: 'Fácil',
		question: '¿Qué es la ética?',
		correct_answer:
			'La rama de la filosofía que estudia la moral y la conducta humana',
		incorrect_answers: [
			'La rama de la filosofía que estudia la lógica',
			'La rama de la filosofía que estudia la mente',
			'La rama de la filosofía que estudia el conocimiento',
		],
	},
	{
		id: 76,
		category: filosofia,
		difficulty: 'Medio',
		question:
			'¿Qué es el imperativo categórico en la filosofía de Kant?',
		correct_answer:
			'La regla moral que se debe seguir en cualquier situación',
		incorrect_answers: [
			'La creencia en la existencia de un Dios creador',
			'La negación de la libertad humana',
			'La afirmación de la existencia de una verdad absoluta',
		],
	},
	{
		id: 77,
		difficulty: 'Fácil',
		question: '¿Quién fue el autor de la obra "La República"?',
		category: filosofia,
		correct_answer: 'Platón',
		incorrect_answers: ['Aristóteles', 'Sócrates', 'Nietzsche'],
	},
	{
		id: 78,
		difficulty: 'Medio',
		question:
			'¿Cuál es el término filosófico para referirse al estudio del conocimiento?',
		category: filosofia,
		correct_answer: 'Epistemología',
		incorrect_answers: ['Ontología', 'Metafísica', 'Lógica'],
	},
	{
		id: 79,
		difficulty: 'Difícil',
		question:
			'¿Quién escribió el libro "El mundo como voluntad y representación"?',
		category: filosofia,
		correct_answer: 'Arthur Schopenhauer',
		incorrect_answers: [
			'Friedrich Nietzsche',
			'Immanuel Kant',
			'Jean-Paul Sartre',
		],
	},
	{
		id: 80,
		difficulty: 'Difícil',
		question: '¿Cuál es la partícula subatómica más pesada?',
		category: ciencia,
		correct_answer: 'Quark top',
		incorrect_answers: ['Electrón', 'Protón', 'Neutrón'],
	},
	{
		id: 81,
		category: ciencia,
		difficulty: 'Medio',
		question: '¿Qué es la capa de ozono?',
		correct_answer:
			'Una capa de gas que protege la Tierra de la radiación ultravioleta del sol',
		incorrect_answers: [
			'Una capa de nubes en la atmósfera',
			'La capa más externa de la Tierra',
			'Una capa de gases que produce el efecto invernadero',
		],
	},
	{
		id: 82,
		category: ciencia,
		difficulty: 'Difícil',
		question: '¿Qué es la antimateria?',
		correct_answer:
			'Una forma de materia que tiene propiedades opuestas a la materia ordinaria',
		incorrect_answers: [
			'Una forma de materia que no tiene carga eléctrica',
			'Una forma de materia que no tiene masa',
			'Una forma de energía que tiene la capacidad de desintegrar la materia',
		],
	},
	{
		id: 83,
		difficulty: 'Fácil',
		question: '¿Qué es el acrónimo "CPU" en inglés?',
		category: tecnologia,
		correct_answer: 'Central Processing Unit',
		incorrect_answers: [
			'Computer Personal Unit',
			'Central Personal Unit',
			'Computer Processing Unit',
		],
	},
	{
		id: 84,
		difficulty: 'Medio',
		question:
			'¿Cuál es el nombre de la primera computadora electrónica digital?',
		category: tecnologia,
		correct_answer: 'ENIAC',
		incorrect_answers: ['UNIVAC', 'COLOSSUS', 'EDSAC'],
	},
	{
		id: 85,
		difficulty: 'Fácil',
		question: '¿En qué año se lanzó el juego "League of Legends"?',
		category: esports,
		correct_answer: '2009',
		incorrect_answers: ['2012', '2007', '2014']
	},
	{
		id: 86,
		difficulty: 'Fácil',
		question: '¿Cuál de los siguientes equipos es conocido por su dominio en la escena profesional de "Counter-Strike: Global Offensive" (CSGO)?',
		category: esports,
		correct_answer: 'Astralis',
		incorrect_answers: ['Virtus.pro', 'Fnatic', 'Team Liquid']
	},
	{
		id: 87,
		difficulty: 'Fácil',
		question: 'En "Valorant", ¿cuál de los siguientes agentes está especializado en habilidades de curación y support?',
		category: esports,
		correct_answer: 'Sage',
		incorrect_answers: ['Phoenix', 'Brimstone', 'Jett']
	},
	{
		id: 88,
		difficulty: 'Medio',
		question: '¿Qué equipo ganó el Campeonato Mundial de "League of Legends" en la temporada 2020?',
		category: esports,
		correct_answer: 'DAMWON Gaming',
		incorrect_answers: ['T1', 'G2 Esports', 'Fnatic']
	},
	{
		id: 89,
		difficulty: 'Medio',
		question: '¿Cuál de los siguientes mapas es un mapa de bomba clásico en el juego "Counter-Strike: Global Offensive"?',
		category: esports,
		correct_answer: 'Dust II',
		incorrect_answers: ['Kings Row', 'Bind', 'Mirage']
	},
	{
		id: 90,
		difficulty: 'Medio',
		question: '¿Qué estudio de desarrollo es responsable de la creación del juego "Valorant"?',
		category: esports,
		correct_answer: 'Riot Games',
		incorrect_answers: ['Blizzard Entertainment', 'Valve Corporation', 'Epic Games']
	},
	{
		id: 91,
		difficulty: 'Fácil',
		question: '¿Que equipo de CSGO es dominante en la actualidad en la región Américas?',
		category: esports,
		correct_answer: '9z',
		incorrect_answers: ['Furia', 'Bestia', 'Boca Gaming']
	},
	{
		id: 92,
		difficulty: 'Difícil',
		question: '¿A cuántos MAJORS clasificó 9z?',
		category: esports,
		correct_answer: '2',
		incorrect_answers: ['1', '3', '0']
	},
	{
		id: 93,
		difficulty: 'Fácil',
		question: '¿Cuál de los siguientes equipos ha ganado tres veces seguidas el Campeonato Mundial de "League of Legends" en 2013, 2014 y 2015?',
		category: esports,
		correct_answer: 'SK Telecom T1 (Ahora conocido como T1)',
		incorrect_answers: ['Fnatic', 'Samsung Galaxy', 'Team SoloMid']
	},
	{
		id: 94,
		difficulty: 'Difícil',
		question: 'En "Valorant", ¿cuál de los siguientes ha ganado el Mundial de 2022?',
		category: esports,
		correct_answer: 'LOUD',
		incorrect_answers: ['Optic Gaming', 'DRX', 'FPX']
	},
	{
		id: 95,
		difficulty: 'Difícil',
		question: '¿Cómo está formado actualmente el roster de 9z?',
		category: esports,
		correct_answer: 'try dgt max buda dav1deuS',
		incorrect_answers: ['Luken try meyern dgt b1t', 'try rox max straka baldu', 'dgt max keznit reversive Noktse']
	},
	{
		id: 96,
		difficulty: 'Fácil',
		question: '¿Qué equipo ganó el Campeonato Mundial de Valorant en 2023?',
		category: esports,
		correct_answer: 'Evil Geniuses',
		incorrect_answers: ['PPX', 'FNATIC', 'LEVIATAN']
	},
	{
		id: 97,
		difficulty: 'Difícil',
		question: '¿Cuál es el nombre del equipo de fútbol que es el máximo rival de Newells Old Boys?',
		category: esports,
		correct_answer: 'Rosario central',
		incorrect_answers:  ["Boca Juniors", "Independiente", "Racing Club"]
	},
	{
		id: 98,
		difficulty: "Medio",
		question: "¿Cuál es el nombre del estadio de la selección argentina de rugby?",
		category: deportes,
		correct_answer: "Estadio José Amalfitani",
		incorrect_answers: ["Estadio Monumental", "Estadio Único de La Plata", "Estadio Alberto J. Armando (La Bombonera)"]
	},
	{
		id: 99,
		difficulty: "Fácil",
		question: "¿Quién fue el entrenador de la selección argentina de fútbol en el Mundial 1986?",
		category: deportes,
		correct_answer: "Carlos Bilardo",
		incorrect_answers: ["Diego Maradona", "César Luis Menotti", "José Pékerman"]
	},
	{
		id: 100,
		difficulty: "Fácil",
		question: "¿Qué equipo de fútbol argentino es conocido como 'El Xeneize'?",
		category: deportes,
		correct_answer: "Boca Juniors",
		incorrect_answers: ["River Plate", "Independiente", "Racing Club"]
	},
	{
		id: 101,
		difficulty: "Fácil",
		question: "¿Qué jugador argentino es conocido como 'La Pulga'?",
		category: deportes,
		correct_answer: "Lionel Messi",
		incorrect_answers: ["Diego Maradona", "Sergio Agüero", "Gonzalo Higuaín"]
	},
	{
		id: 102,
		difficulty: "Medio",
		question: "¿En qué año Argentina ganó su primer Mundial de Fútbol?",
		category: deportes,
		correct_answer: "1978",
		incorrect_answers: ["1986", "1990", "2014"]
	},
	{
		id: 103,
		difficulty: "Medio",
		question: "¿Cuál de los siguientes equipos de fútbol argentino está actualmente peleando por no descender?",
		category: deportes,
		correct_answer: "Independiente",
		incorrect_answers: ["Boca Juniors", "River Plate", "Racing Club"]
	},
	{
		id: 104,
		difficulty: "Fácil",
		question: "¿Cuál de los siguientes jugadores argentinos de baloncesto es conocido como 'Manu'?",
		category: deportes,
		correct_answer: "Emanuel Ginóbili",
		incorrect_answers: ["Andrés Nocioni", "Carlos Delfino", "Luis Scola"]
	},
	{
		id: 105,
		difficulty: "Fácil",
		question: "¿Cuál es el equipo más grande del Fútbol Argentino?",
		category: deportes,
		correct_answer: "Boca Juniors",
		incorrect_answers: ["Rosario Central", "San Lorenzo", "River"]
	},
	{
		id: 106,
		difficulty: "Medio",
		question: "¿Con cuál entrenador gano Argentina su Medalla Olímpica en 'Atenas 2004' ?",
		category: deportes,
		correct_answer: "Rubén Magnano",
		incorrect_answers: ["Sergio Hernández", "Julio Lamas", "Néstor García"]
	},
	{
		id: 107,
		difficulty: "Fácil",
		question: "¿Cuál es el equipo actual del jugador Facundo Campazzo?",
		category: deportes,
		correct_answer: "Real Madrid",
		incorrect_answers: ["Peñarol", "Denver Nuggets", "San Antonio Spurs"]
	},
	{
		id: 108,
		difficulty: "Medio",
		question: "¿De que provincia es oriundo Gabriel 'El tortu' Deck?",
		category: deportes,
		correct_answer: "Santiago del Estero",
		incorrect_answers: ["Santa Fe", "Tucumán", "Salta"]
	},
	{
		id: 109,
		difficulty: "Medio",
		question: "¿Qué órgano humano es responsable de bombear sangre a través del cuerpo?",
		category: ciencia,
		correct_answer: "Corazón",
		incorrect_answers:  ["Hígado", "Cerebro", "Riñón"]
	},
	{
		id: 110,
		difficulty: "Medio",
		question: "¿Cuál de los siguientes equipos de fútbol argentino es conocido como 'El Pincha'?",
		category: deportes,
		correct_answer: "Estudiantes de La Plata",
		incorrect_answers: ["Buenos Aires", "La Plata", "Córdoba"]
	},
	{
		id: 111,
		difficulty: "Medio",
		question: "¿En qué deporte la selección femenina de Argentina es conocida como 'Las Leonas'?",
		category: deportes,
		correct_answer: "Hockey",
		incorrect_answers:  ["Atletismo", "Tenis", "Baloncesto"]
	},
	{
		id: 112,
		difficulty: "Medio",
		question: "¿En qué deporte el término 'grand slam' se refiere a ganar los cuatro torneos principales en un mismo año?",
		category: deportes,
		correct_answer: "Tenis",
		incorrect_answers: ["Golf", "Béisbol", "Rugby"]
	},
	{
		id: 113,
		difficulty: "Fácil",
		question: "¿Quién es considerado el padre de la filosofía occidental?",
		category: filosofia,
		correct_answer: "Sócrates",
		incorrect_answers: ["Platón", "Aristóteles", "Confucio"]
	},
	{
		id: 114,
		difficulty: "Fácil",
		question: "¿Cuál de las siguientes ramas de la filosofía se centra en la ética y la moral?",
		category: filosofia,
		correct_answer: "Ética",
		incorrect_answers: ["Estética", "Epistemología", "Metafísica"]
	},
	{
		id: 115,
		difficulty: "Medio",
		question: "¿Quién escribió 'Así habló Zaratustra', una obra clave en la filosofía existencialista?",
		category: filosofia,
		correct_answer: "Friedrich Nietzsche",
		incorrect_answers: ["Jean-Paul Sartre", "Albert Camus", "Søren Kierkegaard"]
	},
	{
		id: 116,
		difficulty: "Difícil",
		question: "¿Cuál es el concepto filosófico que se refiere a la búsqueda de la verdad a través del razonamiento?",
		category: filosofia,
		correct_answer: "Lógica",
		incorrect_answers: ["Metafísica", "Ética", "Epistemología"]
	},
	{
		id: 117,
		difficulty: "Difícil",
		question: "¿En qué rama de la ciencia se estudia la interacción entre organismos y su entorno?",
		category: ciencia,
		correct_answer: "Ecología",
		incorrect_answers: ["Física", "Química", "Biología"]
	},
	{
		id: 118,
		difficulty: "Difícil",
		question: "¿Qué partícula subatómica se encuentra en el núcleo de un átomo?",
		category: ciencia,
		correct_answer: "Protón",
		incorrect_answers: ["Electrón", "Neutrón", "Positrón"]
	},
	{
		id: 119,
		difficulty: "Fácil",
		question: "¿Qué antiguo filósofo griego es conocido por su teoría de que todo está hecho de átomos?",
		category: filosofia,
		correct_answer: "Demócrito",
		incorrect_answers: ["Sócrates", "Aristóteles", "Platón"]
	},
	{
		id: 120,
		difficulty: "Medio",
		question: "¿En qué obra de Platón se plantea la teoría de las 'Ideas' o 'Formas'?",
		category: "Filosofía",
		correct_answer: "La República",
		incorrect_answers: ["El Banquete", "Fedón", "El Sofista"]
	},
	{
		id: 121,
		difficulty: "Difícil",
		question: "¿Cuál de las siguientes corrientes filosóficas se caracteriza por su enfoque en el individualismo y la autenticidad?",
		category: filosofia,
		correct_answer: "Existencialismo",
		incorrect_answers: ["Racionalismo", "Empirismo", "Utilitarismo"]
	},
	{
		id: 122,
		difficulty: "Difícil",
		question: "¿Quién es conocido por su frase 'Cogito, ergo sum' (Pienso, luego existo)?",
		category: filosofia,
		correct_answer: "René Descartes",
		incorrect_answers: ["Immanuel Kant", "David Hume", "John Locke"]
	},
	{
		id: 123,
		difficulty: "Difícil",
		question: "¿Qué filósofo alemán es conocido por su obra 'El Ser y la Nada'?",
		category: filosofia,
		correct_answer: "Jean-Paul Sartre",
		incorrect_answers: ["Friedrich Nietzsche", "Albert Camus", "Søren Kierkegaard"]
	},
	{
		id: 124,
		difficulty: "Fácil",
		question: "¿Cuál es la novela de Gabriel García Márquez que narra la historia de Florentino Ariza y Fermina Daza?",
		category: literatura,
		correct_answer: "El amor en los tiempos del cólera",
		incorrect_answers: ["Cien años de soledad", "Crónica de una muerte anunciada", "La hojarasca"]
	},
	{
		id: 125,
		difficulty: "Fácil",
		question: "¿Quién escribió 'Los versos satánicos', una controvertida novela que mezcla realidad y fantasía?",
		category: literatura,
		correct_answer: "Salman Rushdie",
		incorrect_answers: ["Gabriel García Márquez", "Haruki Murakami", "Jorge Luis Borges"]
	},
	{
		id: 126,
		difficulty: "Fácil",
		question: "¿Qué escritor chileno es conocido por su novela 'La casa de los espíritus'?",
		category: literatura,
		correct_answer: "Isabel Allende",
		incorrect_answers: ["Pablo Neruda", "Jorge Luis Borges", "Gabriel García Márquez"]
	},
	{
		id: 127,
		difficulty: "Medio",
		question: "¿Quién es el autor de 'Conversación en La Catedral', una de las obras más importantes de la literatura peruana?",
		category: literatura,
		correct_answer: "Mario Vargas Llosa",
		incorrect_answers: ["Julio Cortázar", "Gabriel García Márquez", "Pablo Neruda"]
	},
	{
		id: 128,
		difficulty: "Medio",
		question: "¿En qué país nació el poeta y novelista chileno Pablo Neruda?",
		category: literatura,
		correct_answer: "Chile",
		incorrect_answers: ["Argentina", "Colombia", "México"]
	},
	{
		id: 129,
		difficulty: "Medio",
		question: "¿Cuál de las siguientes novelas es considerada una obra fundamental del realismo mágico?",
		category: literatura,
		correct_answer: "Pedro Páramo",
		incorrect_answers: ["Cien años de soledad", "Rayuela", "La casa de los espíritus"]
	},
	{
		id: 130,
		difficulty: "Difícil",
		question: "¿Quién es el autor de 'Pedro Páramo', una novela influyente en la literatura latinoamericana?",
		category: literatura,
		correct_answer: "Juan Rulfo",
		incorrect_answers: ["Octavio Paz", "Carlos Fuentes", "Gabriel García Márquez"]
	},
	{
		id: 131,
		difficulty: "Difícil",
		question: "¿Cuál de las siguientes obras es una novela de José María Arguedas que retrata la vida en los Andes peruanos?",
		category: literatura,
		correct_answer: "Los ríos profundos",
		incorrect_answers: ["La casa verde", "Pantaleón y las visitadoras", "Conversación en La Catedral"]
	},
	{
		id: 132,
		difficulty: "Difícil",
		question: "¿Quién es el autor de 'El túnel', una novela considerada precursora de la literatura existencialista?",
		category: literatura,
		correct_answer: "Ernesto Sabato",
		incorrect_answers: ["Jorge Luis Borges", "Julio Cortázar", "Gabriel García Márquez"]
	},
	{
		id: 133,
		difficulty: "Fácil",
		question: "¿Cuál de los siguientes escritores es conocido por su novela 'La ciudad y los perros'?",
		category: literatura,
		correct_answer: "Mario Vargas Llosa",
		incorrect_answers: ["Julio Cortázar", "Gabriel García Márquez", "Pablo Neruda"]
	},
	{
		id: 134,
		difficulty: "Medio",
		question: "¿Cuál de las siguientes novelas es considerada una obra fundamental del realismo mágico?",
		category: literatura,
		correct_answer: "Pedro Páramo",
		incorrect_answers: ["Cien años de soledad", "Rayuela", "La casa de los espíritus"]
	},
	{
		id: 135,
		difficulty: "Fácil",
		question: "¿Cuál es el estándar de red inalámbrica más utilizado en la mayoría de los dispositivos hoy en día?",
		category: tecnologia,
		correct_answer: "Wi-Fi",
		incorrect_answers: ["Bluetooth", "NFC", "4G"]
	},
	{
		id: 136,
		difficulty: "Fácil",
		question: "¿Qué empresa es conocida por desarrollar la serie de teléfonos inteligentes iPhone?",
		category: tecnologia,
		correct_answer: "Apple",
		incorrect_answers: ["Samsung", "Google", "Microsoft"]
	},
	{
		id: 137,
		difficulty: "Fácil",
		question: "¿Qué siglas representan el término 'HTML', utilizado en el diseño de páginas web?",
		category: tecnologia,
		correct_answer: "HyperText Markup Language",
		incorrect_answers: ["High Tech Modern Language", "Home Tool Management Language", "Hyper Transfer Multimedia Language"]
	},
	{
		id: 138,
		difficulty: "Medio",
		question: "¿Cuál es la técnica que implica entrenar a las máquinas para que puedan aprender a través de la experiencia y mejorar con el tiempo?",
		category: tecnologia,
		correct_answer: "Aprendizaje automático (Machine Learning)",
		incorrect_answers: ["Realidad virtual", "Ciberseguridad", "Inteligencia artificial"]
	},
	{
		id: 139,
		difficulty: "Medio",
		question: "¿Qué tecnología utiliza ondas de radio para identificar y rastrear objetos que tienen una etiqueta conectada?",
		category: tecnologia,
		correct_answer: "RFID (Identificación por Radiofrecuencia)",
		incorrect_answers: ["NFC", "Bluetooth", "Wi-Fi"]
	},
	{
		id: 140,
		difficulty: "Medio",
		question: "¿Cuál de las siguientes empresas es conocida por desarrollar el sistema operativo Android?",
		category: tecnologia,
		correct_answer: "Google",
		incorrect_answers: ["Apple", "Microsoft", "Samsung"]
	},
	{
		id: 141,
		difficulty: "Difícil",
		question: "¿Qué tecnología emergente permite la conexión y comunicación entre dispositivos y objetos cotidianos a través de Internet?",
		category: tecnologia,
		correct_answer: "Internet de las Cosas (IoT)",
		incorrect_answers: ["Inteligencia Artificial", "Realidad Virtual", "Blockchain"]
	},
	{
		id: 142,
		difficulty: "Difícil",
		question: "¿Cuál es la técnica de encriptación que utiliza una clave pública y una clave privada para proteger la comunicación?",
		category: tecnologia,
		correct_answer: "Criptografía de clave pública (RSA)",
		incorrect_answers: ["SHA-256", "AES", "SSL"]
	},
	{
		id: 143,
		difficulty: "Difícil",
		question: "¿Qué tipo de ataque informático se basa en enviar una gran cantidad de solicitudes a un servidor para colapsarlo?",
		category: tecnologia,
		correct_answer: "Ataque de denegación de servicio (DDoS)",
		incorrect_answers: ["Phishing", "Ransomware", "Hacking"]
	},
	{
		id: 144,
		difficulty: "Difícil",
		question: "¿Cuál es el término utilizado para describir el proceso de ocultar información en otro tipo de archivo, como una imagen o un audio?",
		category: tecnologia,
		correct_answer: "Esteganografía",
		incorrect_answers: ["Criptografía", "Desarrollo web", "Codificación binaria"]
	},
	{
		id: 145,
		difficulty: "Difícil",
		question: "¿Qué protocolo de seguridad se utiliza para cifrar la conexión entre un navegador web y un sitio web, garantizando que los datos estén protegidos durante la transmisión?",
		category: tecnologia,
		correct_answer: "SSL/TLS",
		incorrect_answers: ["HTTP", "SMTP", "FTP"]
	},
	{
		id: 146,
		difficulty: "Difícil",
		question: "¿Cuál de las siguientes tecnologías se basa en la emulación de un entorno físico para ejecutar múltiples sistemas operativos en un solo host?",
		category: tecnologia,
		correct_answer: "Virtualización",
		incorrect_answers: ["Ciberseguridad", "Inteligencia Artificial", "Blockchain"]
	},
	{
		id: 147,
		difficulty: "Fácil",
		question: "¿Cuál es el lenguaje de programación utilizado comúnmente para el desarrollo de sitios web y aplicaciones web?",
		category: tecnologia,
		correct_answer: "JavaScript",
		incorrect_answers: ["Python", "Java", "C++"]
	},
	{
		id: 148,
		difficulty: "Fácil",
		question: "¿Qué empresa es conocida por desarrollar el motor de búsqueda más popular del mundo?",
		category: tecnologia,
		correct_answer: "Google",
		incorrect_answers: ["Bing", "Yahoo", "DuckDuckGo"]
	},
	{
		id: 149,
		difficulty: "Fácil",
		question: "¿Qué dispositivo portátil de lectura de libros electrónicos es fabricado por Amazon?",
		category: tecnologia,
		correct_answer: "Kindle",
		incorrect_answers: ["Nook", "Kobo", "iPad"]
	},
	{
		id: 150,
		difficulty: "Medio",
		question: "¿Qué término se refiere a la capacidad de una máquina para comprender y responder al lenguaje humano de manera natural?",
		category: tecnologia,
		correct_answer: "Procesamiento del Lenguaje Natural (NLP)",
		incorrect_answers: ["Aprendizaje Automático", "Realidad Aumentada", "Inteligencia Artificial"]
	},
	{
		id: 151,
		difficulty: "Medio",
		question: "¿Cuál es el nombre de la tecnología que permite a las baterías cargar rápidamente y retener una carga más duradera?",
		category: tecnologia,
		correct_answer: "Carga rápida (Fast Charging)",
		incorrect_answers: ["Batería inteligente", "Carga inalámbrica", "Células de combustible"]
	},
	{
		id: 152,
		difficulty: "Medio",
		question: "¿Cuál de las siguientes tecnologías es utilizada para rastrear el movimiento y la posición en el espacio tridimensional?",
		category: tecnologia,
		correct_answer: "Realidad Virtual (VR)",
		incorrect_answers: ["Realidad Aumentada (AR)", "Inteligencia Artificial (AI)", "Internet de las Cosas (IoT)"]
	},
	{
		id: 153,
		difficulty: "Difícil",
		question: "¿Cuál es el término que describe la tecnología que permite el seguimiento ocular para controlar dispositivos y aplicaciones?",
		category: tecnologia,
		correct_answer: "Seguimiento ocular (Eye Tracking)",
		incorrect_answers: ["Reconocimiento de voz", "Control gestual", "Biorretroalimentación"]
	},
	{
		id: 154,
		difficulty: "Difícil",
		question: "¿Cuál de las siguientes tecnologías se utiliza para verificar y garantizar la autenticidad de un conjunto de datos?",
		category: tecnologia,
		correct_answer: "Blockchain",
		incorrect_answers: ["Inteligencia Artificial", "Realidad Virtual", "Internet de las Cosas"]
	}
	];