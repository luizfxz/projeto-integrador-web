
var el = document.querySelector('#imprimir');
el.addEventListener('click', function(e){
    e.preventDefault();      // impedir que o link seja seguido imediatamente
    var href = this.href;    // colocar em cache o url
    self.print();            // imprimir
    window.location.href = href;  // ir para nova página
});