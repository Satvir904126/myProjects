//// global function to get id and class of html css
const get_element = (ele) => document.querySelector(ele)
const get_elements = (ele) => document.querySelectorAll(ele)
console.log(Date.now());

////product images array 
const json = `[{ "img": "images/food1_.jpg","name": "Strawberry Jam","price": "200", "cat":"food"},
 { "img": "images/food2.jpg","name": "Cadbury","price": "100" ,"cat":"food"},
 { "img": "images/food3.jpg","name": "Spicy Noodle","price": "180", "cat":"food"},
 

 { "img": "images/electronic1.jpg","name": "Laptop","price": "280", "cat":"electronics"},
 { "img": "images/electronic2.png","name": "Smart Watch|Headphone","price": "210", "cat":"electronics"},
 { "img": "images/electronic3.jpg","name": "New Headphone","price": "280", "cat":"electronics"},
 
 { "img": "images/sale1.png","name": "Winter Jacket","price": "180", "cat":"sales"},
 { "img": "images/sale2.jpg","name": "Classic Blazer","price": "230", "cat":"sales"},
 { "img": "images/sale3.jpg","name": "Formal Shirt","price": "100", "cat":"sales"},
 { "img": "images/sale4.jpg","name": "Gift Hamper","price": "330", "cat":"sales"},
 { "img": "images/sale5.png","name": "Choco Bars","price": "280", "cat":"sales"},
 { "img": "images/sale6.jpeg","name": "Sweet Sauce","price": "480","cat":"sales"},
 { "img": "images/sale7.jpg","name": "Digital Camera","price": "90", "cat":"sales"},
 { "img": "images/sale8.jpg","name": "High Tech Camera","price": "80", "cat":"sales"},
 { "img": "images/sale9.jpg","name": "Smart Watch","price": "30", "cat":"sales"},


 { "img": "images/new.jpg","name": "Cute Headphone","price": "230", "cat":"new"},
 { "img": "images/new2_.jpg","name": "Headphone","price": "190","cat":"new"},
 { "img": "images/new4.jpg","name": "Girly Dress","price": "220", "cat":"new"},
 { "img": "images/new5.jpg","name": "Floral Dress","price": "130", "cat":"new"},
 { "img": "images/new6.jpg","name": "Winter Sweater","price": "180", "cat":"new"},
 { "img": "images/ne3.jpg","name": "Stylish Headphone","price": "340", "cat":"new"},

 { "img": "images/clothes1.png","name": "Stylish Blazer","price": "100", "cat":"clothes"},
 { "img": "images/clothes2.jpg","name": "Party Dress","price": "200", "cat":"clothes"},
 { "img": "images/clothes3.jpg","name": "Casual Wear","price": "220", "cat":"clothes"}]`


const login_data = `[{ "username": "satvir@gmail.com","password": "1234", "name":"satvir "},
 { "username": "rajveer@gmail.com","password": "1234", "name":"Rajveer "},
 { "username": "karanveer@gmail.com","password": "1234", "name":"Karanveer "},
 { "username": "amanpreet@gmail.com","password": "1234", "name":"Amanpreet "}]`


let products = JSON.parse(json)

let login_user = JSON.parse(login_data)

var product = products;
print_product(product);

//set the model over body login or cart
var opacity = get_element(".opacity_full_page")

function setOpacity() {
    opacity.style = "z-index: 1";
    opacity.style = "background: #0000008a"
    document.getElementsByTagName("body")[0].style = "overflow:hidden";
}

function removeOpacity() {
    get_element(".opacity_full_page").style = "background:none"
    document.getElementsByTagName("body")[0].style = "overflow:''";
}

// Login form show hide
function openForm() {
    console.log(document.getElementById("myForm").style = "display: block ");
    document.getElementById("myForm").style = "transform: translate(-50%, -50%) scale(1)";

    // hide by click anywhere on window
    modal = document.getElementById("myForm");
    window.onclick = function(event) {

            if (!event.target.matches(".login_btn_cancel")) {
                if (event.target == modal || event.target.matches(".login") || $(event.target).parents("#myForm").length) {
                    setOpacity();
                } else {

                    modal.style.display = "none";
                    removeOpacity();
                }
            }
        }
        // if (session_user != null && session_pass != null) {

    //     alert("You are already loged in")
    //         // hide the login div after login 
    //     document.getElementById("myForm").style.display = "none";


    // } else {
    //     console.log("ggg");

    //     console.log(document.getElementById("myForm").style = "display: block ");
    //     document.getElementById("myForm").style = "transform: translate(-50%, -50%) scale(1)";

    // }
}

function closeForm() {
    var background_opacity = get_element('.Wrapper')

    document.getElementById("myForm").style.display = "none";
    background_opacity.style.opacity = 1;


}

//// Login FUnctionality

