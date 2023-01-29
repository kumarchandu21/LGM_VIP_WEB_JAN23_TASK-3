
function fun() {
    var space= [];
    var NAME = $("#name").val();
    var EMAIL = $("#email").val();
    var LINK = $("#url").val();
    var IMAGE =$("#image").val();
    var GENDER = $('input[name="gender"]:checked').val();;
    var selected = new Array();
    $("input[type=checkbox]:checked").each(function () {
        selected.push(this.value);
    });
    var ALLDETAILS = '<div class=s1>'+'<table><tr><td><p class="inf"><strong>Name </strong>:'+`${NAME}`+'</p><p class="inf"><strong>Email </strong>: '+`${EMAIL}`+'</p><p class="inf"><strong>Website Link </strong>:<u>'+`${LINK}`+'</u></p></p><p class="inf"><strong>Gender</strong> : '+`${GENDER}`+'</p><p class="inf"><strong>Skills</strong> : '+`${selected}`+'<td><img src="'+`${IMAGE}`+'"></td></tr></table></div>';
    $('#data').append(ALLDETAILS);
    $("#form").trigger("reset");
}
       