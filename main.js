var tabOpen = [0,0,0];
var currentResume = 1;
var expanded = false;
// Check if Mobile // 
window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function handleAboutMe(open, mobile) {
    if (mobile){
        if (open){
            //Image
            $("#headerOne").append("<img class='item' style='position:absolute; left:20px; top: 50px' src='assets/me.png' height='175px' width='175px'>");
            //Name
            $("#headerOne").append("<h1 class='item' style='position:absolute; right:20px; top:205px'>Seth Kujawa</h1>");
            //Description
            $("#headerOne").append("<h5 class='item' style='position:absolute;  right:20px; top:255px'>CS Major at the University of Maryland 2021</h5>");

            $("#headerOne").append("<p class='item' style='position:absolute;  right:20px; top:350px'>Website under development </p>");

            //Facebook
            $("#headerOne").append("<a target='_blank' href='https://www.facebook.com/seth.kujawa'><img class='item social' style='position:absolute;  opacity: 0.75; left:20px; bottom: 10px' src='assets/facebook.png' height='50px' width='50px'></a>");
            //Instagram
            $("#headerOne").append("<a target='_blank' href='https://www.instagram.com/seth_kujawa/?hl=en'><img class='item social' style='position:absolute; opacity: 0.75; left:90px; bottom: 10px' src='assets/instagram.png' height='50px' width='50px'></a>");
            //Github
            $("#headerOne").append("<a target='_blank' href='https://github.com/seth0808'><img class='item social' style='position:absolute; opacity: 0.75; left:160px; bottom: 10px' src='assets/github.png' height='50px' width='50px'></a>");
            //LinkedIn
            $("#headerOne").append("<a target='_blank' href='https://www.linkedin.com/in/seth-kujawa-611b56145/'><img class='item social' style='position:absolute; opacity: 0.75;left:230px; bottom: 10px' src='assets/linkedin.png' height='50px' width='50px'></a>");
            $(".social").mouseenter( function() {
                $(".social").css("opacity", "1");
            });
            $(".social").mouseleave( function() {
                $(".social").css("opacity", "0.75");
            });
        } else {
            $(".item").animate({opacity: 0}, 500, function() {
                    $(".item").remove();
            });
        }
    }else {
        if (open){
            //Image
            $("#headerOne").append("<img class='item' style='position:absolute; left:50px; top: 100px' src='assets/me.png' height='200px' width='200px'>");
            //Name
            $("#headerOne").append("<h1 class='item' style='position:absolute; right:50px; top:110px'>Seth Kujawa</h1>");
            //Description
            $("#headerOne").append("<h5 class='item' style='position:absolute;  right:50px; top:160px'>CS Major at the University of Maryland 2021</h5>");

            $("#headerOne").append("<p class='item' style='position:absolute;  right:70px; top:350px'>Website under development </p>");

            //Facebook
            $("#headerOne").append("<a target='_blank' href='https://www.facebook.com/seth.kujawa'><img class='item social' style='position:absolute;  opacity: 0.75; left:87.5px; bottom: 10px' src='assets/facebook.png' height='50px' width='50px'></a>");
            //Instagram
            $("#headerOne").append("<a target='_blank' href='https://www.instagram.com/seth_kujawa/?hl=en'><img class='item social' style='position:absolute; opacity: 0.75; left:225px; bottom: 10px' src='assets/instagram.png' height='50px' width='50px'></a>");
            //Github
            $("#headerOne").append("<a target='_blank' href='https://github.com/seth0808'><img class='item social' style='position:absolute; opacity: 0.75; left:362.5px; bottom: 10px' src='assets/github.png' height='50px' width='50px'></a>");
            //LinkedIn
            $("#headerOne").append("<a target='_blank' href='https://www.linkedin.com/in/seth-kujawa-611b56145/'><img class='item social' style='position:absolute; opacity: 0.75;left:500px; bottom: 10px' src='assets/linkedin.png' height='50px' width='50px'></a>");
            $(".social").mouseenter( function() {
                $(".social").css("opacity", "1");
            });
            $(".social").mouseleave( function() {
                $(".social").css("opacity", "0.75");
            });
        } else {
            $(".item").animate({opacity: 0}, 500, function() {
                    $(".item").remove();
            });
        }
    }
    
}
function projectOne(open, mobile) {
    if (mobile){
        if (open){
            $("#headerTwo").append("<img style='height: 50px; width: 50px; position: absolute; right: 50px; top: 50px;' class='projectItem' id='projectBack' src='assets/close.png'>");
            $("#projectBack").click( function() {
                projectOne(false, true);
            });
            $("#projectBack").mouseenter(function() {
                $(this).css("cursor", "pointer");
            });
            $("#projectBack").mouseleave(function() {
                $(this).css("cursor", "auto");
            });
        }  else {
            $(".projectItem").animate({opacity: 0}, 500, function() {
                    $(".projectItem").remove();
                    handleProjects(true, true);
            });
        }
    } else {
        if (open){
            $("#headerTwo").append("<img style='height: 50px; width: 50px; position: absolute; right: 50px; top: 50px;' class='projectItem' id='projectBack' src='assets/close.png'>");
            $("#projectBack").click( function() {
                projectOne(false, false);
            });
            $("#projectBack").mouseenter(function() {
                $(this).css("cursor", "pointer");
            });
            $("#projectBack").mouseleave(function() {
                $(this).css("cursor", "auto");
            });
        }  else {
            $(".projectItem").animate({opacity: 0}, 500, function() {
                    $(".projectItem").remove();
                    handleProjects(true, false);
            });
        }
    }
}
function projectTwo(open, mobile) {
    if (mobile) {
        if (open){
            $("#headerTwo").append("<img style='height: 50px; width: 50px; position: absolute; right: 50px; top: 50px;' class='projectItem' id='projectBack' src='assets/close.png'>");
            $("#projectBack").click( function() {
                projectTwo(false, true);
            });
            $("#projectBack").mouseenter(function() {
                $(this).css("cursor", "pointer");
            });
            $("#projectBack").mouseleave(function() {
                $(this).css("cursor", "auto");
            });
        }  else {
            $(".projectItem").animate({opacity: 0}, 500, function() {
                    $(".projectItem").remove();
                    handleProjects(true, true);
            });
        }
    } else {
        if (open){
            $("#headerTwo").append("<img style='height: 50px; width: 50px; position: absolute; right: 50px; top: 50px;' class='projectItem' id='projectBack' src='assets/close.png'>");
            $("#projectBack").click( function() {
                projectTwo(false, false);
            });
            $("#projectBack").mouseenter(function() {
                $(this).css("cursor", "pointer");
            });
            $("#projectBack").mouseleave(function() {
                $(this).css("cursor", "auto");
            });
        }  else {
            $(".projectItem").animate({opacity: 0}, 500, function() {
                    $(".projectItem").remove();
                    handleProjects(true, false);
            });
        }
    }
}

