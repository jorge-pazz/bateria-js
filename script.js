window.document.body.addEventListener('keyup', function(keyup){

    console.log(keyup.code.toLowerCase());

    let tecla = window.document.querySelector(`#${keyup.code.toLowerCase()}`);
    
    if(tecla){

        tecla.classList.add('active');
        //tecla.style.color = '#FF0';
        //tecla.style.border = '2px solid #FF0';


        teclaSom = window.document.querySelector(`#s_${keyup.code.toLowerCase()}`);
        teclaSom.currentTime = 0;
        teclaSom.play();

            setTimeout(function(){

                tecla.classList.remove('active');
                //tecla.style.color = '#FFF';
                //tecla.style.border = '2px solid #FFF';

            }, 100);

    }


});



