
function cadastraCliente(){
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, '0');
  var mes = String(data.getMonth() + 1).padStart(2, '0');
  var ano = data.getFullYear();
  var dataAtual = dia + '/' + mes + '/' + ano;
  
  document.getElementById('CLIFRM012-FrmStRazaoSocial').value = 'CLIENTE TESTE PAINEL '+dataAtual;
  document.getElementById('CLIFRM012-FrmStFantasia').value = 'CLIENTE TESTE PAINEL '+dataAtual;
  
  // CNPJ
  function gera_random(n){
    var ranNum = Math.round(Math.random()*n);
    return ranNum;
    }
    
    function mod(dividendo,divisor){
    return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
    }
    
     var n = 9;
     var n1 = gera_random(n);
     var n2 = gera_random(n);
     var n3 = gera_random(n);
     var n4 = gera_random(n);
     var n5 = gera_random(n);
     var n6 = gera_random(n);
     var n7 = gera_random(n);
     var n8 = gera_random(n);
     var n9 = 0;//gera_random(n);
     var n10 = 0;//gera_random(n);
     var n11 = 0;//gera_random(n);
     var n12 = 1;//gera_random(n);
     var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
     d1 = 11 - ( mod(d1,11) );
     if (d1>=10) d1 = 0;
     var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
     d2 = 11 - ( mod(d2,11) );
     if (d2>=10) d2 = 0;
    resultado = ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2;
    document.getElementById('CLIFRM012-FrmStCnpj').value=resultado;
  // FIM CNPJ

  document.getElementById('CLIFRM012-FrmStInscEstadual').value = "ISENTO";
  // document.getElementById('CLIFRM012-FrmStInscEstadual').value = "7987978";
  // document.getElementById('CLIFRM012-FrmDsUf').value = "PR";
  document.getElementById('CLIFRM012-FrmNrDdd').value = "44";
  document.getElementById('CLIFRM012-FrmNrFone').value = "984636363";
  document.getElementById('CLIFRM012-FrmStEmail').value = "mobile@marknet.com.br";
  document.getElementById('CLIFRM012-FrmStEmailNfe').value = "nfe@marknet.com.br";
  document.getElementById('CLIFRM012-FrmStCep').value = "87209010";
  $('#CLIFRM012-FrmStCep').change();
  document.getElementById('CLIFRM012-FrmCdLogradouro').value = 4;
  document.getElementById('CLIFRM012-FrmStNumero').value = 5130;

}

cadastraCliente();