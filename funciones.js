function puedoGuardarEnElNavegador() {
  if (window.localStorage) {
    navegadorDowgrade = false;
    if (localStorage.ecografista != null) {
      var ecografista = JSON.parse(localStorage["ecografista"]);
      for (var i = 0; i < ecografista.length; i++) {
        var node = document.createElement("option");
        node.value = ecografista[i];
        document.getElementById("ecografista-list").appendChild(node);
      } 
    }
  }
  else{
    $("#home").prepend("<div class='alert alert-warning alert-dismissible fade show' role='alert' id='navegadorDowgrade'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Hey!</strong> debes actualizar tu navegador para mejorar el desempeño de esta aplicación.</div>");
    navegadorDowgrade = true;
  }
};

function queDiaEs(){
  var d = new Date();

  if (navegadorDowgrade == false) {
    localStorage.lastLoginDate = d;
  }
  Hoy.push(d.getDay());
  Hoy.push(d.getMonth());
  Hoy.push(d.getFullYear());
};

function cualEsMiIp(){

  if (navegadorDowgrade == false) {
    $.getJSON(
      "http://jsonip.com/?callback=?"
    ).done(function (data) {
      localStorage.lastLoginIP = data.ip;
    });
  }
};

function show_hide(id){
  if (document.getElementById){
    var el = document.getElementById(id);
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
  }
};