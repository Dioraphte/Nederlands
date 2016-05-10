$(document).ready(function() {

  $(".start").click(function() {
    $(".intro").fadeOut("fast");
    setTimeout(function() {
      $(".choose").css("visibility", "visible");
    }, 300);
  });

  $(".nextchoose").click(function() {
    $(".wii-title").fadeOut("fast");
    $(".wii-main").fadeOut("fast");
    $(".buttons").fadeOut("fast");
    setTimeout(function() {
      $(".wii-choose").css("visibility", "visible");
    }, 300);
  });

  $(".wii-chooser").click(function() {

    var randomNumber = Math.random();

    if (randomNumber <= 0.167) {
      $(".wii-chooser").html("&#9856;");
    } else if (randomNumber > 0.167 && randomNumber <= 0.333) {
      $(".wii-chooser").html("&#9857;");
    } else if (randomNumber > 0.333 && randomNumber <= 0.5) {
      $(".wii-chooser").html("&#9858;");
    } else if (randomNumber > 0.5 && randomNumber <= 0.667) {
      $(".wii-chooser").html("&#9859;");
    } else if (randomNumber > 0.667 && randomNumber <= 0.833) {
      $(".wii-chooser").html("&#9860;");
    } else if (randomNumber > 0.833 && randomNumber <= 1) {
      $(".wii-chooser").html("&#9861;");
    }

  });

  $(".chooser").click(function() {

    var randomNumber = Math.random();

    if (randomNumber <= 0.043) {
      $(".chooser").html("Nikai");
    } else if (randomNumber > 0.043 && randomNumber <= 0.087) {
      $(".chooser").html("Aaron");
    } else if (randomNumber > 0.087 && randomNumber <= 0.130) {
      $(".chooser").html("Manouk");
    } else if (randomNumber > 0.130 && randomNumber <= 0.174) {
      $(".chooser").html("Wick");
    } else if (randomNumber > 0.174 && randomNumber <= 0.217) {
      $(".chooser").html("Joshua");
    } else if (randomNumber > 0.217 && randomNumber <= 0.261) {
      $(".chooser").html("Myrthe");
    } else if (randomNumber > 0.261 && randomNumber <= 0.304) {
      $(".chooser").html("Lidewij");
    } else if (randomNumber > 0.304 && randomNumber <= 0.348) {
      $(".chooser").html("Wybe");
    } else if (randomNumber > 0.348 && randomNumber <= 0.391) {
      $(".chooser").html("Teije");
    } else if (randomNumber > 0.391 && randomNumber <= 0.435) {
      $(".chooser").html("Thijs");
    } else if (randomNumber > 0.435 && randomNumber <= 0.478) {
      $(".chooser").html("Anne");
    } else if (randomNumber > 0.478 && randomNumber <= 0.522) {
      $(".chooser").html("Sanne");
    } else if (randomNumber > 0.522 && randomNumber <= 0.565) {
      $(".chooser").html("Anja");
    } else if (randomNumber > 0.565 && randomNumber <= 0.609) {
      $(".chooser").html("Inez");
    } else if (randomNumber > 0.609 && randomNumber <= 0.652) {
      $(".chooser").html("Philip");
    } else if (randomNumber > 0.652 && randomNumber <= 0.696) {
      $(".chooser").html("Olivia");
    } else if (randomNumber > 0.696 && randomNumber <= 0.739) {
      $(".chooser").html("Yassine");
    } else if (randomNumber > 0.739 && randomNumber <= 0.783) {
      $(".chooser").html("Gijs");
    } else if (randomNumber > 0.783 && randomNumber <= 0.826) {
      $(".chooser").html("Ment");
    } else if (randomNumber > 0.826 && randomNumber <= 0.870) {
      $(".chooser").html("Quirine");
    } else if (randomNumber > 0.870 && randomNumber <= 0.913) {
      $(".chooser").html("Sil");
    } else if (randomNumber > 0.913 && randomNumber <= 0.957) {
      $(".chooser").html("Imani");
    } else if (randomNumber > 0.957 && randomNumber <= 1) {
      $(".chooser").html("Dal&iacute;");
    }
  });

});
