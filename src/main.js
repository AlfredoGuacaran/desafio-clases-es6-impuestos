import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

const impuesto1 = new Impuesto(4000000, 2000000);
const cliente1 = new Cliente('Alfredo', impuesto1);

console.log(cliente1);
console.log(cliente1.calcularImpuesto());
