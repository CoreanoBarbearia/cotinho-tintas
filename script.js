
const btnPassaScroll = document.querySelectorAll('.menu-produto');


btnPassaScroll.forEach(element => {
    element.addEventListener("click" , () =>{
        document.getElementById('video').play()
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