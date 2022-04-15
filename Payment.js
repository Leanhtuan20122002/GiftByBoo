let cart_items = document.getElementById("cart_items");
let ListCart = JSON.parse(localStorage.getItem("ListCart"));
let area_input = document.getElementById("area_input");
let coupon_input = document.getElementById("coupon_input");
let coupon_btn = document.getElementById("coupon_btn");
let total = document.getElementById("total");

let ship_cost = document.getElementById("ship_cost");
let discount = document.getElementById("discount");

localStorage.setItem("ShipCost", 0);
let ShipCost = JSON.parse(localStorage.getItem("ShipCost"));

localStorage.setItem("PdPrice" , 0);
let PdPrice = JSON.parse(localStorage.getItem("PdPrice"));
ListCart.forEach(function(fr) {
    PdPrice = (PdPrice - 0) + (fr.price - 0);
    localStorage.setItem("PdPrice", PdPrice);
})

area_input.addEventListener("change", () => {
    
    if(area_input.value == "0") {
        ship_cost.innerText = 25000;
        ShipCost = 25000;
        localStorage.setItem("ShipCost", ShipCost);
        total.innerText = (PdPrice - 0) + (ShipCost - 0);
    } else if(area_input.value == "1") {
        ship_cost.innerText = 50000;
        ShipCost = 50000;
        localStorage.setItem("ShipCost", ShipCost);
        total.innerText = (PdPrice - 0) + (ShipCost - 0);
    }
})


total.innerText = (PdPrice - 0) + (ShipCost - 0);

ListCart.forEach(function(pr, index) {
    let html = `<li id="cart_item_${index}_list" class="cart_items_list">
    <div class="li_name">
        <p>${pr.name}</p>
    </div>
    <div class="li_soluong">
        <button id="pd_minus_on_list_cart_btn${index}"><i class="fa-solid fa-minus"></i></button>
        <p id="pd_${index}_soluong">${pr.soluong}</p>
        <button id="pd_plus_on_list_cart_btn${index}"><i class="fa-solid fa-plus"></i></button>
    </div>
    <div class="li_delete">
        <button id="pd_delete_on_list_cart_btn${index}"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    </li>`
    cart_items.insertAdjacentHTML("beforeend", html);

    let pd_delete = document.getElementById(`pd_delete_on_list_cart_btn${index}`);
    pd_delete.addEventListener("click", () => {
        let cart_li = document.getElementById(`cart_item_${index}_list`);
        cart_items.removeChild(cart_li);

        PdPrice = PdPrice - pr.price;
        localStorage.setItem("PdPrice", JSON.stringify(PdPrice));
        total.innerText = (PdPrice - 0) + (ShipCost - 0);

        RemoveClick(ListCart, pr.id);
        localStorage.setItem("ListCart", JSON.stringify(ListCart));

    });

    let pd_minus = document.getElementById(`pd_minus_on_list_cart_btn${index}`);
    pd_minus.addEventListener("click", () => {
        let pd_soluong = document.getElementById(`pd_${index}_soluong`);
        pd_soluong.innerText = (pd_soluong.innerText - 0) - 1;

        PdPrice = PdPrice - (pr.price / pr.soluong);
        localStorage.setItem("PdPrice", PdPrice);
        total.innerText = ((PdPrice - 0) + (ShipCost - 0));

        pr.price = (pr.price / pr.soluong) * ((pr.soluong - 0) - 1);
        pr.soluong = (pr.soluong - 0) - 1;
        if(pr.soluong <= 0) {
            let cart_li = document.getElementById(`cart_item_${index}_list`);
            cart_items.removeChild(cart_li);
            RemoveZero(ListCart);
            localStorage.setItem("ListCart", JSON.stringify(ListCart));
        }
        localStorage.setItem("ListCart", JSON.stringify(ListCart));
    });

    let pd_plus = document.getElementById(`pd_plus_on_list_cart_btn${index}`);
    pd_plus.addEventListener("click", () => {
        let pd_soluong = document.getElementById(`pd_${index}_soluong`);
        pd_soluong.innerText = (pd_soluong.innerText - 0) + 1;

        PdPrice = PdPrice + (pr.price / pr.soluong);
        localStorage.setItem("PdPrice", PdPrice);
        total.innerText = (PdPrice - 0) + (ShipCost - 0);

        pr.price = (pr.price / pr.soluong) * ((pr.soluong - 0) + 1);
        pr.soluong = (pr.soluong - 0) + 1;
        localStorage.setItem("ListCart", JSON.stringify(ListCart));
    });

});

function RemoveClick(SP, id) {
    SP.forEach(function(pr, index) {
        if(pr.id == id) {
            SP.splice(index, 1);
        }
    })
}

function RemoveZero(SP) {
    SP.forEach(function(pr, index) {
        if(pr.soluong<=0) {
            SP.splice(index, 1);
        }
    })
}

let buyBtn = document.getElementById("buy_btn");
let thanksScreen = document.getElementById("ThanksScreen");
let thanksBtn = document.getElementById("thanks_close");
let thanks_overlay = document.getElementById("allOverlay");

buyBtn.addEventListener("click", () => {
    thanksScreen.style.display = "block";
    localStorage.removeItem("ListCart");
    localStorage.removeItem("PdPrice");
})

thanksBtn.addEventListener("click", () => {
    thanksScreen.style.display = "none";
    location.reload();
})

thanks_overlay.addEventListener("click", () => {
    thanksScreen.style.display = "none";
    location.reload();
})