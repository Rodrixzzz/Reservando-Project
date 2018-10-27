var expect = chai.expect;
// Test Guia numero 1
describe('Testeo de la función Reservar Horario', function(){
	it('Al reservar un horario disponible, el mismo debe eliminarse del array de horarios.',function(){
        let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        let cantOriginal = restaurante.horarios.length;
        restaurante.reservarHorario("13:00");
        expect(restaurante.horarios.length).to.equal(cantOriginal-1);
    })
    it('Al reservar un horario no disponible, el array de horario, no sufre modificación.',function(){
        let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        let cantOriginal = restaurante.horarios.length;
        restaurante.reservarHorario("13:30");
        expect(restaurante.horarios.length).to.equal(cantOriginal);
    })
    it('Al invocar la función reservarHorario sin parametros, el array de horario, no sufre modificación.',function(){
        let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        let cantOriginal = restaurante.horarios.length;
        restaurante.reservarHorario();
        expect(restaurante.horarios.length).to.equal(cantOriginal);
    })
    it('Al reservar un horario disponible dos veces, solo se modifica una vez el array.',function(){
        let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        let cantOriginal = restaurante.horarios.length;
        restaurante.reservarHorario("13:00");
        restaurante.reservarHorario("13:00");
        expect(restaurante.horarios.length).to.equal(cantOriginal-1);
    })
})
describe('Testeo de la función Obterner Puntuación', function(){
	it('Al obtener la puntuación de un restaurante sin calificar, devuelve 0',function(){
        let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
        expect(restaurante.obtenerPuntuacion()).to.equal(0);
    })
    it('Dado un restaurante con calificaciones 8,9 y 10.El promedio debe ser 9',function(){
        let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [8,9,10]);
        expect(restaurante.obtenerPuntuacion()).to.equal(9);
    })
    it('Dado un restaurante con calificaciones 5,5 y 6.El promedio debe ser 5,3',function(){
        let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [5,5,6]);
        expect(restaurante.obtenerPuntuacion()).to.equal(5.3);
    })
})
describe('Testeo de la función Calificar', function(){
	it('Al calificar un restaurante con 10, se agrega a las puntuaciones',function(){
        let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
        restaurante.calificar(10);
        expect(restaurante.obtenerPuntuacion()).to.equal(10);
    })
    it('Al calificar un restaurante con A, no se agrega a las puntuaciones',function(){
        let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
        restaurante.calificar('A');
        expect(restaurante.obtenerPuntuacion()).to.equal(0);
    })
    it('Al calificar un restaurante con -5, no se agrega a las puntuaciones',function(){
        let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
        restaurante.calificar(-5);
        expect(restaurante.obtenerPuntuacion()).to.equal(0);
    })
})
describe('Testeo de la función Buscar Restaurante', function(){
	it('Se busca al restaurante con ID = 1, que existe en el listado',function(){
        let resultado = listado.buscarRestaurante(1);
        expect(resultado.nombre).to.equal('TAO Uptown');
    })
    it('Se busca al restaurante con ID = 30, que no existe en el listado',function(){
        let resultado = listado.buscarRestaurante(30);
        expect(resultado).to.equal('No se ha encontrado ningún restaurant');
    })
    it('Se invoca a la función sin ningun ID',function(){
        let resultado = listado.buscarRestaurante();
        expect(resultado).to.equal('No se ha encontrado ningún restaurant');
    })
})
describe('Testeo de la función Buscar Restaurante', function(){
	it('Se busca al restaurante con ID = 1, que existe en el listado',function(){
        let resultado = listado.buscarRestaurante(1);
        expect(resultado.nombre).to.equal('TAO Uptown');
    })
    it('Se busca al restaurante con ID = 30, que no existe en el listado',function(){
        let resultado = listado.buscarRestaurante(30);
        expect(resultado).to.equal('No se ha encontrado ningún restaurant');
    })
    it('Se invoca a la función sin ningun ID',function(){
        let resultado = listado.buscarRestaurante();
        expect(resultado).to.equal('No se ha encontrado ningún restaurant');
    })
})
describe('Testeo de la función obtener Restaurantes', function(){
	it('Se invoca a la función sin ningun parametro, retorna un array vacio',function(){
        let resultado = listado.obtenerRestaurantes();
        expect(resultado.length).to.equal(0);
    })
    it('Se invoca a la función con los parametros ciudad = Nueva York, Rubro = Asiática y Horario = 13:00',function(){
        let resultado = listado.obtenerRestaurantes('Asiática','Nueva York','13:00');
        expect(resultado.length).to.equal(1);
    })
    it('Se invoca a la función con los parametros Horario = 13:00',function(){
        let resultado = listado.obtenerRestaurantes(null,null,'13:00');
        expect(resultado.length).to.equal(3);
    })
    it('Se invoca a la función con los parametros ciudad = Nueva York',function(){
        let resultado = listado.obtenerRestaurantes(null,'Nueva York',null);
        expect(resultado.length).to.equal(7);
    })
    it('Se invoca a la función con los parametros Rubro = Asiática',function(){
        let resultado = listado.obtenerRestaurantes('Asiática',null,null);
        expect(resultado.length).to.equal(3);
    })
})
describe('Testeo de las reservas', function(){
	it('Al reservar para 3 personas, con un precio de $100 por persona, el precio base sera de $300',function(){
        let reserva1 = new Reserva (new Date(2018, 9, 24, 11, 00), 3, 100, " ")
        expect(reserva1.calcularPrecioBase()).to.equal(300);
    })
    it('Al reservar para 3 personas, con un precio de $100 por persona, en horario pico, dia de semana y con codigo de descuento DES15, el precio total sera de $267.75, ',function(){
        let reserva1 = new Reserva (new Date(2018, 9, 24, 13, 00), 3, 100, "DES15")
        expect(reserva1.calcularPrecioTotal()).to.equal(267.75);
    })
})
