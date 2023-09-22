function onYolo() {
    console.log('on Yolo')
    dataLayer.push({'event': 'purchase', "eventModel":{"currency": "USD"}}) // to trigger Tag-yolo_shopping
    document.getElementById('modal-yolo').style.display='block'
}

function onInitCheckout() {
    alert('init checkout!!!!')
}

function onContact() {
    console.log('on Contact')
    document.getElementById('modal-contact').style.display='block'
}

function onMenu() {
    console.log('on Menu')
    document.getElementById('modal-menu').style.display='block'
}
