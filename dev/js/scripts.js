import { gsap } from "gsap";

gsap.set("button i",{transformOrigin:"center bottom"});

function fishy_animation(){

    var tl = gsap.timeline();

tl.from(".slogan",{duration:0.5, alpha:0, y:100})
gsap.from(".fish-logo",{duration:0.75, alpha:0, y:-50})
gsap.from(".fish-but",{duration:0.5, alpha:0, y:50})
gsap.from(".fish-but i",{duration:0.25, alpha:0, rotation:-90});
return tl;
}

let button = document.querySelector(".fish-but");
button.addEventListener("mouseover",function(){
    gsap.to(".fish-butn",{duration:0.25, scale:2});
    gsap.to(".fish-but i",{duration:0.40, rotateY: 360, delay:.2, x:50});

    gsap.to(".slogan",{duration:0.5, alpha:0, x:200});
    gsap.to(".fish-logo",{duration:0.25, alpha:0, y:25});

});

button.addEventListener("mouseout",function(){
    gsap.to(".fish-but",{duration:0.25, scale:1});
    gsap.to(".fish-but i",{duration:0.25, rotateY:360, delay:.2, x:0});

    gsap.to(".slogan",{duration:0.25, alpha:1, x:0});
    gsap.to(".fish-logo",{duration:0.25, alpha:1, y:0});
});


var mainTL = gsap.timeline();
mainTL.add(fishy_animation);