function projectThree(open, mobile) {
    if (mobile){
        if (open){
            $("#headerTwo").append("<img style='height: 50px; width: 50px; position: absolute; right: 50px; top: 50px;' class='projectItem' id='projectBack' src='assets/close.png'>");
            $("#projectBack").click( function() {
                projectThree(false, true);
            });
            $("#projectBack").mouseenter(function() {
                $(this).css("cursor", "pointer");
            });
            $("#projectBack").mouseleave(function() {
                $(this).css("cursor", "auto");
            });
        }  else {
            $(".projectItem").animate({opacity: 0}, 500, function() {
                    $(".projectItem").remove();
                    handleProjects(true, true);
            });
        }
    } else {
        if (open){
            $("#headerTwo").append("<img style='height: 50px; width: 50px; position: absolute; right: 50px; top: 50px;' class='projectItem' id='projectBack' src='assets/close.png'>");
            $("#projectBack").click( function() {
                projectThree(false, false);
            });
            $("#projectBack").mouseenter(function() {
                $(this).css("cursor", "pointer");
            });
            $("#projectBack").mouseleave(function() {
                $(this).css("cursor", "auto");
            });
        }  else {
            $(".projectItem").animate({opacity: 0}, 500, function() {
                    $(".projectItem").remove();
                    handleProjects(true, false);
            });
        }
    }
}

function projectFour(open, mobile) {
    if (mobile) {
        if (open){
            $("#headerTwo").append("<img style='height: 50px; width: 50px; position: absolute; right: 50px; top: 50px;' class='projectItem' id='projectBack' src='assets/close.png'>");
            $("#projectBack").click( function() {
                projectFour(false, true);
            });
            $("#projectBack").mouseenter(function() {
                $(this).css("cursor", "pointer");
            });
            $("#projectBack").mouseleave(function() {
                $(this).css("cursor", "auto");
            });
        }  else {
            $(".projectItem").animate({opacity: 0}, 500, function() {
                    $(".projectItem").remove();
                    handleProjects(true, true);
            });
        }
    } else {
        if (open){
            $("#headerTwo").append("<img style='height: 50px; width: 50px; position: absolute; right: 50px; top: 50px;' class='projectItem' id='projectBack' src='assets/close.png'>");
            $("#projectBack").click( function() {
                projectFour(false, false);
            });
            $("#projectBack").mouseenter(function() {
                $(this).css("cursor", "pointer");
            });
            $("#projectBack").mouseleave(function() {
                $(this).css("cursor", "auto");
            });
        }  else {
            $(".projectItem").animate({opacity: 0}, 500, function() {
                    $(".projectItem").remove();
                    handleProjects(true, false);
            });
        }
    }
}

function projectFive(open, mobile) {
    if (mobile) {
        if (open){
            $("#headerTwo").append("<img style='height: 50px; width: 50px; position: absolute; right: 50px; top: 50px;' class='projectItem' id='projectBack' src='assets/close.png'>");
            $("#projectBack").click( function() {
                projectFive(false, true);
            });
            $("#projectBack").mouseenter(function() {
                $(this).css("cursor", "pointer");
            });
            $("#projectBack").mouseleave(function() {
                $(this).css("cursor", "auto");
            });
        }  else {
            $(".projectItem").animate({opacity: 0}, 500, function() {
                    $(".projectItem").remove();
                    handleProjects(true, true);
            });
        }
    } else {
        if (open){
            $("#headerTwo").append("<img style='height: 50px; width: 50px; position: absolute; right: 50px; top: 50px;' class='projectItem' id='projectBack' src='assets/close.png'>");
            $("#projectBack").click( function() {
                projectFive(false, false);
            });
            $("#projectBack").mouseenter(function() {
                $(this).css("cursor", "pointer");
            });
            $("#projectBack").mouseleave(function() {
                $(this).css("cursor", "auto");
            });
        }  else {
            $(".projectItem").animate({opacity: 0}, 500, function() {
                    $(".projectItem").remove();
                    handleProjects(true, false);
            });
        }
    } 
}

