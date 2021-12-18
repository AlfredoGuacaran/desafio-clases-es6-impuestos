export default class Cliente {
  constructor(nombre, impuesto) {
    this.nombre = nombre;
    this.impuesto = impuesto;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(newNombre) {
    this.nombre = newNombre;
  }

  calcularImpuesto() {
    return (this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21;
  }
}
