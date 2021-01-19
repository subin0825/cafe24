$(document).ready(function(){

  var naviJson ={
            startNavi : 0,
            naviTextMain : ["플리츠마마 소개","이벤트 1","이벤트 2", "이벤트 3", "이벤트 4"],
            naviTextMainLink : ["/NCS/mama.html","/NCS/event1.html","/NCS/event2.html", "/NCS/event3.html", "/NCS/event4.html"],
            naviTextClass : ["mama", "event1","event2","event3", "event"],
            naviAction : function(_this){
              $(_this).addClass("_thisClass");
            }

  } ////naviJson 마침
  var navilitag = "";

  /////////////////////실행문////////////////////////
  $(".title").html(naviJson);
    for(var i in naviJson.naviTextMain){
      navilitag += "<li class='"+naviJson.naviTextClass[i]+"' >";
      navilitag += "<a href='"+naviJson.naviTextMainLink[i]+"'>";
      navilitag += naviJson.naviTextMain[i]+"</a></li>";
    }
  $("#gnb").html(navilitag);

});
