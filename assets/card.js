let buttons = document.querySelectorAll('.header-right button')
for( let btn of buttons){
    btn.onclick = function(e){
        e.preventDefault();
         
    }
}