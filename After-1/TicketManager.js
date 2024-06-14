class TicketManager {
    id = 1;
    #precioBaseDeGanancia= 1.15; // el 15% sumado al 100%

    constructor(){
        this.eventos = [];
    }

    addEventos({ nombre, lugar, precio, fecha = new Date(), capacidad = 50 }){
        const nuevoEvento = {
            id: this.id++,
            nombre,
            lugar,
            fecha,
            capacidad,
            precio: precio * this.#precioBaseDeGanancia,
            participantes: []
        }
        this.eventos.push(nuevoEvento)
    }

    getEventos(){
        return this.eventos;
    }

    addUser(eventId, userId){
       const isExists =  this.eventos.some(evento => evento.id === eventId)
       const isUserExists = 
            this.eventos.some(evento => evento.participantes.some(participante => participante === userId))

       if(!isExists || isUserExists) {
           return console.log("El evento no existe o el usuario ya esta registrado a un evento")
        }
        const index = this.eventos.findIndex(evento => evento.id === eventId)
        this.eventos[index].participantes.push(userId);
    }

    ponerEventoEnGira(eventId, lugar, fecha){
        const eventoFinded = this.eventos.find(evento => evento.id === eventId)
        const nuevoEvento = {
            ...eventoFinded,
            id: this.id++,
            lugar,
            fecha,
            participantes: []
        }
        this.eventos.push(nuevoEvento);
    }

}

const ticketera = new TicketManager();

const nuevaTicket = {
    nombre:'Nuevo tiker',
    lugar: 'Mi casa',
    precio: 15500,
    fecha: '2024/08/03',
    capacidad: 5000
}
const otroTicket = {
    nombre:'otro ticker',
    lugar: 'Mi Escuela',
    precio: 500,
    fecha: '2024/09/03',
    capacidad: 50
}

ticketera.addEventos(nuevaTicket)
ticketera.addEventos(otroTicket)

ticketera.addUser(2,1)
ticketera.addUser(2,1)
ticketera.addUser(2,1)
ticketera.ponerEventoEnGira(2,'Mi trabajo','2024/10/29');
console.log(ticketera.getEventos())
