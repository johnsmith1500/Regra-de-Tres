$(document).on("click","#calcular", function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var valor3 = $("#valor3").val();

  var result = (parseFloat(valor2) * parseFloat(valor3))/parseFloat(valor1);
  $("#result").val(result);
});

$(document).on("click","#limpar", function(){
  $("#result").val("");
  $("#valor1").val("");
  $("#valor2").val("");
  $("#valor3").val("");
});
