function locomotiveAnimation( ){
	gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation ()
function loadingAnimation() {
	var tl = gsap.timeline()
tl.from(".line h1",{
	y:400,
	stagger:0.4,
	duration:.9,
	delay:.1,	
})
tl.from(".line1-part1",{
	opacity:0,
	onStart:function(){
		
var count = document.querySelector(".line1-part1 h5");
var grow = 0;
setInterval(function () {
	if(grow<=100){
		count.innerHTML= grow++;
	}else{
		grow = 100;
	}
},35)
	}
})
tl.to(".line h2",{
	opacity:1,
	animationName:"now",
})
tl.to("#loader",{
	opacity:0,
	duration:.4,
	delay:4,
})
tl.from("#page1",{
	delay:.2,
	opacity:0,
	ease:Power4,
})
tl.to("#loader",{
	display:"none",
})
tl.from("#nav",{
	y:200,
	opacity:0,
})
tl.from("#hero1 h1, #hero2 h1 , #hero3 h2,#hero3 h3, #hero4 h1",{
	y:100,
	stagger:0.1,
	opacity:0,
})
}
loadingAnimation();
function cursorAnimation() {
	Shery.mouseFollower({
		skew:true,
		ease: "cubic-bezier(0.23, 1, 0.320, 1)",
		duration:.3,
	});
	Shery.makeMagnet("#nav-part2 h2");

	var videoContainer = document.querySelector(".videoContainer");
	var video = document.querySelector(".videoContainer video")
	var image = document.querySelector(".videoContainer img")

	videoContainer.addEventListener("mouseenter",function(){
		videoContainer.addEventListener("mousemove",function(dets){
			gsap.to(".mousefollower",{
				display:"none",
			})
			gsap.to(".play",{
				left:dets.x - 560,
				y:dets.y - 150,
			})
		})
	})
	videoContainer.addEventListener("mouseleave",function(){
		gsap.to(".mousefollower",{
			display:"initial",
		})
		gsap.to(".play",{
			top: "-10",
			left: "80%",
		})
	});
	var flag = 0;
	videoContainer.addEventListener("click",function(){
		if(flag == 0){
		video.play()
		video.style.opacity = 1
		image.style.opacity = 0
		document.querySelector(".play").innerHTML = `<i class="ri-pause-mini-fill"></i>`
		gsap.to(".play",{
			scale:0.5
		})
		flag =1
	} else{
		video.pause()
		video.style.opacity = 0
		image.style.opacity = 1
		document.querySelector(".play").innerHTML = `<i class="ri-play-mini-fill"></i>`
		gsap.to(".play",{
			scale:1
		})
		flag =0
	}
	})
}
cursorAnimation()
function sheryAnimaton() {
	Shery.imageEffect(".img-div",{
		style:5,
		config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272695760684946},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.09,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.41,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.41,"range":[0,2]},"noise_scale":{"value":16.03,"range":[0,100]}},
		// debug:true,
		gooey:true,
	})	
}
sheryAnimaton()