function handleProjects(open, mobile) {
	if (mobile){
        if (open) {
            //This could all be one object if JQuery wasn't a pile of garbage
            //Project Block One
            $("#headerTwo").append("<div class='item' id='projectOne' style='overflow: hidden; position: relative; display: inline-block; margin: 20px; border:5px solid rgba(0, 0, 0, 0.5); border-radius: 10px; height: 200px; width: 250px;'><a href='https://github.com/seth0808/Neural-Network' target='_blank'><p style='z-index: 1;position: absolute; left: 50px; top: 50px; background-color: rgba(0, 0, 0, 0.4);border: 3px solid rgba(0, 0, 0, 0.4); font-size: 25px; color: rgb(240, 240, 240)' id='projectOneP'> This Website </p></a></div>");
            $("#projectOne").append("<img id='projectOneImg' style='z-index: 0; position: relative; height: 200px; margin: 0px' src='assets/projectBackground1.png'>")
            $("#projectOne").mouseenter( function() {
                $("#projectOneImg").attr('src', 'assets/defaultProjectBackground.jpg');
                $("#projectOneP").css("top", "10px");
                $("#projectOneP").css("left", "90px");
                $("#projectOneP").css("border", "3px solid rgba(0, 0, 0, 0");
                $("#projectOneP").css("background-color", "rgba(0, 0, 0, 0");
                $("#projectOneP").css("font-size", "20px");
                $("#projectOneP").css("text-decoration", "underline");
                $("#projectOneP").text("Github");
                $(this).css("cursor", "pointer");
                $("#projectOne").append("<p style='z-index: 1;position: absolute; left: 108px; top: 50px; font-size: 25px; color: rgb(240, 240, 240)' id='orOne'> OR </p>");
                $("#projectOne").append("<p style='z-index: 1;position: absolute; text-decoration: underline; left: 93px; top: 100px; font-size: 20px; color: rgb(240, 240, 240)' id='projectOnePLearn'> Expand </p>");
                $("#projectOnePLearn").click( function() {
                    $(".item").animate({opacity: 0}, 500, function() {
                        $(".item").remove();
                        
                    });
                    projectOne(true, true);
                });
            });
            $("#projectOne").mouseleave( function() {
                $("#projectOneImg").attr('src', 'assets/projectBackground1.png');
                $(this).css("cursor", "auto");
                $("#projectOneP").css("top", "50px");
                $("#projectOneP").css("left", "50px");
                $("#projectOneP").css("font-size", "25px");
                $("#projectOneP").css("border", "3px solid rgba(0, 0, 0, 0.4)");
                $("#projectOneP").css("background-color", "rgba(0, 0, 0, 0.4)");
                $("#projectOneP").text("This Website");
                $("#projectOnePLearn").remove();
                $("#orOne").remove();
                $("#projectOneP").css("text-decoration", "none");

            });
            //End Project Block One

            //Project Block Two
            $("#headerTwo").append("<div class='item' id='projectTwo' style='overflow: hidden; position: relative; display: inline-block; margin: 20px; border:5px solid rgba(0, 0, 0, 0.5); border-radius: 10px; height: 200px; width: 250px;'><a href='https://github.com/seth0808/Personal-Site' target='_blank'><p style='z-index: 1;position: absolute; left: 35px; top: 50px; background-color: rgba(0, 0, 0, 0.4);border: 3px solid rgba(0, 0, 0, 0.4); font-size: 25px; color: rgb(240, 240, 240)' id='projectTwoP'> Neural Network </p></a></div>");
            $("#projectTwo").append("<img id='projectTwoImg' style='z-index: 0; position: relative; height: 200px; margin: 0px' src='assets/neuralNet.png'>")
            $("#projectTwo").mouseenter( function() {
                $("#projectTwoImg").attr('src', 'assets/defaultProjectBackground.jpg');
                $("#projectTwoP").css("top", "10px");
                $("#projectTwoP").css("left", "90px");
                $("#projectTwoP").css("border", "3px solid rgba(0, 0, 0, 0");
                $("#projectTwoP").css("background-color", "rgba(0, 0, 0, 0");
                $("#projectTwoP").css("font-size", "20px");
                $("#projectTwoP").css("text-decoration", "underline");
                $("#projectTwoP").text("Github");
                $(this).css("cursor", "pointer");
                $("#projectTwo").append("<p style='z-index: 1;position: absolute; left: 108px; top: 50px; font-size: 25px; color: rgb(240, 240, 240)' id='orTwo'> OR </p>");
                $("#projectTwo").append("<p style='z-index: 1;position: absolute; text-decoration: underline; left: 93px; top: 100px; font-size: 20px; color: rgb(240, 240, 240)' id='projectTwoPLearn'> Expand </p>");
                $("#projectTwoPLearn").click( function() {
                    $(".item").animate({opacity: 0}, 500, function() {
                        $(".item").remove();
                        
                    });
                    projectTwo(true, true);
                });
            });
            $("#projectTwo").mouseleave( function() {
                $("#projectTwoImg").attr('src', 'assets/neuralNet.png');
                $(this).css("cursor", "auto");
                $("#projectTwoP").css("top", "50px");
                $("#projectTwoP").css("left", "35px");
                $("#projectTwoP").css("font-size", "25px");
                $("#projectTwoP").css("border", "3px solid rgba(0, 0, 0, 0.4)");
                $("#projectTwoP").css("background-color", "rgba(0, 0, 0, 0.4)");
                $("#projectTwoP").text("Neural Network");
                $("#projectTwoPLearn").remove();
                $("#orTwo").remove();
                $("#projectTwoP").css("text-decoration", "none");

            });
            //End Project Block Two

            //Project Block Three
            $("#headerTwo").append("<div class='item' id='projectThree' style='overflow: hidden; position: relative; display: inline-block; margin: 20px; border:5px solid rgba(0, 0, 0, 0.5); border-radius: 10px; height: 200px; width: 250px;'><a href='https://github.com/seth0808/MazeSolver' target='_blank'><p style='z-index: 1;position: absolute; left: 55px; top: 50px; background-color: rgba(0, 0, 0, 0.4);border: 3px solid rgba(0, 0, 0, 0.4); font-size: 25px; color: rgb(240, 240, 240)' id='projectThreeP'> Maze Solver </p></a></div>");
            $("#projectThree").append("<img id='projectThreeImg' style='z-index: 0; position: relative; height: 200px; margin: 0px' src='assets/maze.jpg'>")
            $("#projectThree").mouseenter( function() {
                $("#projectThreeImg").attr('src', 'assets/defaultProjectBackground.jpg');
                $("#projectThreeP").css("top", "10px");
                $("#projectThreeP").css("left", "90px");
                $("#projectThreeP").css("border", "3px solid rgba(0, 0, 0, 0");
                $("#projectThreeP").css("background-color", "rgba(0, 0, 0, 0");
                $("#projectThreeP").css("font-size", "20px");
                $("#projectThreeP").css("text-decoration", "underline");
                $("#projectThreeP").text("Github");
                $(this).css("cursor", "pointer");
                $("#projectThree").append("<p style='z-index: 1;position: absolute; left: 108px; top: 50px; font-size: 25px; color: rgb(240, 240, 240)' id='orThree'> OR </p>");
                $("#projectThree").append("<p style='z-index: 1;position: absolute; text-decoration: underline; left: 93px; top: 100px; font-size: 20px; color: rgb(240, 240, 240)' id='projectThreePLearn'> Expand </p>");
                $("#projectThreePLearn").click( function() {
                    $(".item").animate({opacity: 0}, 500, function() {
                        $(".item").remove();
                        
                    });
                    projectThree(true, true);
                });
            });
            $("#projectThree").mouseleave( function() {
                $("#projectThreeImg").attr('src', 'assets/maze.jpg');
                $(this).css("cursor", "auto");
                $("#projectThreeP").css("top", "50px");
                $("#projectThreeP").css("left", "55px");
                $("#projectThreeP").css("font-size", "25px");
                $("#projectThreeP").css("border", "3px solid rgba(0, 0, 0, 0.4)");
                $("#projectThreeP").css("background-color", "rgba(0, 0, 0, 0.4)");
                $("#projectThreeP").text("Maze Solver");
                $("#projectThreePLearn").remove();
                $("#orThree").remove();
                $("#projectThreeP").css("text-decoration", "none");

            });
            //End Project Block Three

            //Project Block Four
            $("#headerTwo").append("<div class='item' id='projectFour' style='overflow: hidden; position: relative; display: inline-block; margin: 20px; border:5px solid rgba(0, 0, 0, 0.5); border-radius: 10px; height: 200px; width: 250px;'><a href='https://github.com/seth0808/Diner2.0' target='_blank'><p style='z-index: 1;position: absolute; left: 70px; top: 50px; background-color: rgba(0, 0, 0, 0.4);border: 3px solid rgba(0, 0, 0, 0.4); font-size: 25px; color: rgb(240, 240, 240)' id='projectFourP'> Diner 2.0 </p></a></div>");
            $("#projectFour").append("<img id='projectFourImg' style='z-index: 0; position: relative; height: 200px; margin: 0px' src='assets/diner.jpg'>")
            $("#projectFour").mouseenter( function() {
                $("#projectFourImg").attr('src', 'assets/defaultProjectBackground.jpg');
                $("#projectFourP").css("top", "10px");
                $("#projectFourP").css("left", "90px");
                $("#projectFourP").css("border", "3px solid rgba(0, 0, 0, 0");
                $("#projectFourP").css("background-color", "rgba(0, 0, 0, 0");
                $("#projectFourP").css("font-size", "20px");
                $("#projectFourP").css("text-decoration", "underline");
                $("#projectFourP").text("Github");
                $(this).css("cursor", "pointer");
                $("#projectFour").append("<p style='z-index: 1;position: absolute; left: 108px; top: 50px; font-size: 25px; color: rgb(240, 240, 240)' id='orFour'> OR </p>");
                $("#projectFour").append("<p style='z-index: 1;position: absolute; text-decoration: underline; left: 93px; top: 100px; font-size: 20px; color: rgb(240, 240, 240)' id='projectFourPLearn'> Expand </p>");
                $("#projectFourPLearn").click( function() {
                    $(".item").animate({opacity: 0}, 500, function() {
                        $(".item").remove();
                        
                    });
                    projectFour(true, true);
                });
            });
            $("#projectFour").mouseleave( function() {
                $("#projectFourImg").attr('src', 'assets/diner.jpg');
                $(this).css("cursor", "auto");
                $("#projectFourP").css("top", "50px");
                $("#projectFourP").css("left", "70px");
                $("#projectFourP").css("font-size", "25px");
                $("#projectFourP").css("border", "3px solid rgba(0, 0, 0, 0.4)");
                $("#projectFourP").css("background-color", "rgba(0, 0, 0, 0.4)");
                $("#projectFourP").text("Diner 2.0");
                $("#projectFourPLearn").remove();
                $("#orFour").remove();
                $("#projectFourP").css("text-decoration", "none");

            });
            //End Project Block Four

            //Project Block Five
            $("#headerTwo").append("<div class='item' id='projectFive' style='overflow: hidden; position: relative; display: inline-block; margin: 20px; border:5px solid rgba(0, 0, 0, 0.5); border-radius: 10px; height: 200px; width: 250px;'><a href='https://github.com/seth0808/seth0808.github.io' target='_blank'><p style='z-index: 1;position: absolute; left: 0px; top: 50px; background-color: rgba(0, 0, 0, 0.4);border: 3px solid rgba(0, 0, 0, 0.4); font-size: 25px; color: rgb(240, 240, 240)' id='projectFiveP'> Guatemala Fundraiser </p></a></div>");
            $("#projectFive").append("<img id='projectFiveImg' style='z-index: 0; position: relative; height: 200px; margin: 0px' src='assets/guatemala.png'>")
            $("#projectFive").mouseenter( function() {
                $("#projectFiveImg").attr('src', 'assets/defaultProjectBackground.jpg');
                $("#projectFiveP").css("top", "10px");
                $("#projectFiveP").css("left", "90px");
                $("#projectFiveP").css("border", "3px solid rgba(0, 0, 0, 0");
                $("#projectFiveP").css("background-color", "rgba(0, 0, 0, 0");
                $("#projectFiveP").css("font-size", "20px");
                $("#projectFiveP").css("text-decoration", "underline");
                $("#projectFiveP").text("Github");
                $(this).css("cursor", "pointer");
                $("#projectFive").append("<p style='z-index: 1;position: absolute; left: 108px; top: 50px; font-size: 25px; color: rgb(240, 240, 240)' id='orFive'> OR </p>");
                $("#projectFive").append("<p style='z-index: 1;position: absolute; text-decoration: underline; left: 93px; top: 100px; font-size: 20px; color: rgb(240, 240, 240)' id='projectFivePLearn'> Expand </p>");
                $("#projectFivePLearn").click( function() {
                    $(".item").animate({opacity: 0}, 500, function() {
                        $(".item").remove();
                        
                    });
                    projectFive(true, true);
                });
            });
            $("#projectFive").mouseleave( function() {
                $("#projectFiveImg").attr('src', 'assets/guatemala.png');
                $(this).css("cursor", "auto");
                $("#projectFiveP").css("top", "50px");
                $("#projectFiveP").css("left", "0px");
                $("#projectFiveP").css("font-size", "25px");
                $("#projectFiveP").css("border", "3px solid rgba(0, 0, 0, 0.4)");
                $("#projectFiveP").css("background-color", "rgba(0, 0, 0, 0.4)");
                $("#projectFiveP").text("Guatemala Fundraiser");
                $("#projectFivePLearn").remove();
                $("#orFive").remove();
                $("#projectFiveP").css("text-decoration", "none");

            });
            //End Project Block Five

        } else {
            $(".projectItem").animate({opacity: 0}, 500, function() {
                    $(".projectItem").remove();
            });
            $(".item").animate({opacity: 0}, 500, function() {
                    $(".item").remove();
            });
        }
    } else {
        if (open) {
            //This could all be one object if JQuery wasn't a pile of garbage
            //Project Block One
            $("#headerTwo").append("<div class='item' id='projectOne' style='overflow: hidden; position: relative; display: inline-block; margin: 10px; border:5px solid rgba(0, 0, 0, 0.5); border-radius: 10px; height: 200px; width: 250px;'><a href='https://github.com/seth0808/Neural-Network' target='_blank'><p style='z-index: 1;position: absolute; left: 50px; top: 50px; background-color: rgba(0, 0, 0, 0.4);border: 3px solid rgba(0, 0, 0, 0.4); font-size: 25px; color: rgb(240, 240, 240)' id='projectOneP'> This Website </p></a></div>");
            $("#projectOne").append("<img id='projectOneImg' style='z-index: 0; position: relative; height: 200px; margin: 0px' src='assets/projectBackground1.png'>")
            $("#projectOne").mouseenter( function() {
                $("#projectOneImg").attr('src', 'assets/defaultProjectBackground.jpg');
                $("#projectOneP").css("top", "10px");
                $("#projectOneP").css("left", "90px");
                $("#projectOneP").css("border", "3px solid rgba(0, 0, 0, 0");
                $("#projectOneP").css("background-color", "rgba(0, 0, 0, 0");
                $("#projectOneP").css("font-size", "20px");
                $("#projectOneP").css("text-decoration", "underline");
                $("#projectOneP").text("Github");
                $(this).css("cursor", "pointer");
                $("#projectOne").append("<p style='z-index: 1;position: absolute; left: 108px; top: 50px; font-size: 25px; color: rgb(240, 240, 240)' id='orOne'> OR </p>");
                $("#projectOne").append("<p style='z-index: 1;position: absolute; text-decoration: underline; left: 93px; top: 100px; font-size: 20px; color: rgb(240, 240, 240)' id='projectOnePLearn'> Expand </p>");
                $("#projectOnePLearn").click( function() {
                    $(".item").animate({opacity: 0}, 500, function() {
                        $(".item").remove();
                        
                    });
                    projectOne(true, false);
                });
            });
            $("#projectOne").mouseleave( function() {
                $("#projectOneImg").attr('src', 'assets/projectBackground1.png');
                $(this).css("cursor", "auto");
                $("#projectOneP").css("top", "50px");
                $("#projectOneP").css("left", "50px");
                $("#projectOneP").css("font-size", "25px");
                $("#projectOneP").css("border", "3px solid rgba(0, 0, 0, 0.4)");
                $("#projectOneP").css("background-color", "rgba(0, 0, 0, 0.4)");
                $("#projectOneP").text("This Website");
                $("#projectOnePLearn").remove();
                $("#orOne").remove();
                $("#projectOneP").css("text-decoration", "none");

            });
            //End Project Block One

            //Project Block Two
            $("#headerTwo").append("<div class='item' id='projectTwo' style='overflow: hidden; position: relative; display: inline-block; margin: 10px; border:5px solid rgba(0, 0, 0, 0.5); border-radius: 10px; height: 200px; width: 250px;'><a href='https://github.com/seth0808/Personal-Site' target='_blank'><p style='z-index: 1;position: absolute; left: 35px; top: 50px; background-color: rgba(0, 0, 0, 0.4);border: 3px solid rgba(0, 0, 0, 0.4); font-size: 25px; color: rgb(240, 240, 240)' id='projectTwoP'> Neural Network </p></a></div>");
            $("#projectTwo").append("<img id='projectTwoImg' style='z-index: 0; position: relative; height: 200px; margin: 0px' src='assets/neuralNet.png'>")
            $("#projectTwo").mouseenter( function() {
                $("#projectTwoImg").attr('src', 'assets/defaultProjectBackground.jpg');
                $("#projectTwoP").css("top", "10px");
                $("#projectTwoP").css("left", "90px");
                $("#projectTwoP").css("border", "3px solid rgba(0, 0, 0, 0");
                $("#projectTwoP").css("background-color", "rgba(0, 0, 0, 0");
                $("#projectTwoP").css("font-size", "20px");
                $("#projectTwoP").css("text-decoration", "underline");
                $("#projectTwoP").text("Github");
                $(this).css("cursor", "pointer");
                $("#projectTwo").append("<p style='z-index: 1;position: absolute; left: 108px; top: 50px; font-size: 25px; color: rgb(240, 240, 240)' id='orTwo'> OR </p>");
                $("#projectTwo").append("<p style='z-index: 1;position: absolute; text-decoration: underline; left: 93px; top: 100px; font-size: 20px; color: rgb(240, 240, 240)' id='projectTwoPLearn'> Expand </p>");
                $("#projectTwoPLearn").click( function() {
                    $(".item").animate({opacity: 0}, 500, function() {
                        $(".item").remove();
                        
                    });
                    projectTwo(true, false);
                });
            });
            $("#projectTwo").mouseleave( function() {
                $("#projectTwoImg").attr('src', 'assets/neuralNet.png');
                $(this).css("cursor", "auto");
                $("#projectTwoP").css("top", "50px");
                $("#projectTwoP").css("left", "35px");
                $("#projectTwoP").css("font-size", "25px");
                $("#projectTwoP").css("border", "3px solid rgba(0, 0, 0, 0.4)");
                $("#projectTwoP").css("background-color", "rgba(0, 0, 0, 0.4)");
                $("#projectTwoP").text("Neural Network");
                $("#projectTwoPLearn").remove();
                $("#orTwo").remove();
                $("#projectTwoP").css("text-decoration", "none");

            });
            //End Project Block Two

            //Project Block Three
            $("#headerTwo").append("<div class='item' id='projectThree' style='overflow: hidden; position: relative; display: inline-block; margin: 10px; border:5px solid rgba(0, 0, 0, 0.5); border-radius: 10px; height: 200px; width: 250px;'><a href='https://github.com/seth0808/MazeSolver' target='_blank'><p style='z-index: 1;position: absolute; left: 55px; top: 50px; background-color: rgba(0, 0, 0, 0.4);border: 3px solid rgba(0, 0, 0, 0.4); font-size: 25px; color: rgb(240, 240, 240)' id='projectThreeP'> Maze Solver </p></a></div>");
            $("#projectThree").append("<img id='projectThreeImg' style='z-index: 0; position: relative; height: 200px; margin: 0px' src='assets/maze.jpg'>")
            $("#projectThree").mouseenter( function() {
                $("#projectThreeImg").attr('src', 'assets/defaultProjectBackground.jpg');
                $("#projectThreeP").css("top", "10px");
                $("#projectThreeP").css("left", "90px");
                $("#projectThreeP").css("border", "3px solid rgba(0, 0, 0, 0");
                $("#projectThreeP").css("background-color", "rgba(0, 0, 0, 0");
                $("#projectThreeP").css("font-size", "20px");
                $("#projectThreeP").css("text-decoration", "underline");
                $("#projectThreeP").text("Github");
                $(this).css("cursor", "pointer");
                $("#projectThree").append("<p style='z-index: 1;position: absolute; left: 108px; top: 50px; font-size: 25px; color: rgb(240, 240, 240)' id='orThree'> OR </p>");
                $("#projectThree").append("<p style='z-index: 1;position: absolute; text-decoration: underline; left: 93px; top: 100px; font-size: 20px; color: rgb(240, 240, 240)' id='projectThreePLearn'> Expand </p>");
                $("#projectThreePLearn").click( function() {
                    $(".item").animate({opacity: 0}, 500, function() {
                        $(".item").remove();
                        
                    });
                    projectThree(true, false);
                });
            });
            $("#projectThree").mouseleave( function() {
                $("#projectThreeImg").attr('src', 'assets/maze.jpg');
                $(this).css("cursor", "auto");
                $("#projectThreeP").css("top", "50px");
                $("#projectThreeP").css("left", "55px");
                $("#projectThreeP").css("font-size", "25px");
                $("#projectThreeP").css("border", "3px solid rgba(0, 0, 0, 0.4)");
                $("#projectThreeP").css("background-color", "rgba(0, 0, 0, 0.4)");
                $("#projectThreeP").text("Maze Solver");
                $("#projectThreePLearn").remove();
                $("#orThree").remove();
                $("#projectThreeP").css("text-decoration", "none");

            });
            //End Project Block Three

            //Project Block Four
            $("#headerTwo").append("<div class='item' id='projectFour' style='overflow: hidden; position: relative; display: inline-block; margin: 10px; border:5px solid rgba(0, 0, 0, 0.5); border-radius: 10px; height: 200px; width: 250px;'><a href='https://github.com/seth0808/Diner2.0' target='_blank'><p style='z-index: 1;position: absolute; left: 70px; top: 50px; background-color: rgba(0, 0, 0, 0.4);border: 3px solid rgba(0, 0, 0, 0.4); font-size: 25px; color: rgb(240, 240, 240)' id='projectFourP'> Diner 2.0 </p></a></div>");
            $("#projectFour").append("<img id='projectFourImg' style='z-index: 0; position: relative; height: 200px; margin: 0px' src='assets/diner.jpg'>")
            $("#projectFour").mouseenter( function() {
                $("#projectFourImg").attr('src', 'assets/defaultProjectBackground.jpg');
                $("#projectFourP").css("top", "10px");
                $("#projectFourP").css("left", "90px");
                $("#projectFourP").css("border", "3px solid rgba(0, 0, 0, 0");
                $("#projectFourP").css("background-color", "rgba(0, 0, 0, 0");
                $("#projectFourP").css("font-size", "20px");
                $("#projectFourP").css("text-decoration", "underline");
                $("#projectFourP").text("Github");
                $(this).css("cursor", "pointer");
                $("#projectFour").append("<p style='z-index: 1;position: absolute; left: 108px; top: 50px; font-size: 25px; color: rgb(240, 240, 240)' id='orFour'> OR </p>");
                $("#projectFour").append("<p style='z-index: 1;position: absolute; text-decoration: underline; left: 93px; top: 100px; font-size: 20px; color: rgb(240, 240, 240)' id='projectFourPLearn'> Expand </p>");
                $("#projectFourPLearn").click( function() {
                    $(".item").animate({opacity: 0}, 500, function() {
                        $(".item").remove();
                        
                    });
                    projectFour(true, false);
                });
            });
            $("#projectFour").mouseleave( function() {
                $("#projectFourImg").attr('src', 'assets/diner.jpg');
                $(this).css("cursor", "auto");
                $("#projectFourP").css("top", "50px");
                $("#projectFourP").css("left", "70px");
                $("#projectFourP").css("font-size", "25px");
                $("#projectFourP").css("border", "3px solid rgba(0, 0, 0, 0.4)");
                $("#projectFourP").css("background-color", "rgba(0, 0, 0, 0.4)");
                $("#projectFourP").text("Diner 2.0");
                $("#projectFourPLearn").remove();
                $("#orFour").remove();
                $("#projectFourP").css("text-decoration", "none");

            });
            //End Project Block Four

            //Project Block Five
            $("#headerTwo").append("<div class='item' id='projectFive' style='overflow: hidden; position: relative; display: inline-block; margin: 20px; border:5px solid rgba(0, 0, 0, 0.5); border-radius: 10px; height: 200px; width: 250px;'><a href='https://github.com/seth0808/seth0808.github.io' target='_blank'><p style='z-index: 1;position: absolute; left: 0px; top: 50px; background-color: rgba(0, 0, 0, 0.4);border: 3px solid rgba(0, 0, 0, 0.4); font-size: 25px; color: rgb(240, 240, 240)' id='projectFiveP'> Guatemala Fundraiser </p></a></div>");
            $("#projectFive").append("<img id='projectFiveImg' style='z-index: 0; position: relative; height: 200px; margin: 0px' src='assets/guatemala.png'>")
            $("#projectFive").mouseenter( function() {
                $("#projectFiveImg").attr('src', 'assets/defaultProjectBackground.jpg');
                $("#projectFiveP").css("top", "10px");
                $("#projectFiveP").css("left", "90px");
                $("#projectFiveP").css("border", "3px solid rgba(0, 0, 0, 0");
                $("#projectFiveP").css("background-color", "rgba(0, 0, 0, 0");
                $("#projectFiveP").css("font-size", "20px");
                $("#projectFiveP").css("text-decoration", "underline");
                $("#projectFiveP").text("Github");
                $(this).css("cursor", "pointer");
                $("#projectFive").append("<p style='z-index: 1;position: absolute; left: 108px; top: 50px; font-size: 25px; color: rgb(240, 240, 240)' id='orFive'> OR </p>");
                $("#projectFive").append("<p style='z-index: 1;position: absolute; text-decoration: underline; left: 93px; top: 100px; font-size: 20px; color: rgb(240, 240, 240)' id='projectFivePLearn'> Expand </p>");
                $("#projectFivePLearn").click( function() {
                    $(".item").animate({opacity: 0}, 500, function() {
                        $(".item").remove();
                        
                    });
                    projectFive(true, false);
                });
            });
            $("#projectFive").mouseleave( function() {
                $("#projectFiveImg").attr('src', 'assets/guatemala.png');
                $(this).css("cursor", "auto");
                $("#projectFiveP").css("top", "50px");
                $("#projectFiveP").css("left", "0px");
                $("#projectFiveP").css("font-size", "25px");
                $("#projectFiveP").css("border", "3px solid rgba(0, 0, 0, 0.4)");
                $("#projectFiveP").css("background-color", "rgba(0, 0, 0, 0.4)");
                $("#projectFiveP").text("Guatemala Fundraiser");
                $("#projectFivePLearn").remove();
                $("#orFive").remove();
                $("#projectFiveP").css("text-decoration", "none");

            });
            //End Project Block Five

        } else {
            $(".projectItem").animate({opacity: 0}, 500, function() {
                    $(".projectItem").remove();
            });
            $(".item").animate({opacity: 0}, 500, function() {
                    $(".item").remove();
            });
        }
    }
}

