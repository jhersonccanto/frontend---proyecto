export class Empresa {
  id: number;
  nombreEmpresa: string;
  rucEmpresa: string;
  telefonoEmpresa: string;
  correoEmpresa: string;
  departamentoUbigeo: string;
  distritoUbigeo: string;
  provinciaUbigeo: string;
  direccionEmpresa: string;
  nombreRepresentante: string;
  cargoRepresentante: string;
  correoRepresentante: string;
  telefonoRepresentante: string;

  // Constructor que inicializa los atributos de la clase
  constructor(
    id: number,
    nombreEmpresa: string,
    rucEmpresa: string,
    telefonoEmpresa: string,
    correoEmpresa: string,
    departamentoUbigeo: string,
    distritoUbigeo: string,
    provinciaUbigeo: string,
    direccionEmpresa: string,
    nombreRepresentante: string,
    cargoRepresentante: string,
    correoRepresentante: string,
    telefonoRepresentante: string
  ) {
    this.id = id;
    this.nombreEmpresa = nombreEmpresa;
    this.rucEmpresa = rucEmpresa;
    this.telefonoEmpresa = telefonoEmpresa;
    this.correoEmpresa = correoEmpresa;
    this.departamentoUbigeo = departamentoUbigeo;
    this.distritoUbigeo = distritoUbigeo;
    this.provinciaUbigeo = provinciaUbigeo;
    this.direccionEmpresa = direccionEmpresa;
    this.nombreRepresentante = nombreRepresentante;
    this.cargoRepresentante = cargoRepresentante;
    this.correoRepresentante = correoRepresentante;
    this.telefonoRepresentante = telefonoRepresentante;
  }
}
