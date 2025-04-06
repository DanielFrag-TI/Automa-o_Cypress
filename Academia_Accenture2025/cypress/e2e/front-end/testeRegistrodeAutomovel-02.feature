#utf-8
#language: pt

Funcionalidade: testeRegistrodeAutomovel-03 - envio incompleto do formulário
  Cenário: Exibição de mensagem de erro ao tentar enviar o formulário sem preencher todos os campos obrigatórios
    Dado que o usuário acessa o site Tricentis Vehicle
    E clica no botão 'Automobile' 
    Quando o usuário preenche a aba Enter Vehicle Data 
    E clica no botão Next
    E preenche a aba Enter Insurant Data     
    E preenche a aba Enter Product Data    
    E seleciona uma opção na aba Select Price Option
    E não preenche os campos obrigatórios da aba Send Quote
    E clica no botão Send
    Então o usuário recebe uma mensagem de falha de envio do formulário