




var box = document.querySelectorAll('.box-dicas')
box.forEach(element => {

    element.addEventListener("mouseover", () => {
        element.classList.add('s')
        var boxx = document.querySelectorAll('.box-dicas')


        boxx.forEach(element => {
            element.classList.add('r')
        });
        element.classList.remove('r')
    })

    element.addEventListener("mouseout", () => {
        var boxx = document.querySelectorAll('.box-dicas')

        boxx.forEach(element => {
            element.classList.remove('r')
            element.classList.remove('s')
        });

    })
})


var inputsDicas = document.querySelectorAll('.inptut-dicas')
inputsDicas.forEach(element => {
    element.addEventListener("click", () => {

        if (element.value === '1') {
            document.getElementById("titulo-dica").innerHTML = 'Armazenamento Adequado:'
            document.getElementById("texto-dica").innerHTML = 'Mantenha suas tintas de impressora em um local fresco e seco, longe da luz direta do sol e de temperaturas extremas. A exposição a condições adversas pode afetar a qualidade da tinta e sua capacidade de imprimir corretamente.'
        }
        else if (element.value === '2') {
            document.getElementById("titulo-dica").innerHTML = 'Agite Antes de Usar:'
            document.getElementById("texto-dica").innerHTML = 'Antes de inserir um novo cartucho de tinta na impressora, agite-o suavemente. Isso ajuda a garantir que os pigmentos ou tintas líquidas estejam bem misturados e evita problemas de impressão, como cores desiguais.'
        }
        else if (element.value === '3') {
            document.getElementById("titulo-dica").innerHTML = 'Imprima Regularmente:'
            document.getElementById("texto-dica").innerHTML = 'Se você não imprime com frequência, pode ser útil fazer impressões regulares para manter o fluxo de tinta e evitar que os cartuchos sequem. '
        }
        else if (element.value === '4') {
            document.getElementById("titulo-dica").innerHTML = 'Economize Tinta Quando Possível:'
            document.getElementById("texto-dica").innerHTML = 'Para economizar tinta, use a configuração de impressão de rascunho quando a qualidade máxima não for necessária. Além disso, considere usar fontes que usam menos tinta e evite imprimir páginas com grandes áreas sólidas de cores, pois isso pode esgotar a tinta rapidamente.'
        }
    })
});


window.addEventListener("resize", verificarTamanhoDaTela);