function handleResume(open, mobile) {
    if (mobile){
        if (open){
            $("#headerThree").append("<div id='changeDesign' class='item' style='text-align: center; position: absolute; top: 65px; left: 15px; text-decoration: underline; font-size: 20px'> Change Design </div>");
            $("#headerThree").append("<a href='assets/resume.docx' download><img src='assets/download.png' id='download' class='item' style='height: 40px; width: 40px; position: absolute; top: 55px; left: 185px;'></a>");
            $("#headerThree").append("<div id='expand' class='item' style='text-align: center; position: absolute; top: 65px; left: 260px; text-decoration: underline; font-size:20px'> Expand </div>")
            $("#headerThree").append("<img id='resume' class='item' style='margin-top: 100px; width: 350px' src='assets/R1.png'>");
            $("#changeDesign").mouseenter( function() {
                $(this).css("background-color", "rgba(255, 255, 255, 0.1)");
                $(this).css("cursor", "pointer");
            });
            $("#changeDesign").mouseleave( function() {
                $(this).css("background-color", "transparent");
                $(this).css("cursor", "auto");
            });
            $("#download").mouseenter( function() {
                $(this).css("background-color", "rgba(255, 255, 255, 0.1)");
                $(this).css("cursor", "pointer");
            });
            $("#download").mouseleave( function() {
                $(this).css("background-color", "transparent");
                $(this).css("cursor", "auto");
            });
            $("#changeDesign").click(function() {
                if (currentResume == 1){
                    $("#resume").attr('src', 'assets/R2.png');
                    currentResume = 2;
                }else {
                    $("#resume").attr('src', 'assets/R1.png');
                    currentResume = 1;
                }
                
            });
            $("#expand").click(function() {
                if (expanded){
                    $(this).text("Expand");
                    $("#resume").css("width", "350px");
                    
                    expanded = false;
                }else {
                    $(this).text("Shrink");
                    $("#resume").css("width", "600px");
                    expanded = true;
                }
            })
        } else {
            $(".item").animate({opacity: 0}, 500, function() {
                    $(".item").remove();
            });
        }
    } else {
        if (open){
            $("#headerThree").append("<div id='changeDesign' class='item' style='text-align: center; position: absolute; top: 65px; left: 175px; text-decoration: underline; font-size: 20px'> Change Design </div>");
            $("#headerThree").append("<a href='assets/resume.docx' download><img src='assets/download.png' id='download' class='item' style='height: 40px; width: 40px; position: absolute; top: 55px; left: 345px;'></a>");
            $("#headerThree").append("<div id='expand' class='item' style='text-align: center; position: absolute; top: 65px; left: 420px; text-decoration: underline; font-size:20px'> Expand </div>")
            $("#headerThree").append("<img id='resume' class='item' style='margin-top:75px; width: 500px' src='assets/R1.png'>");
            $("#changeDesign").mouseenter( function() {
                $(this).css("background-color", "rgba(255, 255, 255, 0.1)");
                $(this).css("cursor", "pointer");
            });
            $("#changeDesign").mouseleave( function() {
                $(this).css("background-color", "transparent");
                $(this).css("cursor", "auto");
            });
            $("#download").mouseenter( function() {
                $(this).css("background-color", "rgba(255, 255, 255, 0.1)");
                $(this).css("cursor", "pointer");
            });
            $("#download").mouseleave( function() {
                $(this).css("background-color", "transparent");
                $(this).css("cursor", "auto");
            });
            $("#expand").mouseenter( function() {
                $(this).css("background-color", "rgba(255, 255, 255, 0.1)");
                $(this).css("cursor", "pointer");
            });
            $("#expand").mouseleave( function() {
                $(this).css("background-color", "transparent");
                $(this).css("cursor", "auto");
            });
            $("#changeDesign").click(function() {
                if (currentResume == 1){
                    $("#resume").attr('src', 'assets/R2.png');
                    currentResume = 2;
                }else {
                    $("#resume").attr('src', 'assets/R1.png');
                    currentResume = 1;
                }
                
            });
            $("#expand").click(function() {
                if (expanded){
                    $(this).text("Expand");
                    $("#resume").css("width", "500px");
                    
                    expanded = false;
                }else {
                    $(this).text("Shrink");
                    $("#resume").css("width", "900px");
                    expanded = true;
                }
            });
        } else {
            $(".item").animate({opacity: 0}, 500, function() {
                    $(".item").remove();
            });
        }
    }
}


