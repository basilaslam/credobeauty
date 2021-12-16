import navbar from '../component/navbar.js'
import skincare from '../component/Skincare.js'
window.setInterval(sendOffer,3000);
showNav()

function showNav(){
var nav=document.getElementById('navArea') 
nav.innerHTML = navbar
}

function sendOffer(){
   var p = document.getElementById('offer_text')
    if(p.innerText == 'Last chance for Holiday delivery! Order by Monday, December 13th | detailes'){
        p.innerText = 'FREE SHIPPING on all orders! 3 Days Only. Ends 12/13.'
    }else{
        p.innerText = 'Last chance for Holiday delivery! Order by Monday, December 13th | detailes'
    }
}

var ul = document.getElementById('HeaderNavMainMenu__LinkList')
ul.innerHTML = skincare
window.onload = function(){

    var divs = document.getElementsByClassName('navAnchor')
    function showDiv(){
        var div = document.getElementById('items')
        div.style.display = 'block'
    }
    function hideDiv(){
        var div = document.getElementById('items')
        div.style.display = 'none'
    }
    console.log(divs[1]);
    for(var i = 0; i < divs.length; i++){
    console.log(divs[i].onmouseenter = showDiv);
    var item = document.getElementById('items')
    item.onmouseleave = hideDiv
    }
    };