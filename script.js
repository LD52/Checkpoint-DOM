
let plus= document.querySelector('.plus');
plus.addEventListener('click', increase);
function increase() {
    document.querySelector(".howmuch").value = parseInt(document.querySelector(".howmuch").value) + 1; acc()
}

let min= document.querySelector(".minus");
min.addEventListener('click', decrease);
function decrease(){
    if(document.querySelector(".howmuch").value > 0){
         document.querySelector(".howmuch").value= parseInt(document.querySelector(".howmuch").value) -1; acc()
    }
}
function acc(){
let price = parseInt(document.querySelector(".prix").innerText);
let qty =parseInt(document.querySelector(".howmuch").value);
let multi = price * qty;

    document.querySelector(".under").innerHTML = multi + 'fr';
}

let bouton = document.querySelector(".btn")
bouton.addEventListener("click", addproduct)

function addproduct(){
    let price = parseInt(document.querySelector(".prix").innerText)
    document.querySelector(".square").innerHTML += '<tr class="square"><td class="img"><img src="#" alt="photo.png"></td><td class="deux"><h4 class="name">sac de riz</h4><h4 class="delete">Supprimer</h4></td><td><div class="select"><button class="minus"> - </button><input class="howmuch" type="text" readonly placeholder="put it the unit" value="1"><button class="plus"> + </button></div> </td><td class="unit"><div class="prix"><h3>15000</h3> </div><div class="under"><h3>0</h3></div></td></tr>'

}

