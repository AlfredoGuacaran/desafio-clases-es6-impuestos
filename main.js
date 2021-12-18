class Cliente {
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
    return (this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 1.21;
  }
}

class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  getMontoBrutoAnual() {
    return this.montoBrutoAnual;
  }

  setMontoBrutoAnual(newMontoBruto) {
    this.montoBrutoAnual = newMontoBruto;
  }
  getDeducciones() {
    return this.deducciones;
  }

  setDeducciones(newDeducciones) {
    this.Deducciones = newDeducciones;
  }
}

const cliente1 = new Cliente('Alfredo', new Impuesto(4000000, 2000000));

console.log(cliente1.calcularImpuesto());
