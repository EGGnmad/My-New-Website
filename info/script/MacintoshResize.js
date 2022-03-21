function scale(size){
    return 'scale(' + size + ')';
}

window.addEventListener('resize', function(){
    const Macintosh = this.document.querySelector('.macintosh');
    if(this.window.innerWidth <= 720){
        Macintosh.style.transform = 'translateX(-50%)' + scale(this.window.innerWidth / 600)
    } else{
        Macintosh.style.transform = 'translateX(-50%)' + scale(1.2)
    }

    if(this.window.innerHeight <= 500){
        Macintosh.style.transform = 'translate(-50%, -30%)' + scale(this.window.innerHeight / 416)
    } else{
        Macintosh.style.transform = 'translateX(-50%)' + scale(1.2)
    }
});