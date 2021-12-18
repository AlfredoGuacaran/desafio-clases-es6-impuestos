export default class Impuesto {
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
    this.deducciones = newDeducciones;
  }
}
