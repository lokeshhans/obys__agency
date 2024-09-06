
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
	y:1200,
	delay:.2,
	opacity:0,
	ease:Power4,
})
tl.to("#loader",{
	display:"none",
})