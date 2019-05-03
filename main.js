$(document).ready(function () {

$("#WindowOf1").hide();
$("#WindowOf2").hide();
$("#WindowOf3").hide();
$("#WindowOf4").hide();
$("#WindowOf5").hide();
$("#WindowOf6").hide();
$("#WindowOf7").hide();
$("#WindowOf8").hide();
$("#WindowOf9").hide();
$("#WindowOf10").hide();
$("#video").hide();


var vid8 = document.getElementById("video7");

$("#map").click(function () {

    $("#WindowOf1").show();
    $("#CloseBoxof1").show();
    $("#map").hide();
    // doing this makes sure you cant open multiple boxes at once.
    $("#music_library").hide();
    $("#instagram").hide();
    $("#DNA").hide();
    $("#health").hide();
    $("#live").hide();
    $("#highlight").hide();
    $("#twitter").hide();
    $("#email").hide();
    $("#diary").hide();
    $("#connectors").hide();
    $(".window").css("top", 102.62 + "px");
    $(".window").css("left", 707.99 + "px");
    $("#video7").show();
    vid8.play();



  });

$("#CloseBoxof1").click(function () {
  vid8.pause();

  $("#WindowOf1").hide();
  $("#CloseBoxof1").hide();
  $("#map").show();
  $("#music_library").show();
  $("#instagram").show();
  $("#DNA").show();
  $("#health").show();
  $("#live").show();
  $("#highlight").show();
  $("#twitter").show();
  $("#email").show();
  $("#diary").show();
  $("#video7").hide();
  $("#connectors").show();

  });
  var vid9 = document.getElementById("video8");

  $("#music_library").click(function () {

      $("#WindowOf2").show();
      $("#CloseBoxof2").show();
      $("#music_library").hide();
      // doing this makes sure you cant open multiple boxes at once.
      $("#map").hide();
      $("#instagram").hide();
      $("#DNA").hide();
      $("#health").hide();
      $("#live").hide();
      $("#highlight").hide();
      $("#twitter").hide();
      $("#email").hide();
      $("#diary").hide();
      $("#connectors").hide();
      $(".window").css("top", 102.62 + "px");
      $(".window").css("left", 707.99 + "px");
$("#video8").show();
      vid9.play();



    });

  $("#CloseBoxof2").click(function () {
    vid9.pause();

    $("#WindowOf2").hide();
    $("#CloseBoxof2").hide();
    $("#map").show();
    $("#music_library").show();
    $("#instagram").show();
    $("#DNA").show();
    $("#health").show();
    $("#live").show();
    $("#highlight").show();
    $("#twitter").show();
    $("#email").show();
    $("#diary").show();
    $("#video8").hide();
    $("#connectors").show();

    });

    var vid11 = document.getElementById("video10");

    $("#instagram").click(function () {

        $("#WindowOf3").show();
        $("#CloseBoxof3").show();
        $("#instagram").hide();
        // doing this makes sure you cant open multiple boxes at once.
        $("#map").hide();
        $("#music_library").hide();
        $("#DNA").hide();
        $("#health").hide();
        $("#live").hide();
        $("#highlight").hide();
        $("#twitter").hide();
        $("#email").hide();
        $("#diary").hide();
        $("#connectors").hide();
        $(".window").css("top", 102.62 + "px");
        $(".window").css("left", 707.99 + "px");
        $("#video10").show();
        vid11.play();



      });

    $("#CloseBoxof3").click(function () {
      vid11.pause();

      $("#WindowOf3").hide();
      $("#CloseBoxof3").hide();
      $("#map").show();
      $("#music_library").show();
      $("#instagram").show();
      $("#DNA").show();
      $("#health").show();
      $("#live").show();
      $("#highlight").show();
      $("#twitter").show();
      $("#email").show();
      $("#diary").show();
      $("#video10").hide();
      $("#connectors").show();

      });
      var vid3 = document.getElementById("video2");

      $("#DNA").click(function () {

          $("#WindowOf4").show();
          $("#CloseBoxof4").show();
          $("#instagram").hide();
          // doing this makes sure you cant open multiple boxes at once.
          $("#map").hide();
          $("#music_library").hide();
          $("#DNA").hide();
          $("#health").hide();
          $("#live").hide();
          $("#highlight").hide();
          $("#twitter").hide();
          $("#email").hide();
          $("#diary").hide();
          $("#connectors").hide();
          $(".window").css("top", 102.62 + "px");
          $(".window").css("left", 707.99 + "px");
          $("#video2").show();
          vid3.play();



        });

      $("#CloseBoxof4").click(function () {
        vid3.pause();

        $("#WindowOf4").hide();
        $("#CloseBoxof4").hide();
        $("#map").show();
        $("#music_library").show();
        $("#instagram").show();
        $("#DNA").show();
        $("#health").show();
        $("#live").show();
        $("#highlight").show();
        $("#twitter").show();
        $("#email").show();
        $("#diary").show();
        $("#video2").hide();
        $("#connectors").show();

        });

        var vid4 = document.getElementById("video3");

        $("#health").click(function () {

            $("#WindowOf5").show();
            $("#CloseBoxof5").show();
            $("#instagram").hide();
            // doing this makes sure you cant open multiple boxes at once.
            $("#map").hide();
            $("#music_library").hide();
            $("#DNA").hide();
            $("#health").hide();
            $("#live").hide();
            $("#highlight").hide();
            $("#twitter").hide();
            $("#email").hide();
            $("#diary").hide();
            $("#connectors").hide();
            $(".window").css("top", 102.62 + "px");
            $(".window").css("left", 707.99 + "px");
            $("#video3").show();
            vid4.play();



          });

        $("#CloseBoxof5").click(function () {
          vid4.pause();

          $("#WindowOf5").hide();
          $("#CloseBoxof5").hide();
          $("#map").show();
          $("#music_library").show();
          $("#instagram").show();
          $("#DNA").show();
          $("#health").show();
          $("#live").show();
          $("#highlight").show();
          $("#twitter").show();
          $("#email").show();
          $("#diary").show();
          $("#video3").hide();
          $("#connectors").show();

          });

          var vid7 = document.getElementById("video6");

          $("#live").click(function () {

              $("#WindowOf6").show();
              $("#CloseBoxof6").show();
              $("#instagram").hide();
              // doing this makes sure you cant open multiple boxes at once.
              $("#map").hide();
              $("#music_library").hide();
              $("#DNA").hide();
              $("#health").hide();
              $("#live").hide();
              $("#highlight").hide();
              $("#twitter").hide();
              $("#email").hide();
              $("#diary").hide();
              $("#connectors").hide();
              $(".window").css("top", 102.62 + "px");
              $(".window").css("left", 707.99 + "px");
              $("#video6").show();
              vid7.play();



            });

          $("#CloseBoxof6").click(function () {
            vid7.pause();

            $("#WindowOf6").hide();
            $("#CloseBoxof6").hide();
            $("#map").show();
            $("#music_library").show();
            $("#instagram").show();
            $("#DNA").show();
            $("#health").show();
            $("#live").show();
            $("#highlight").show();
            $("#twitter").show();
            $("#email").show();
            $("#diary").show();
            $("#video6").hide();
            $("#connectors").show();

            });

            var vid2 = document.getElementById("video1");

            $("#highlight").click(function () {

                $("#WindowOf7").show();
                $("#CloseBoxof7").show();
                $("#instagram").hide();
                // doing this makes sure you cant open multiple boxes at once.
                $("#map").hide();
                $("#music_library").hide();
                $("#DNA").hide();
                $("#health").hide();
                $("#live").hide();
                $("#highlight").hide();
                $("#twitter").hide();
                $("#email").hide();
                $("#diary").hide();
                $("#connectors").hide();
                $(".window").css("top", 102.62 + "px");
                $(".window").css("left", 707.99 + "px");
                $("#video1").show();
                vid2.play();



              });

            $("#CloseBoxof7").click(function () {
              vid2.pause();

              $("#WindowOf7").hide();
              $("#CloseBoxof7").hide();
              $("#map").show();
              $("#music_library").show();
              $("#instagram").show();
              $("#DNA").show();
              $("#health").show();
              $("#live").show();
              $("#highlight").show();
              $("#twitter").show();
              $("#email").show();
              $("#diary").show();
              $("#video1").hide();
              $("#connectors").show();

              });

              var vid10 = document.getElementById("video9");

              $("#twitter").click(function () {

                  $("#WindowOf8").show();
                  $("#CloseBoxof8").show();
                  $("#instagram").hide();
                  // doing this makes sure you cant open multiple boxes at once.
                  $("#map").hide();
                  $("#music_library").hide();
                  $("#DNA").hide();
                  $("#health").hide();
                  $("#live").hide();
                  $("#highlight").hide();
                  $("#twitter").hide();
                  $("#email").hide();
                  $("#diary").hide();
                  $("#connectors").hide();
                  $(".window").css("top", 102.62 + "px");
                  $(".window").css("left", 707.99 + "px");
                  $("#video9").show();
                  vid10.play();



                });

              $("#CloseBoxof8").click(function () {
                vid10.pause();

                $("#WindowOf8").hide();
                $("#CloseBoxof8").hide();
                $("#map").show();
                $("#music_library").show();
                $("#instagram").show();
                $("#DNA").show();
                $("#health").show();
                $("#live").show();
                $("#highlight").show();
                $("#twitter").show();
                $("#email").show();
                $("#diary").show();
                $("#video9").hide();
                $("#connectors").show();

                });

                var vid6 = document.getElementById("video5");

                $("#email").click(function () {

                    $("#WindowOf9").show();
                    $("#CloseBoxof9").show();
                    $("#instagram").hide();
                    // doing this makes sure you cant open multiple boxes at once.
                    $("#map").hide();
                    $("#music_library").hide();
                    $("#DNA").hide();
                    $("#health").hide();
                    $("#live").hide();
                    $("#highlight").hide();
                    $("#twitter").hide();
                    $("#email").hide();
                    $("#diary").hide();
                    $("#connectors").hide();
                    $(".window").css("top", 102.62 + "px");
                    $(".window").css("left", 707.99 + "px");
                    $("#video5").show();
                    vid6.play();



                  });

                $("#CloseBoxof9").click(function () {
                  vid6.pause();

                  $("#WindowOf9").hide();
                  $("#CloseBoxof9").hide();
                  $("#map").show();
                  $("#music_library").show();
                  $("#instagram").show();
                  $("#DNA").show();
                  $("#health").show();
                  $("#live").show();
                  $("#highlight").show();
                  $("#twitter").show();
                  $("#email").show();
                  $("#diary").show();
                  $("#video5").hide();
                  $("#connectors").show();

                  });

                  var vid5 = document.getElementById("video4");

                  $("#diary").click(function () {

                      $("#WindowOf10").show();
                      $("#CloseBoxof10").show();
                      $("#instagram").hide();
                      // doing this makes sure you cant open multiple boxes at once.
                      $("#map").hide();
                      $("#music_library").hide();
                      $("#DNA").hide();
                      $("#health").hide();
                      $("#live").hide();
                      $("#highlight").hide();
                      $("#twitter").hide();
                      $("#email").hide();
                      $("#diary").hide();
                      $("#connectors").hide();
                      $(".window").css("top", 102.62 + "px");
                      $(".window").css("left", 707.99 + "px");
                      $("#video4").show();
                      vid5.play();



                    });

                  $("#CloseBoxof10").click(function () {
                    vid5.pause();

                    $("#WindowOf10").hide();
                    $("#CloseBoxof10").hide();
                    $("#map").show();
                    $("#music_library").show();
                    $("#instagram").show();
                    $("#DNA").show();
                    $("#health").show();
                    $("#live").show();
                    $("#highlight").show();
                    $("#twitter").show();
                    $("#email").show();
                    $("#diary").show();
                    $("#video4").hide();
                    $("#connectors").show();

                    });








});
