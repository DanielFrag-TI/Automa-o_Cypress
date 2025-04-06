#uft-8
#language: pt


Funcionalidade: testeRegistrodeAutomovel-01 - registro no portal
    Cenário: Cotação valida de seguro de automóvel
    Dado que o usuário acessa o site Tricentis Vehicle
    E clica no botão 'Automobile'
    Quando o usuário preenche a aba Enter Vehicle Data 
    E clica no botão Next
    E preenche a aba Enter Insurant Data   
    E preenche a aba Enter Product Data 
    E seleciona uma opção na aba Select Price Option    
    E preenche a aba Send Quote
    E clica no botão Send
    Então o usuário recebe uma mensagem de confirmação de envio do formulário

