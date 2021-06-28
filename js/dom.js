let list = [
    ["Chocolate Truffles", 34.99],
    ["pecan caramel duet", 14.99],
    ["chocolate covered", 28.99]
];


let html = "";
for (let i = 0; i < list.length; i++) {
    html += "<tr id=" +"tr"+ i + ">"
    html += "<td>"
    html += list[i][0];
    html += "</td>"
    html += "<td>"
    html += "$" + list[i][1];
    html += "</td>"
    html += "<td>"
    html += "<button id=" + i + " class='add-cart'>"
    html += "Them"
    html += "</button>"
    html += "</td>"
    html += "</tr>"

}
document.getElementById("table1").innerHTML = html


let button = document.getElementsByTagName("button");
let cart = [];
let html1 = "";
let total = 0;


function showCart(cart) {
    for (let i = 0; i < cart.length; i++) {
        html1 += "<tr>"
        html1 += "<td>"
        html1 += cart[i][0];
        html1 += "</td>"
        html1 += "<td>"
        html1 += "$" + cart[i][1];
        html1 += "</td>"
        html1 += "<td>"
        html1 += "<button id=" + i + " class='delete-cart'>"
        html1 += "xoa"
        html1 += "</button>"
        html1 += "</td>"
        html1 += "</tr>"

        total += cart[i][1];
    }
    document.getElementById("table2").innerHTML = html1
    document.getElementById('result').innerHTML = "$" + total;
}

$(document).ready(function () {
    $('.add-cart').click(function () {
        let id = $(this).attr('id');
        let txt = "#tr" + id
        $(txt).css("color" , "red")
        let product = list[id];
        cart.push(product);
        html1 = "";
        total = 0;
        showCart(cart);
    })

    $('.delete-cart').click(function () {
        let id = $(this).attr('id');
        cart.splice(id, 0);
    });
})








