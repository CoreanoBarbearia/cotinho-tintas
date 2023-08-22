
const btnPassaScroll = document.querySelectorAll('.menu-produto');


btnPassaScroll.forEach(element => {
    element.addEventListener("click" , () =>{
        // document.getElementById('video').play()
        document.getElementById('video').volume ='0'
        
    })
});

if(window.onload){
    document.getElementById('video').pause()
    document.getElementById('video').volume ='0'
}


var box = document.querySelectorAll('.box-dicas')
box.forEach(element => {
   
    element.addEventListener("mouseover" , () =>{
        element.classList.add('s')
            var boxx = document.querySelectorAll('.box-dicas')
            
            
            boxx.forEach(element => {
                element.classList.add('r')
            });
            element.classList.remove('r')
       })

       element.addEventListener("mouseout" , () =>{
        var boxx = document.querySelectorAll('.box-dicas')
            
            boxx.forEach(element => {
                element.classList.remove('r')
                element.classList.remove('s')
            });
           
       })
    })

    
if(window.open){
    var tamanhoTela = window.innerWidth;
    if(tamanhoTela <= 500){
        document.querySelector('.inputs-dicas').style.display='block'
        document.querySelector('.inputs-dicas').style.marginTop='1em'
        document.getElementById('dois').style.display='none'
        document.getElementById('treis').style.display='none'
        document.getElementById('quatro').style.display='none'
        document.body.style.height='3000px'
        document.getElementById('video').volume ='0'
        document.querySelector('.dicas').style.height='380px'
        document.querySelector('footer').style.marginTop='0'
            var inputsDicas =  document.querySelectorAll('.inptut-dicas')
        inputsDicas.forEach(element => {
            element.addEventListener("click" , () =>{
                if(element.value === '2' ){
                    document.getElementById("titulo-dica").innerHTML= 'Agite Antes de Usar:'
                    document.getElementById("texto-dica").innerHTML= 'Antes de inserir um novo cartucho de tinta na impressora, agite-o suavemente. Isso ajuda a garantir que os pigmentos ou tintas líquidas estejam bem misturados e evita problemas de impressão, como cores desiguais.'
                }
                else if(element.value === '3' ){
                    document.getElementById("titulo-dica").innerHTML= 'Imprima Regularmente:'
                    document.getElementById("texto-dica").innerHTML= 'Se você não imprime com frequência, pode ser útil fazer impressões regulares para manter o fluxo de tinta e evitar que os cartuchos sequem. '
                }
                else if(element.value === '4' ){
                    document.getElementById("titulo-dica").innerHTML= 'Economize Tinta Quando Possível:'
                    document.getElementById("texto-dica").innerHTML= 'Para economizar tinta, use a configuração de impressão de rascunho quando a qualidade máxima não for necessária. Além disso, considere usar fontes que usam menos tinta e evite imprimir páginas com grandes áreas sólidas de cores, pois isso pode esgotar a tinta rapidamente.'
                }else{
                    document.getElementById("titulo-dica").innerHTML= 'Armazenamento Adequado:'
                    document.getElementById("texto-dica").innerHTML= 'Mantenha suas tintas de impressora em um local fresco e seco, longe da luz direta do sol e de temperaturas extremas. A exposição a condições adversas pode afetar a qualidade da tinta e sua capacidade de imprimir corretamente.'
                }
            })
        });
          
    }
    else{
        document.querySelector('.inputs-dicas').style.display='none'
        document.getElementById('dois').style.display='flex'
        document.getElementById('treis').style.display='flex'
        document.getElementById('quatro').style.display='flex'
        document.querySelector('.container-dicas').style.height='100%'
        document.body.style.height='100vh'
        document.getElementById('video').volume ='0'
    
        document.querySelector('.dicas').style.height='700px'
    }
}

function verificarTamanhoDaTela(){
    var tamanhoTela = window.innerWidth;
    if(tamanhoTela <= 500){
        document.querySelector('.inputs-dicas').style.display='block'
        document.getElementById('dois').style.display='none'
        document.getElementById('treis').style.display='none'
        document.getElementById('quatro').style.display='none'
        document.querySelector('footer').style.marginTop='0'
        document.querySelector('.dicas').style.height='400px'
        document.body.style.height='3000px'
        document.getElementById('video').volume ='0px'
    }
    else{
        document.querySelector('.inputs-dicas').style.display='none'
        document.getElementById('dois').style.display='flex'
        document.getElementById('treis').style.display='flex'
        document.getElementById('quatro').style.display='flex'
        document.querySelector('.container-dicas').style.height='100%'
        document.body.style.height='100%'
        document.getElementById('video').volume ='0'
       
        document.querySelector('.dicas').style.height='700px'
    }
}


window.addEventListener("resize", verificarTamanhoDaTela);

