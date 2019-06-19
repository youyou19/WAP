$(function(){
    'use strict';

    class createBicyclePrototye {
        constructor(s) {
            this.speed = s;
            this.applyBrake = function (decrement) {
                return (this.speed - decrement);
            };
            this.speedUp = function (increment) {
                return (this.speed + increment);
            };
        }
    }
    

    function createMountainBikePrototype(prototype){
        prototype.gear=1;
        prototype.setGear=function(gear){
            prototype.gear=gear;            
        }
        return Object.create(prototype);
    }
    

    function start(){
        let bicyclePrototype=new createBicyclePrototye(5);
        let  mountainBikePrototype=new createMountainBikePrototype(bicyclePrototype);

        console.log(`bicycle prototype-speed: ${bicyclePrototype.speed}`);
        console.log(`bicycle prototype-speed now: ${bicyclePrototype.speedUp(15)}`);
        console.log(`mountainbike prototype-speed: ${mountainBikePrototype.speed}`);
        console.log(`mountainbike prototype-set gear(10): ${mountainBikePrototype.setGear(10)}`);
        console.log(`mountainbike prototype-gear: ${mountainBikePrototype.gear}`);
        console.log(bicyclePrototype);
    }

    

 
    let myNewBike=start();
    // console.log(`new bike prototype: ${myNewBike}`);
});