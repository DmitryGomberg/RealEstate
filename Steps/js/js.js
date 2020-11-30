$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        centerModes: false,
        lazyLoad: true,
    });
});

document.querySelector('.tabs_items').addEventListener("click", fTabs);
document.querySelector('.inner_tabs_top').addEventListener("click", inner_fTabs);

function fTabs (event){
    console.log(event);
    if(event.target.className == 'tab_h'){
        var dataTab = event.target.getAttribute('data-tab');
        var TabH = document.getElementsByClassName('tab_h');
        for (var i = 0; i < TabH.length; i++){
            TabH[i].classList.remove('active');
        }
        
        event.target.classList.add('active');
        
        var tabBody = document.getElementsByClassName('tab_b');
        for(var i = 0; i< tabBody.length; i++){
            if(dataTab == i){
                tabBody[i].style.display = 'flex';
                tabBody[i].classList.add('active_TAB');
            }
            else
            {
                tabBody[i].style.display = 'none';
                tabBody[i].classList.remove('active_TAB');
            }
        }
       }
}








function inner_fTabs (event){
    console.log(event);
    if(event.target.className == 'inner_tab_h'){
        var dataTab = event.target.getAttribute('data-inner-tab');
        var TabH = document.getElementsByClassName('inner_tab_h');
        for (var i = 0; i < TabH.length; i++){
            TabH[i].classList.remove('inner_active');
        }
    
        
        event.target.classList.add('inner_active');
        
        var tabBody = document.getElementsByClassName('inner_tab_b');
        for(var i = 0; i < tabBody.length; i++){
            if(dataTab == i){
                tabBody[i].style.display = 'block';
            }
            else
            {
                tabBody[i].style.display = 'none';
            }
        }
       }
}


function Form(){
    var formToLogIn = document.getElementById("form_to_sign");
    formToLogIn.style.display = 'flex';
}

function Close(){
    var formToLogIn = document.getElementById("form_to_sign");
    formToLogIn.style.display = 'none';
}

function Sign(){
    var formToLogIn = document.getElementById("form_to_sign");
    formToLogIn.style.display = 'none';
    alert("You have successfully logged in");
}

document.getElementById('menu_img').addEventListener("click", showMenu);

function showMenu(){
    
    var tabsitems = document.getElementsByClassName("tabs_items").style.display = 'block';
    
   
}



$(function(){
    $('#menu_img').on('click', function(){
        $('#tabs_items').slideToggle();
        $('.phone_number').slideToggle();
    })
});



























