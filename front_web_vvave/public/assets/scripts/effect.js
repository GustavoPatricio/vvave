window.addEventListener(
  "scroll",
  () => {
    var xScrollPosition = window.scrollY;
    var teste = document.querySelector(".backgroundWithTitle");

    var seg = document.querySelector("#segundaFoto");

    //terceiraFoto.style.transform = "translateY(" + xScrollPosition * - 0.5 + "px)";

    seg.style.transform = "translateY(" + xScrollPosition * -0.5 + "px)";

    teste.style.transform = "translateY(" + xScrollPosition * -0.1 + "px)";
    //content.style.transform = "translateY(" + xScrollPosition * - 0.5 + "px)";
  },
  false
);
