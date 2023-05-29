function onYolo() {
    console.log('on Yolo')
    dataLayer.push({'event': 'yolo_shopping'}) // to trigger Tag-yolo_shopping
    document.getElementById('modal-yolo').style.display='block'
}

function onContact() {
    console.log('on Contact')
    document.getElementById('modal-contact').style.display='block'
}

function onMenu() {
    console.log('on Menu')
    document.getElementById('modal-menu').style.display='block'
}