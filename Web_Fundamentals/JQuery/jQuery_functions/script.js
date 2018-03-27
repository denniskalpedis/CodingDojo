$(document).ready(function(){
    $('img').click(function(){
        $(this).hide();
    });
    $('#click_btn').click(function(){
        $(this).siblings('div').css("color", "red");
    });
    $('#hide_btn').click(function(){
        $(this).siblings('div').hide("slow");
    });
    $('#show_btn').click(function(){
        $(this).siblings('div').show("slow").css("display", "inline-block");
    });
    $('#toggle_btn').click(function(){
        $(this).siblings('div').toggle();
    });
    $('#slidedown_btn').click(function(){
        $(this).siblings('div').slideDown("slow").css("display", "inline-block");
    });
    $('#slideup_btn').click(function(){
        $(this).siblings('div').slideUp("slow");
    });
    $('#slide_toggle_btn').click(function(){
        $(this).siblings('div').slideToggle("slow");
    });
    $('#fadeIn_btn').click(function(){
        $(this).siblings('div').fadeIn("slow").css("display", "inline-block");
    });
    $('#fadeOut_btn').click(function(){
        $(this).siblings('div').fadeOut("slow");
    });
    $('#addClass_btn').click(function(){
        $(this).siblings('div').addClass("newClass");
    });
    $('#before_btn').click(function(){
        $(this).siblings('div').children("h1").before("<p>Inserted Before</p>");
    });
    $('#after_btn').click(function(){
        $(this).siblings('div').children("p").after("<p>Inserted After</p>");
    });
    $('#append_btn').click(function(){
        $(this).siblings('div').children("p").append(" added to end of '<p>' element");
    });
    $('#html_btn').click(function(){
        $(this).siblings('div').children("p").html("<p>replaced HTML with this.</p>");
    });
    $('#attr_btn').click(function(){
        $(this).siblings('div').children("h1").attr("alt", "new Attribute!");
    });
    $('#val_btn').click(function(){
        $(this).siblings('div').children("input").val("Changed!");
    });
    $('#text_btn').click(function(){
        $(this).siblings('div').children("p").text("Changed the text!");
    });
    $('#data_btn').click(function(){
        $(this).siblings('div').data("blah", "new Attribute!");
    });
    $('#get_data_btn').click(function(){
        $(this).siblings('div').children("p").text($(this).siblings('div').data("blah"));
    });
});