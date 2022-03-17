function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
msg.innerHTML = `Bom dia! agora são <strong>${hora}</strong> horas.`
if (hora >= 0 && hora <12) {
    img.src = 'fotomanha.png'
    document.body.style.background = '#009fff'
} else if (hora >= 12 && hora <18) {
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
    msg.innerHTML = `Boa tarde! agora são <strong>${hora}</strong> horas`
} else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
    msg.innerHTML = `Boa noite! agora são <strong>${hora}</strong> horas`
}
}
