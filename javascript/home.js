jQuery(function($) {

    //for headmenu
    $( "#headmenu li" ).hover(
        function(){
            $( this ).toggleClass( "select", 0 ).find('div.sub').toggleClass( "display", 0 )
        },
        function(){
            $( this ).toggleClass( "select", 0 ).find('div.sub').toggleClass( "display", 0 )
        }
    );
    //for headmenu submenu class
    $( "ul.list li" ).hover(
        function(){
            $( this ).find('a').toggleClass( "select", 0 );
        },
        function(){
            $( this ).find('a').toggleClass( "select", 0 );
        }
    );
    //jquery tabs
    $( "#jqui_tab1" ).tabs();
    $( "#jqui_tab2" ).tabs();
    $( "#jqui_tab3" ).tabs();
    $( "#jqui_tab4" ).tabs();
    $('#jqui_tab4').click('tabsselect', function (event, ui) {
       //for ie7
        var active = $("#tab3_content").tabs('option', 'active');
        var now = active + 3;
        $('#flexslider_' + now).flexslider({
            animation: "slide"
        }).resize();
    });


    $( "#tab3_content" ).tabs();
    $('#tab3_content').click('tabsselect', function (event, ui) {
        var ul = $("#tab3_content_ul");
        var active = $("#tab3_content").tabs('option', 'active');
        var now = active + 1;
        ul.removeClass('bg_n1');
        ul.removeClass('bg_n2');
        ul.removeClass('bg_n3');
        ul.addClass('bg_n' + now);
    });
    //$( "#tab6_content" ).tabs();

    var icons = {
        header: "icon-angle-up",
        activeHeader: "icon-angle-down"
    };


    //jquery accordion
    $( "#accordion_1" ).accordion({
//			collapsible: true ,
        heightStyle: "content",
        animate: 250,
        icons: icons,
//			header: "> div > h3"
        header: ".panel_head"
    });
    //
    $( "#accordion_2" ).accordion({
//			collapsible: true ,
        heightStyle: "content",
        animate: 250,
        icons: icons,
//			header: "> div > h3"
        header: ".panel-title"

    });

    var tab6_content = $( "#tab6_content").parent().find('div.tab_con');

    $( "#tab6_content" ).accordion({
//			collapsible: true ,
        heightStyle: "content",
        animate: 250,
        icons: icons,
		//header: "> div > a",
        activate: function (event, ui) {

            var active = $( "#tab6_content" ).accordion( "option", "active" );

            tab6_content.each(function(i){
                if (i == active) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            });
        }
        //header: ".panel_head"
    });

    //flexslider
    $('#flexslider').flexslider({
        animation: "slide"
    });

    $('#flexslider_2').flexslider({
        animation: "slide"
    });


    $('#flexslider_3').flexslider({
        animation: "slide"
    });


    $('#flexslider_4').flexslider({
        animation: "slide"
    });

    $('#flexslider_5').flexslider({
        animation: "slide"
    });

    //
    $('#slidetoggle').click(function(){
        $('#slidetoggle_div').slideToggle();
        $(this).toggleClass('app_down').toggleClass('app_up');
    });

});
