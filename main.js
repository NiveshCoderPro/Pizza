var menu_list_array = [
    "chicken tandoori pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Vegie Pizza",
    "Veg Extravagaza Pizza"
];



function get_menu() {
    var htmldata;
    htmldata = "<ol class = 'Menu List'>"
menu_list_array.sort();
for (var i = 0; i<menu_list_array.length;i++) {
    htmldata = htmldata+'<li>'+ menu_list_array[i] + '<li>'
}
htmldata=htmldata+'<ol>';
document.getElementById("diplay_menu").innerHTML = htmldata;
}
function add_item() {
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = '<section class = "cards">';
   for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<div class = "card">' + '<img src = "pizzaImg.png">' + menu_list_array[i]; + '</li>';
       
   }
  

htmldata = htmldata+'</section>';
document.getElementById("display_addmenu").innerHTML = htmldata;
