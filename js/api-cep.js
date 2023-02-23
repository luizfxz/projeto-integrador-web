let cepUser = document.querySelector('#cepUser');
let cepBusca = document.querySelector('#cepBusca');



cepUser.addEventListener('blur', function(e) {

    let cepUser = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cepUser+'/json/?callback=popularForm';

    document.body.appendChild(script);


});

function popularForm (resposta) {

    console.log(resposta);

    cepBusca.value = resposta.logradouro + resposta.bairro + resposta.localidade + resposta.uf;

}