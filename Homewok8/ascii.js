"use strict";
window.onload = function(){
    (function(){

        var area = document.getElementById("text_area"),
            start = document.getElementById("startB"),
            stop = document.getElementById("stopB"),
            animation = document.getElementById("animation"),
            size = document.getElementById("fontsize"),
            turbo = document.getElementById("turbo");

        var isStarted = false,
            speed = 200,
            arr,
            intervalId = 0,
            index = 0;

        start.onclick = function(e){
            if(arr===undefined) {return;}
            moveAnimation();
            setModeOpt(true);
        } ;

        stop.onclick = function(e){
            stopAction();
        } ;
		var initialize = function(val){
            arr = val.split("=====\n");
            console.log(arr);
            index = 0;
            setAre(arr[index]);
        } ;

        var setAre = function(val){
            area.value = val;
        } ;

        var moveAnimation = function(){
            if(arr.length == 0) {return; }
            isStarted = true;
            intervalId = setInterval(iterate, speed) ;
        };

        var setModeOpt = function(bool){

            start.disabled = bool;
            stop.disabled = !bool;
            animation.disabled = bool;
        } ;

       
        animation.onchange = function(){
            stopAction();
            var val = ANIMATIONS[this.value];
            initialize(val);
        } ;
//      Tiny (7pt), Small (10pt), Medium (12pt), Large (16pt), Extra Large (24pt), XXL (32pt)
        size.onchange = function(){
            var font = 12; //pt
            switch(this.value){
                case "Tiny":
                    font = 7;
                    break;
                case "Small":
                    font = 10;
                    break;
                
                case "Large":
                    font = 16;
                    break;
                case "Extra Large":
                    font = 24;
                    break;
                case "XXL":
                    font = 32;
                    break;
                default:
                    font = 12;
            }

            area.style.fontSize = font+'pt';
        } ;

        turbo.onchange = function(){
            console.log(speed);
            if( this.checked ){
                speed = speed/2;
            }else{
                speed = speed * 2;
            }

            resetSpd();
        } ;

        

        var iterate = function(){
            index++;
            if(index >= arr.length) { index = 0;}

                setAre(arr[index]);
        } ;

          var stopAction = function(){
            if(isStarted === false) {return; }

            if(intervalId!==0){
                clearInterval(intervalId);
                setModeOpt(false);
                isStarted = false;
            }
        } ;

        var resetSpd = function(){
            if(isStarted === false) {return; }

            if(intervalId!==0){
                clearInterval(intervalId);
                moveAnimation();
            }
        } ;

    })();
} ;


