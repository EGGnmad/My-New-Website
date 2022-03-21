const sidebarElements = document.querySelectorAll('.side-bar ul li');

function nowElement(){
    return parseInt(window.scrollY / window.innerHeight);
}

function ScrollDownTo(toElement){
    let heigth = this.window.innerHeight;

    window.scroll({
        top: heigth * toElement,
        behavior: 'smooth'
    });
}

/*resize sidebar element*/
for(var i = 0; i < sidebarElements.length; i++){
    if(i == nowElement()){
        sidebarElements[i].style.transform = 'scale(1.8)';
    } else{
        sidebarElements[i].style.transform = '';
    }
}

window.onscroll = function(){
    for(var i = 0; i < sidebarElements.length; i++){
        if(i == nowElement()){
            sidebarElements[i].style.transform = 'scale(2.2)';
        } else{
            sidebarElements[i].style.transform = '';
        }
    }
}