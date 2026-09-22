document.addEventListener("DOMContentLoaded", () => {

    /*
     * MENU HAMBÚRGUER
     */

    const botaoMenu = document.querySelector("#menu-hamburguer");
    const menu = document.querySelector("#menu-principal");

    if (botaoMenu && menu) {

        botaoMenu.addEventListener("click", () => {

            const menuAberto = menu.classList.toggle("menu-aberto");

            botaoMenu.setAttribute(
                "aria-expanded",
                menuAberto
            );

        });

    }


    /*
     * FECHAR MENU AO CLICAR EM UM LINK
     */

    const linksMenu = document.querySelectorAll(
        "#menu-principal a"
    );

    linksMenu.forEach((link) => {

        link.addEventListener("click", () => {

            if (menu) {
                menu.classList.remove("menu-aberto");
            }

            if (botaoMenu) {
                botaoMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });
/*
 * FECHAR MENU COM A TECLA ESC
 */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && menu?.classList.contains("menu-aberto")) {

        menu.classList.remove("menu-aberto");

        if (botaoMenu) {
            botaoMenu.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    }

});

    /*
     * FORMULÁRIO DE CADASTRO
     */

    const formulario = document.querySelector(
        "#formulario-cadastro"
    );

    const mensagem = document.querySelector(
        "#mensagem"
    );


    if (formulario) {

        const cpf = document.querySelector("#cpf");
        const telefone = document.querySelector("#telefone");
        const cep = document.querySelector("#cep");


        /*
         * MÁSCARA DE CPF
         */

        if (cpf) {

            cpf.addEventListener("input", () => {

                let valor = cpf.value.replace(/\D/g, "");

                valor = valor.substring(0, 11);

                valor = valor.replace(
                    /(\d{3})(\d)/,
                    "$1.$2"
                );

                valor = valor.replace(
                    /(\d{3})(\d)/,
                    "$1.$2"
                );

                valor = valor.replace(
                    /(\d{3})(\d{1,2})$/,
                    "$1-$2"
                );

                cpf.value = valor;

            });

        }


        /*
         * MÁSCARA DE TELEFONE
         */

        if (telefone) {

            telefone.addEventListener("input", () => {

                let valor = telefone.value.replace(
                    /\D/g,
                    ""
                );

                valor = valor.substring(0, 11);

                if (valor.length > 10) {

                    valor = valor.replace(
                        /(\d{2})(\d{5})(\d{4})/,
                        "($1) $2-$3"
                    );

                } else {

                    valor = valor.replace(
                        /(\d{2})(\d{4})(\d{4})/,
                        "($1) $2-$3"
                    );

                }

                telefone.value = valor;

            });

        }


        /*
         * MÁSCARA DE CEP
         */

        if (cep) {

            cep.addEventListener("input", () => {

                let valor = cep.value.replace(
                    /\D/g,
                    ""
                );

                valor = valor.substring(0, 8);

                valor = valor.replace(
                    /(\d{5})(\d{3})/,
                    "$1-$2"
                );

                cep.value = valor;

            });

        }


        /*
         * ENVIO DO FORMULÁRIO
         */

        formulario.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                /*
                 * VALIDAÇÃO NATIVA DO HTML
                 */

                if (!formulario.checkValidity()) {

                    formulario.reportValidity();

                    if (mensagem) {

                        mensagem.textContent =
                            "Verifique os campos obrigatórios antes de enviar.";

                        mensagem.className =
                            "mensagem mensagem-erro";

                    }

                    return;

                }


                /*
                 * MENSAGEM DE SUCESSO
                 */

                if (mensagem) {

                    mensagem.textContent =
                        "Sucesso! Seu cadastro foi enviado.";

                    mensagem.className =
                        "mensagem mensagem-sucesso";

                }


                formulario.reset();

            }
        );

    }

});