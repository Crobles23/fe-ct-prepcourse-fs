var suma = numero;
  var caja = [];
  for(var i = 0; i < 10 ; i++){
    suma = suma + 2; 
    if(suma === i){
      break;} 
      else{
        caja.push(suma);}
  }
  if(caja.length < 10){
    return "Se interrumpió la ejecución";
  } 
    else if(caja.length === 10){
      return caja;}