class Content {

    handleClick(value) {
        if (value == 1){
            if (tabOpen[0] == 0 && tabOpen[1] == 0 && tabOpen[2] == 0){
                if (parseInt($("#headerOne").css("width")) < 200){
                    tabOpen = [1, 0, 0];
                    $("#headerTwo").fadeOut(100);
                    $("#headerThree").fadeOut(100);
                    //Set Height
                    $("#headerOne").animate({height: "525px"});
                    //Set Width 
                    $("#headerOne").animate({width: "650px"});
                    $("#headerOne").css("z-index", "1");
                    $("#headerOne").css("cursor", "auto");
                    $("#headerOne").append("<img id='back' style='position:absolute; left:0px; top: 0px' src='assets/backArrow.png' height='30px' width='30px'>");
                    $("#headerOneText").animate({top: "0px"}, 500);
                    $("#headerOneText").css("z-index", "2");
                    $("#back").css("z-index", "2");
                    $("#back").css("cursor", "pointer");
                    handleAboutMe(true, false);
                    $("#back").click(function () {
                        handleBack();
                    })
                }
            }
        }else if (value == 2){
            if (tabOpen[0] == 0 && tabOpen[1] == 0 && tabOpen[2] == 0){
                if (parseInt($("#headerTwo").css("width")) < 200){
                    tabOpen = [0, 1, 0];
                    $("#headerOne").fadeOut(100);
                    $("#headerThree").fadeOut(100);
                    //Set New Position
                    $("#headerTwo").animate({left: "0px"});
                    //Set Height
                    $("#headerTwo").animate({height: "525px"});
                    //Set Width 
                    $("#headerTwo").animate({width: "650px"});
                    $("#headerTwo").css("z-index", "1");
                    $("#headerTwo").css("cursor", "auto");
                    $("#headerTwo").append("<img id='back' style='position:absolute; left:0px; top: 0px' src='assets/backArrow.png' height='30px' width='30px'>");
                    $("#headerTwoText").animate({top: "0px"}, 500);
                    $("#headerTwoText").css("z-index", "2");
                    $("#back").css("z-index", "2");
                    $("#back").css("cursor", "pointer");
                    handleProjects(true, false);
                    $("#back").click(function () {
                        handleBack();
                    })
                }
            }
        }else if (value == 3){
            if (tabOpen[0] == 0 && tabOpen[1] == 0 && tabOpen[2] == 0){
                if (parseInt($("#headerThree").css("width")) < 200){
                    tabOpen = [0, 0, 1];
                    $("#headerOne").fadeOut(100);
                    $("#headerTwo").fadeOut(100);
                    //Set New Position
                    $("#headerThree").animate({left: "0px"});
                    //Set Height
                    $("#headerThree").animate({height: "525px"});
                    //Set Width 
                    $("#headerThree").animate({width: "650px"});
                    $("#headerThree").css("z-index", "1");
                    $("#headerThree").css("cursor", "auto");
                    $("#headerThree").append("<img id='back' style='position:absolute; left:0px; top: 0px' src='assets/backArrow.png' height='30px' width='30px'>");
                    $("#headerThreeText").animate({top: "0px"}, 500);
                    $("#headerThreeText").css("z-index", "2");
                    $("#back").css("z-index", "2");
                    $("#back").css("cursor", "pointer");
                    handleResume(true, false)
                    $("#back").click(function () {
                        handleBack();
                    })
                }
            }
        } else if (value == 4){
            if (tabOpen[0] == 1){
                $("#headerOneText").animate({top: "25%"}, 500);
                $("#headerOne").animate({width: "170px"});
                $("#headerOne").animate({height: "75px"}, function() {
                    $("#headerOne").css("z-index", "0");
                    $("#headerOne").css("cursor", "pointer");
                });
                handleAboutMe(false, false); 
            } else if (tabOpen[1] == 1){
                $("#headerTwoText").animate({top: "25%"}, 500);
                $("#headerTwo").animate({width: "170px"});
                $("#headerTwo").animate({height: "75px"});
                $("#headerTwo").animate({left: "180px"}, function() {
                    $("#headerTwo").css("z-index", "0");
                    $("#headerTwo").css("cursor", "pointer");
                });
                handleProjects(false, false);
                
            } else if (tabOpen[2] == 1){
                $("#headerThreeText").animate({top: "25%"}, 500);
                $("#headerThree").animate({width: "170px"});
                $("#headerThree").animate({height: "75px"});
                $("#headerThree").animate({left: "360px"}, function() {
                    $("#headerThree").css("z-index", "0");
                    $("#headerThree").css("cursor", "pointer");
                });
                handleResume(false, false);
                
            }
            $("#back").remove()
            tabOpen = [0,0,0];
            $("#headerOne").fadeIn(100);
            $("#headerTwo").fadeIn(500);
            $("#headerThree").fadeIn(500);

        }

        
    }
}

