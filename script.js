$(document).ready(function () {
    $('.carousel').slick();
    
    $('.mainbag').viewScroller({
        
        afterChange: function() { 
             var current = $.fn.viewScroller.currentIndex();
             var l = $.fn.viewScroller.numberOfViews();
             console.log(current);
             showHide(current,l);
             console.log($.fn.viewScroller.lookInTheBag());
        },

        animEffectMainViewCss3: 'cubic-bezier(.47,.25,0,.99)',
        loopSubViews: true
        
    });
    
    var current = $.fn.viewScroller.currentIndex();
    var l = $.fn.viewScroller.numberOfViews();
    //console.log(current);
    showHide(current,l);

    function showHide(index, length){
        //this function decides about showing and hiding up and down navigation buttons
        var upbutton = $('#scroll-up');
        var downbutton = $('#scroll-down');
        var effectSpeed = 200;
        
        if (index>0){
            upbutton.fadeIn(effectSpeed); //show up button
        } else {
            upbutton.fadeOut(effectSpeed);//hide up button
        }

        if (index<length-1){
            downbutton.fadeIn(effectSpeed);//show down button
        } else {
            downbutton.fadeOut(effectSpeed);//hide down button
        }
    };

    var countSubviews = function(bagObj){
        var numOfSubs = bagObj.length - 1;
        return numOfSubs;
    }

    //console.log(countSubviews($.fn.viewScroller.lookInTheBag()));

    /*var findSubbags = function(){
        var subs = document.getElementsByClassName('mainbag');
        var values = [].map.call(subs, function(e){
            return e.getAttribute('subbag');
        });
    }*/
    var x = document.getElementsByClassName('subbag');
    var idmain = [].map.call(x,function(e){
            return e.parentNode.parentElement.attributes[0].nodeValue;
    })
    //console.log(x);
    console.log(idmain);

    $('#hidePanel').click(function(){
        var toHide = $('.btn-own-changeview');
        if(toHide.first().css("display") !== "none"){
            toHide.fadeOut();
        } else {
            toHide.fadeIn();
        }
    });

});
