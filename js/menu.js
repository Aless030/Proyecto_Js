var header = document.getElementById('Header')

window.addEventListener('scroll', () =>{
    var scroll = window.scrollY
    if(scroll > 10){
        header.style.backgroundColor = '#F4F6F6'
        header.style.textShadow = "0 0 4px #DBDFD1"
    }else{
        header.style.backgroundColor = 'transparent'
        header.style.textShadow = "0 0 7px #000000"
    }
})