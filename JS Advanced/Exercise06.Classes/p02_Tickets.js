function tickets(ticketsArr, sortingCriteria){
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    for (let ticket of ticketsArr) {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);
        tickets.push(new Ticket(destination, price, status));
    }

    switch (sortingCriteria){
        case 'destination':
            return tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
        case 'price':
            return tickets = tickets.sort((a, b) => a.price - b.price);
        case 'status':
            return tickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
    }

    return tickets;
}

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));