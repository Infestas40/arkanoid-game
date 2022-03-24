
let bloque=document.getElementById('bloque')
let cantidad=0;




window.addEventListener('keydown',(e)=>{
    let tecla=e.key
    
    switch (tecla){
        case 'ArrowRight':
            cantidad+=100
            bloque.style.transform=`translateX(${cantidad}px)`
            break;
            case 'ArrowLeft':
                cantidad-=100
                bloque.style.transform=`translateX(${cantidad}px)`
                break;
              
                                                                             
    }

})











