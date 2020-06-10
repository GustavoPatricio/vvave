var navbarfx = () => {
  var burger = document.getElementById("idBurgerIcon"); //icone
  var sideNav = document.getElementById("sideNav"); //Navegação lateral (escondida)
  var blackDiv = document.getElementById("navSwitch"); //Fundo (preto e com pouca opacidade) ao menu ser ativado
  var idLogo = document.getElementById("idLogo"); //Logo da navbar
  var supNavbar = document.getElementById("navbar"); //barra de navegação superior
  var sideNavLink = document.querySelectorAll(".sideNavLink");

  //Faz o efeito da sideNav ao clicar no menu
  burger.addEventListener("click", () => {
    sideNav.classList.toggle("sideNavToggler");
    blackDiv.style.display = "block";
  });

  //Faz com que o fundo preto suma ao clicar
  blackDiv.addEventListener("click", () => {
    sideNav.classList.toggle("sideNavToggler");
    blackDiv.style.display = "none";
  });

  sideNavLink.forEach(function(link) {
    link.addEventListener("click", () => {
      sideNav.classList.toggle("sideNavToggler");
      blackDiv.style.display = "none";
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
      burger.style.filter = "invert(100%)";
      idLogo.style.filter = "invert(0%)";
      supNavbar.style.backgroundColor = "transparent";
    } else {
      burger.style.filter = "invert(100%)";
      idLogo.style.filter = "invert(0%)";
      supNavbar.style.backgroundColor = "#242424";
    }
  });
};

export default navbarfx;
