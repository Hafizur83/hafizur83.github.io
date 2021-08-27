// jQuery preloader
$(window).on('load', function () {
    $('#preloader').fadeOut(2000)
})

/*------------------
        Background Set
    --------------------*/
$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});
/*-----------------------
       Scroll to Menu ACtive JS
   ------------------------*/
     const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('#main_nav li, .mobile_mav li');
    
    window.addEventListener('scroll', ()=> {
        let current = '';
    
    sections.forEach( section => {
        const id= section.attributes.id;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if(pageYOffset >= (sectionTop - sectionHeight/3)){
            current = section.getAttribute('id')
            
        }  
    })
        navLi.forEach( li => {
            li.classList.remove('active');
            if(li.classList.contains(current)){
               li.classList.add('active')
               }
        })
})
/*-----------------------
       STICKY MENU JS
   ------------------------*/

var topbutton = document.getElementById("topbtn");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $("#header").addClass("sticky");
        topbutton.style.display = "block";

    } else {
        $("#header").removeClass("sticky");
        topbutton.style.display = "none";
    }
}
/*------------------
        Skill JS
    --------------------*/
$('.progress-bar').each(function () {
    const parcent = $(this).data('value')
    $(this).css('width', parcent + '%')
});

/*-----------------------
       Portfolio JS
   ------------------------*/
var portfolio = document.querySelector('.portfolio_content')
var mixer = mixitup(portfolio)
$('.venobox').venobox();
/*-----------------------
       Mobile Menu JS
   ------------------------*/
   $(document).on('click','.navbar-btn , .mobile-menu li a',function(){
       if($('#header').hasClass("mobile-nav-active")){
            $('#header').removeClass('mobile-nav-active')
       }else{
           $('#header').addClass('mobile-nav-active')
       }
    });


//SCROLL TO TOP
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}