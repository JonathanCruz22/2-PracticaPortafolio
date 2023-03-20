// para que funcione esto tube que modificar el include-html.js

//por lo que entendi no funcionaba por que este js, no encontraba a la variable, pero con esto al parecer ya espera a que carguen todas las paginas (con lo de include-html.js) y ya funciona el js

document.addEventListener("htmlLoaded", function () {


    const $portfolio = document.querySelector(".sec-portfolio-js");
    const $modalImgPortfolio = document.querySelector(".img-modal-js");

    if ($portfolio) {

        $portfolio.addEventListener("click", (e) => {
            if (e.target.classList.contains("img-btn-modal-js")) {
                // SRC
                let urlImg = e.target.attributes[0].nodeValue;

                // add modal
                $modalImgPortfolio.src = urlImg;
            }

        });

    }


});












