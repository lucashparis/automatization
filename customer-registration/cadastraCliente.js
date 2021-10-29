
function cadastraCliente(){
  var data = new Date();
  var dia = String(data.getDate()).padStart(2, '0');
  var mes = String(data.getMonth() + 1).padStart(2, '0');
  var ano = data.getFullYear();
  var dataAtual = dia + '/' + mes + '/' + ano;
  
  document.getElementById('CLIFRM012-FrmStRazaoSocial').value = 'CLIENTE TESTE PAINEL '+dataAtual;
  document.getElementById('CLIFRM012-FrmStFantasia').value = 'CLIENTE TESTE PAINEL '+dataAtual;
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