function submitForm(event) {
    event.preventDefault();
    let userName = get_element('.username').value.toLowerCase().trim()
    let password = get_element('.password').value

    sessionStorage.setItem("user", userName);
    sessionStorage.setItem("pass", password);
    let session_user = sessionStorage.getItem("user")
    let session_pass = sessionStorage.getItem("pass")


    for (let i = 0; i < login_user.length; i++) {
        console.log((session_user == login_user[i].username && session_pass == login_user[i].password));

        if (session_user == login_user[i].username && session_pass == login_user[i].password) {
            console.log(session_user, session_pass);

            console.log("login succes  " + session_user)


            // hide the login div after login 
            document.getElementById("myForm").style.display = "none";


            get_element('.username').value = null
            get_element('.password').value = null
            location.reload();
            break;
        }

        if (session_user != login_user[i].username && session_pass != login_user[i].password) {
            console.log("login Failed");
            console.log(login_first.style = 'display:block');
            setTimeout(() => {
                login_first.style.display = 'none'
            }, 1500);

            console.log(get_element(".loging_first").innerHTML = " login failed try again!")
            console.log(session_user);

            document.getElementById("myForm").style.display = "none";

        }
    }




    console.log("login faild")
    get_element('.username').value = null
    get_element('.password').value = null
}




////// change color 
let colors = ['00B224', '673AB7', '607D1B', '785548', '019688', '3F51V5'];
let selectedColor = colors[Math.floor(Math.random() * colors.length)];
console.log(selectedColor)

window.onload = function() {
    for (let i = 0; i < login_user.length; i++) {

        // hide login button if user is login,Print current user name

        if (session_user == login_user[i].username && session_pass == login_user[i].password) {
            this.sessionStorage.setItem("userName", login_user[i].name)
            user_name = sessionStorage.getItem("userName")

            console.log(get_element(".login").style.display = "none")
            console.log(get_element(".nav_h1").innerHTML += `<h3 class="login_name"> ${user_name} logged in</h3>`)

        }

        get_element('body').style.background = 'linear-gradient(360deg, rgba(0,0,0,0) 0%, ' + '#' + selectedColor + ' 100%)';
        get_element('footer').style.background = 'linear-gradient(180deg, ' + '#' + selectedColor + ' 0%, rgba(0,0,0,0) 100%';


        if (session_user != login_user[i].username && session_pass != login_user[i].password) {
            console.log(get_element(".logout_btn").style.display = "none")

        }
    }
}


function logoutForm() {

    sessionStorage.removeItem("user");
    sessionStorage.removeItem("pass");
    removeAllCart()
    console.log(session_user, session_pass);
    location.reload();
}



let session_user = sessionStorage.getItem("user")
let session_pass = sessionStorage.getItem("pass")
console.log(session_user, session_pass);

//navbar


const navbar = () => {
        const burger = get_element(".burger");
        const links = get_elements(".nav_links input");
        const nav = get_element(".nav_links");



        burger.addEventListener('click', () => {
            nav.classList.toggle("nav-active");
            addRemoveStyle();
        });
        links.forEach((item, index) => {
            item.addEventListener('click', () => {

                nav.classList.toggle("nav-active");
                console.log("pressed" + index);
                addRemoveStyle();
            });
        });
    }
    // hide the nav bar

