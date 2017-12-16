/*蓝科企业网站系统PHP版
http://www.lankecms.com*/

$(document).ready(function(){
        //返回顶部
        $("#gototop").click(function(){
            $("html,body").animate({scrollTop :0}, 800);return false;
        });
        $("#gotocate").click(function(){
             $("html,body").animate({scrollTop:$("#categories").offset().top},800);return false;
        });

      //导航菜单
      if($(window).width()>768){
        dropdownOpen();//鼠标划过就展开子菜单
      }
      function dropdownOpen() {

          var $dropdownLi = $('li.dropdown');

          $dropdownLi.mouseover(function() {
              $(this).addClass('open');
          }).mouseout(function() {
              $(this).removeClass('open');
          });
      }

      //左侧导航   
      if ($("#firstpane .menu_body:eq(0)").text().replace(/[\r\n ]/g,"").length>0) {
        $("#firstpane .menu_body:eq(0)").show().prev().html("-").prev().addClass("left_active");
      };
      $("ul.menu_body").each(function(){
       if ($(this).text().replace(/[\r\n ]/g,"").length<=0) {$(this).prev().remove();} //去掉span
      });
      $("#firstpane span.menu_head").click(function(){
          var spanatt = $(this).next("ul.menu_body").css('display');
          if (spanatt == "block"){
              var spantext = "+";
               $(this).prev().removeClass("left_active");
          }else{
              var spantext = "-";
              $(this).prev().addClass("left_active");
          }
          $(this).html(spantext).addClass("current").next("ul.menu_body").slideToggle(300).siblings("ul.menu_body");
      });
  
});