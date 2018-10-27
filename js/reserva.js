var Reserva = function(horario, cantPersona, PrecioPersona, codDescuento) {
  this.horario = horario;
  this.cantPersona = cantPersona;
  this.PrecioPersona = PrecioPersona;
  this.codDescuento = codDescuento;
};

Reserva.prototype.calcularPrecioBase = function calcularPB() {
  return this.cantPersona * this.PrecioPersona;
};

Reserva.prototype.calcularPrecioTotal = function calcularPT() {
  let precioConAdicional = this.calcularAdicionales();
  let precioConDescuento = this.calcularDescuentos(precioConAdicional);
  return precioConDescuento;
};

Reserva.prototype.calcularAdicionales = function calcularAdici() {
  let total = 0;
  if ((this.horario.getHours() > 12 && this.horario.getHours() <= 14) ||
    (this.horario.getHours() > 19 && this.horario.getHours() <= 21)) {
    total += 5;
  }
  if (this.horario.getDay() === 0 || this.horario.getDay() === 6 || this.horario.getDay() === 5) {
    total += 10;
  }
  return this.calcularPrecioBase() + ((this.calcularPrecioBase() * total) / 100);
};

Reserva.prototype.calcularDescuentos = function calcularDesc(precioConAdicional) {
  let descuentoPorGrupo = obtenerPorcentajeGrupo(this.cantPersona);
  let descuentoPorCodigo = obtenerDescuentoCodigo(this.codDescuento,this.PrecioPersona);
  if(descuentoPorCodigo.EsPorcentaje)
  {
      let totalDescuento = descuentoPorGrupo+descuentoPorCodigo.cantidad;
      return precioConAdicional - ((precioConAdicional*totalDescuento)/100)
  }
  else{
    let DescuentoParcial =  precioConAdicional - ((precioConAdicional*descuentoPorGrupo)/100)
    return DescuentoParcial - descuentoPorCodigo.cantidad;
  }
};

function obtenerPorcentajeGrupo(cantPersona) {
    let descuentoPorGrupo = 0;
    switch (true) {
        case cantPersona > 3 && cantPersona <= 6:
            descuentoPorGrupo = 5;
            break;
        case cantPersona > 5 && cantPersona <= 8:
            descuentoPorGrupo = 10;
            break;
        case cantPersona > 8:
            descuentoPorGrupo = 15;
            break;
        default:
            descuentoPorGrupo = 0;
            break;
    }
    console.log(descuentoPorGrupo);
    return descuentoPorGrupo;
   
}

function obtenerDescuentoCodigo(codigo,PrecioPersona) {
    let descuento = {
        cantidad: 0,
        EsPorcentaje: false
    };
    switch (codigo) {
        case "DES15":
            descuento.cantidad = 15;
            descuento.EsPorcentaje = true;
            break;
        case "DES200":
            descuento.cantidad = 200;
            break;
        case "DES1":
            descuento.cantidad = PrecioPersona;
            break;
    }
    return descuento;
}