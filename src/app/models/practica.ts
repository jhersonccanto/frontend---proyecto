export class Practica {

    idPractica: number;
  nombrePersona: string;
  apellidoPersona: string;
  codigoPersona: string;
  nombreEmpresa: string;
  nombreLinea: string;
  planPlan: string;
  nombreCarrera: string;
  tipoSupervisor: string;
  fechaInicioPractica: string;
  fechaFinPractica: string;
  horasPlanPractica: string;
  notaAcademicaPractica: string;
  notaEmpresarialPractica: string;
  ponderadoFinalPractica: string;
  estadoEstado: string;

  constructor(
    idPractica: number = 0,
    nombrePersona: string = '',
    apellidoPersona: string = '',
    codigoPersona: string = '',
    nombreEmpresa: string = '',
    nombreLinea: string = '',
    planPlan: string = '',
    nombreCarrera: string = '',
    tipoSupervisor: string = '',
    fechaInicioPractica: string = '',
    fechaFinPractica: string = '',
    horasPlanPractica: string = '',
    notaAcademicaPractica: string = '',
    notaEmpresarialPractica: string = '',
    ponderadoFinalPractica: string = '',
    estadoEstado: string = ''
  ) {
    this.idPractica = idPractica;
    this.nombrePersona = nombrePersona;
    this.apellidoPersona = apellidoPersona;
    this.codigoPersona = codigoPersona;
    this.nombreEmpresa = nombreEmpresa;
    this.nombreLinea = nombreLinea;
    this.planPlan = planPlan;
    this.nombreCarrera = nombreCarrera;
    this.tipoSupervisor = tipoSupervisor;
    this.fechaInicioPractica = fechaInicioPractica;
    this.fechaFinPractica = fechaFinPractica;
    this.horasPlanPractica = horasPlanPractica;
    this.notaAcademicaPractica = notaAcademicaPractica;
    this.notaEmpresarialPractica = notaEmpresarialPractica;
    this.ponderadoFinalPractica = ponderadoFinalPractica;
    this.estadoEstado = estadoEstado;
  }
}
