
const btnPassaScroll = document.querySelectorAll('.menu-produto');


btnPassaScroll.forEach(element => {
    element.addEventListener("click" , () =>{
        document.getElementById('video').play()
        document.getElementById('video').volume ='0.5'
        
    })
});
var posicaoRolagem;
function desativaRolagem(){
    posicaoRolagem = window.scroll|| document.documentElement.scrollTop;
    
    
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
}


window.onload(
    document.getElementById('video').pause()
)


