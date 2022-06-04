 
//for menu toggle 
 $(document).ready(function(){
        $('.toggle').click(function(){
            $('ul').toggleClass('active');
        })
    })
//for hiding in contact subject 
 $(document).ready(function(){
    $("#hide").click(function(){
        $("#subject").hide();
         $("label").hide();
    });
    $("#show").click(function(){
        $("#subject").show();
         $("label").show();
    });
});