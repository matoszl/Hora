hatual = new Date()
hora = hatual.getHours()
console.log('Agora são '+hora+'h')
if (hora<12){
    console.log('Bom dia!')
}else if(hora<18){
    console.log('Boa tarde!')
}else if(hora>=18) {
    console.log('Boa noite!')
}
