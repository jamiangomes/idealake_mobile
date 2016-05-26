$(function(){
   set_side_nav(); 
    
});


function set_side_nav(){
    var menu = '<nav class="black">'+
        '<ul class="right hide-on-med-and-down">'+
        '</ul>'+
        '<ul id="slide-out" class="side-nav">'+
        '<li class="black sidenavlogo"><img src="http://www.idealake.com/images/logo.png" alt=""></li> '+
        '<li class="black sidenavlogotext"><img src="http://www.idealake.com/images/logo_text.png" alt=""></li>'+
        '<li><i class="material-icons left sidenavigicon">view_list</i><a href="work.html">Work</a></li>'+
        '<li><i class="material-icons left sidenavigicon">settings</i><a href="capabilities.html">Capabilities</a></li>'+
        '<li><i class="material-icons left sidenavigicon">description</i><a href="aboutus.html">About us</a></li>'+
        '<li><i class="material-icons left sidenavigicon">email</i><a href="contactus.html">Contact us</a></li>'+
        '</ul>'+
        '<a href="#" data-activates="slide-out" class="button-collapse"><i style="margin-left:10px" class="material-icons">reorder</i></a>'+
        '</nav>';
    
     $('body').prepend(menu);
    
     $(".button-collapse").sideNav();
     //$(".button-collapse").sideNav('show');
    
}