class MobileContent {

    handleClick(value) {
        if (value == 1){
            if (tabOpen[0] == 0 && tabOpen[1] == 0 && tabOpen[2] == 0){
                if (parseInt($("#headerOne").css("width")) < 200){
                    tabOpen = [1, 0, 0];
                    $("#headerTwo").fadeOut(100);
                    $("#headerThree").fadeOut(100);
                    //Set Height
                    $("#headerOne").animate({height: "500px"});
                    //Set Width 
                    $("#headerOne").animate({width: "360px"});
                    $("#headerOne").css("z-index", "1");
                    $("#headerOne").css("cursor", "auto");
                    $("#headerOne").append("<img id='back' style='position:absolute; left:0px; top: 0px' src='assets/backArrow.png' height='30px' width='30px'>");
                    $("#headerOneText").animate({top: "0px"}, 500);
                    $("#headerOneText").css("z-index", "2");
                    $("#back").css("z-index", "2");
                    $("#back").css("cursor", "pointer");
                    handleAboutMe(true, true);
                    $("#back").click(function () {
                        handleBack();
                    })
                }
            }
        }else if (value == 2){
            if (tabOpen[0] == 0 && tabOpen[1] == 0 && tabOpen[2] == 0){
                if (parseInt($("#headerTwo").css("width")) < 200){
                    tabOpen = [0, 1, 0];
                    $("#headerOne").fadeOut(100);
                    $("#headerThree").fadeOut(100);
                    //Set New Position
                    $("#headerTwo").animate({top: "0px"});
                    //Set Height
                    $("#headerTwo").animate({height: "500px"});
                    //Set Width 
                    $("#headerTwo").animate({width: "360px"});
                    $("#headerTwo").css("z-index", "1");
                    $("#headerTwo").css("cursor", "auto");
                    $("#headerTwo").append("<img id='back' style='position:absolute; left:0px; top: 0px' src='assets/backArrow.png' height='30px' width='30px'>");
                    $("#headerTwoText").animate({top: "0px"}, 500);
                    $("#headerTwoText").css("z-index", "2");
                    $("#back").css("z-index", "2");
                    $("#back").css("cursor", "pointer");
                    handleProjects(true, true);
                    $("#back").click(function () {
                        handleBack();
                    })
                }
            }
        }else if (value == 3){
            if (tabOpen[0] == 0 && tabOpen[1] == 0 && tabOpen[2] == 0){
                if (parseInt($("#headerThree").css("width")) < 200){
                    tabOpen = [0, 0, 1];
                    $("#headerOne").fadeOut(100);
                    $("#headerTwo").fadeOut(100);
                    //Set New Position
                    $("#headerThree").animate({top: "0px"});
                    //Set Height
                    $("#headerThree").animate({height: "500px"});
                    //Set Width 
                    $("#headerThree").animate({width: "360px"});
                    $("#headerThree").css("z-index", "1");
                    $("#headerThree").css("cursor", "auto");
                    $("#headerThree").append("<img id='back' style='position:absolute; left:0px; top: 0px' src='assets/backArrow.png' height='30px' width='30px'>");
                    $("#headerThreeText").animate({top: "0px"}, 500);
                    $("#headerThreeText").css("z-index", "2");
                    $("#back").css("z-index", "2");
                    $("#back").css("cursor", "pointer");
                    handleResume(true, true)
                    $("#back").click(function () {
                        handleBack();
                    })
                }
            }
        } else if (value == 4){
            if (tabOpen[0] == 1){
                $("#headerOneText").animate({top: "25%"}, 500);
                $("#headerOne").animate({width: "170px"});
                $("#headerOne").animate({height: "75px"}, function() {
                    $("#headerOne").css("z-index", "0");
                    $("#headerOne").css("cursor", "pointer");
                });
                handleAboutMe(false, true); 
            } else if (tabOpen[1] == 1){
                $("#headerTwoText").animate({top: "25%"}, 500);
                $("#headerTwo").animate({width: "170px"});
                $("#headerTwo").animate({height: "75px"});
                $("#headerTwo").animate({top: "125px"}, function() {
                    $("#headerTwo").css("z-index", "0");
                    $("#headerTwo").css("cursor", "pointer");
                });
                handleProjects(false, true);
                
            } else if (tabOpen[2] == 1){
                $("#headerThreeText").animate({top: "25%"}, 500);
                $("#headerThree").animate({width: "170px"});
                $("#headerThree").animate({height: "75px"});
                $("#headerThree").animate({top: "250px"}, function() {
                    $("#headerThree").css("z-index", "0");
                    $("#headerThree").css("cursor", "pointer");
                });
                handleResume(false, true);
                
            }
            $("#back").remove()
            tabOpen = [0,0,0];
            $("#headerOne").fadeIn(100);
            $("#headerTwo").fadeIn(500);
            $("#headerThree").fadeIn(500);

        }

        
    }
}

var content;


if (mobilecheck()) {
    content = new MobileContent();
} else {
    content = new Content();
}
function handleBack() {
    content.handleClick(4);
}


$(function () {
    $("#zip").mouseenter(function () {
        $("body").after("<div id ='info' style='font-size: 10px;border-radius: 5px; background: linear-gradient(to bottom right, rgba(0, 128, 2, 0.3), rgba(0, 0, 0, 0));; height: 60px; width: 100px; text-align: center;'> <p>Set the weather to the current weather of the zip code</p></div>");
        $("#info").css("position", "absolute");
        $("#info").css("bottom", "2.5%");
        $("#info").css("left", "2.5%");
        $("#info").fadeOut(0);
        $("#info").fadeIn(1000); 
    });
    $("#zip").mouseleave(function () {
        $("#info").fadeOut(1000);
    })
    $("#headerOne").click(function () {
        content.handleClick(1);
        
    })
    $("#headerTwo").click(function () {
        content.handleClick(2);
    })
    $("#headerThree").click(function () {
        content.handleClick(3);
    })
    
});