const addRemoveStyle = () => {
    const links = get_elements(".nav_links input");

    links.forEach((link, index) => {
        if (link.style.animation) {
            // link.style.animation = `navLinhHide 0.5s ease forwards ${index / 8}s `;
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8}s `;
            console.log(index / 8);
            console.log(link.class);

        }

    });
}

navbar();

const borderShadow = get_element('.img_grid').style.boxShadow = 'inset 15px 11px 50px 6px green';
console.log(borderShadow);

///// print the images
function print_product(product) {
    let img = get_element(".product_img")

    for (key in product) {

        let img_src = src = product[key].img;
        let img_name = src = product[key].name;
        let img_price = src = product[key].price;
        let category = src = product[key].cat;
        // console.log( category );
        img.innerHTML += (`<div class="img_grid  ${category} all" id="cat${key}" >
     <img  src = "${img_src}"> 
     <h2>${img_name}  </h2>
     <h3>$${img_price}  </h3> 
     <button class="add_cart" onclick="addCart('cat${key}')" >Add to Cart</button></div>`);
    }
}

let all_cart_elements = get_element('.img_grid').innerText
console.log(all_cart_elements);



//////add cart function
item_counter = get_element(".item_counter");
let counter = 0
    // let total = 0
let productStore = [];
// let totalSession = 0
// increment the counter value and save it into the session
sessionStorage.setItem("counter", counter);
counterCart = sessionStorage.getItem("counter")



function addCart(event) {

    let product_cart = get_elements('.img_grid')
    let add_product_cart = get_element('.cart_prod_inline')
    for (let i = 0; i < product_cart.length; i++) {
        let all_cart_elements = get_elements(`#cat${i}`)
        let product = product_cart[i];

        let name = product.querySelector('h2').innerText;
        let price = product.querySelector('h3').innerText;


        let cart_button = get_element(`#cat${i}`).id


        if (event == cart_button) {



            item_counter = get_element(".item_counter").innerHTML = ++counterCart;

            add_product_cart = get_element('.cart_prod_inline')

            productStore.push(`<table id="table${Date.now()}"><tr> <th>Name</th>
            <td> ${name}</td </tr><tr> <th>Price</th><td>${price} </td></tr>
            <tr><td><button class="removeOneCart" id="remove${Date.now()}" onclick="removeOneCart(remove${Date.now()},table${Date.now()},${price.substr(1)})">Remove Cart </button></td></tr></tbody></table>`)
            console.log(price = price.substr(1))

            total = parseInt(price, 10) + parseInt(total, 10)

        }
    }



    totalPrice();
    printTable();

}



// print table for cart product
function printTable() {


    add_product_cart = get_element('.cart_prod_inline')
    add_product_cart.innerHTML += productStore[productStore.length - 1];
    sessionStorage.setItem("table", add_product_cart.innerHTML);

}
//total price of products
total = sessionStorage.getItem("stored_product")
    // total price print
let total_price = get_element(".total_price")
total_price.innerHTML = `<h3>Total Price: $</h3><h3>${total }</h3>  `
let removeAllCartButton = get_element(".removeAllCartButton")

if (total != 0) {
    removeAllCartButton.innerHTML = `<input type="button" class="removeAllCart" value="Remove All" onclick="removeAllCart()">`
}

function totalPrice() {
    console.log("totalprice" + total + total == 0);

    total_price.innerHTML = `<h3>Total Price: $</h3><h3>${total }</h3>  `
    sessionStorage.setItem("stored_product", total);
    if (total == 0) {
        removeAllCartButton.innerHTML = " "
    } else {
        removeAllCartButton.innerHTML = `<input type="button" class="removeAllCart" value="Remove All" onclick="removeAllCart()">`

    }
}

// cart element show in cart div through session
let table = sessionStorage.getItem("table")
add_product_cart = get_element('.cart_prod_inline')
add_product_cart.innerHTML = table;


var tableList = document.getElementsByTagName("table");
var counterCart = sessionStorage.setItem("counter", tableList.length);
var counterCart = sessionStorage.getItem("counter")
item_counter = get_element(".item_counter").innerHTML = counterCart
    // item_counter.innerHTML += counterCart;


console.log(counterCart);
console.log(tableList.length);

//remove cart item one by one

function removeOneCart(btnId, tableId, price) {
    console.log(btnId);

    console.log(event.target.id == btnId.id);

    let add_product_cart = get_element('.cart_prod_inline')
        // let price = product.querySelector('h3').innerText;

    if (event.target.id == btnId.id) {
        var b = document.getElementById(`${tableId.id}`);
        console.log(b);
        b.parentNode.removeChild(b);

    }
    console.log(price);
    total = total - price
    console.log(total);

    sessionStorage.setItem("table", add_product_cart.innerHTML);
    sessionStorage.setItem("stored_product", total);
    item_counter = get_element(".item_counter").innerHTML = --counterCart;


    totalPrice();
}



//////remove alll cart items
function removeAllCart() {
    sessionStorage.removeItem("table");
    sessionStorage.removeItem("counter");
    sessionStorage.removeItem("stored_product");
    sessionStorage.setItem("stored_product", 0);

    location.reload();
    console.log("remove products");

}




///////// show cart list in cart menu
show_list = get_element('.list_cart')
    //cart_empty = get_element(".cart_prod_inline").innerHTML
login_first = get_element('.loging_first')

function show_catr() {
    for (let i = 0; i < login_user.length; i++) {

        if (session_user != login_user[i].username && session_pass != login_user[i].password) {
            console.log(login_first.style = 'display:block')
                //console.log(login_first.style = "animation: .1s linear 1s 4.9 alternate slidein");

            setTimeout(() => {
                login_first.style.display = 'none'
            }, 1000);

        } else {
            console.log(show_list.style = 'visibility: visible;');

        }
    }
}




////close cart list

for (let i = 0; i < login_user.length; i++) {
    var background_opacity = get_element('.Wrapper')

    if (session_user == login_user[i].username && session_pass == login_user[i].password) {
        window.onclick = function(e) {

            if (e.target == show_list || e.target.matches(".fa-shopping-cart") || e.target.matches(".removeOneCart") || $(e.target).parents(".list_cart").length) {
                // background_opacity.style.opacity = 0.3;
                setOpacity();
            }
            // else if ((background_opacity.style.opacity = 1) == 1) {


            // }
            else {
                show_list.style.display = "none";
                removeOpacity(); // document.getElementsByTagName("body")[0].style = "overflow:''"


            }
        }

    };
}


// Search products 
function search(input) {
    let userInput = input.value.trim().toLowerCase();
    let products = document.querySelectorAll('.img_grid')
    console.log(products)
    products.forEach(product => {
        let name = product.querySelector('h2').innerText.toLocaleLowerCase();
        let price = product.querySelector('h3').innerText;
        if ((price + " " + name).includes(userInput)) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    })
}


//FILTER FUNCTION

function filterSelection(input) {

    let products = document.getElementsByClassName('img_grid');


    for (let i = 0; i < products.length; i++) {
        let pro = products[i];

        if (pro.classList.contains(input)) {
            pro.style.display = 'block'
        } else {
            pro.style.display = 'none'
        }
    }
}

// Scroll-Top Function

let mybutton = document.getElementById("myBtn");


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}