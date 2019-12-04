$(document).ready(function(){
   $('.nav-toggle').on('click', function(e){
     e.preventDefault();
     $('.block-nav').toggleClass('is-open')
   })


       $(function() {

           $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
               $(this)
                   .addClass('active').siblings().removeClass('active')
                   .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
           });

       });
 })
