export class PracticaDetalle {

  nombreEmpresa: string;
  rucEmpresa: string;
  direccionEmpresa: string;
  correoEmpresa: string;
  nombreLinea: string;
  nombreRepresentante: string;
  cargoRepresentante: string;
  correoRepresentante: string;
  telefonoRepresentante: string;

  constructor(
    nombreEmpresa: string = '',
    rucEmpresa: string = '',
    direccionEmpresa: string = '',
    correoEmpresa: string = '',
    nombreLinea: string = '',
    nombreRepresentante: string = '',
    cargoRepresentante: string = '',
    correoRepresentante: string = '',
    telefonoRepresentante: string = ''
  ) {
    this.nombreEmpresa = nombreEmpresa;
    this.rucEmpresa = rucEmpresa;
    this.direccionEmpresa = direccionEmpresa;
    this.correoEmpresa = correoEmpresa;
    this.nombreLinea = nombreLinea;
    this.nombreRepresentante = nombreRepresentante;
    this.cargoRepresentante = cargoRepresentante;
    this.correoRepresentante = correoRepresentante;
    this.telefonoRepresentante = telefonoRepresentante;
  }
}
