function carregar(){
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    data = new Date()
    hora = data.getHours()
    msg.innerText='Agora são ' + hora + 'h'
    if(hora>=0 && hora<12){
        img.src= "manha.png"
        document.body.style.background = 'rgb(255,240,219)'
        document.getElementById('title').style.color = 'black'
        document.getElementById('footer').style.color ='black'
    }else if(hora>=12 && hora<18){
        img.src='tarde.png'
        document.body.style.background = 'rgb(201,169,141)'
    }else{
        img.src='noite.png'
        document.body.style.background = 'rgb(16,37,58)'

    }
}