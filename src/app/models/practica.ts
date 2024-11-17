export class Practica {

    idPractica: number;
  practicante: string;
  codigo: string;
  fecha: string;
  empresa: string;
  linea: string;
  representanteLegal: string;
  estado: string;

    constructor(idPractica: number = 0, practicante: string = '', codigo: string = '', fecha: string = '', empresa: string = '', linea: string = '', representanteLegal: string = '', estado: string = '') {
      this.idPractica = idPractica;
      this.practicante = practicante;
      this.codigo = codigo;
      this.fecha = fecha;
      this.empresa = empresa;
      this.linea = linea;
      this.representanteLegal = representanteLegal;
      this.estado = estado;
    }
}
