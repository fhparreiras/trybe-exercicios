const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const entregador = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const telefone = order.phoneNumber;
  const rua = order.address.street;
  const num = order.address.number;
  const apto = order.address.apartment;
  
  console.log(
    `Olá ${entregador}, entrega para: ${cliente}, Telefone: ${telefone}, R. ${rua}, Nº:${num}, AP: ${apto}.`
  );
}

customerInfo(order);

const orderModifier = (order) => {
  const nome = order.name;
  const pizzas = Object.keys(order.order.pizza);
  const drinks = Object.assign({}, order.order.drinks);
  let tipos = '';
  for (let keys in drinks) {
    tipos += drinks[keys]['type'] + ', ';
  }
  const total = order.payment.total.toFixed(2);
  console.log(
    `Olá ${nome}, o total do seu pedido de ${pizzas} e ${tipos}é R$ ${total}.`
  );
}

let comprador = "Venâncio Asdrubal";
let total = 50;
order.name = comprador;
order.payment.total = total;

orderModifier(order);

