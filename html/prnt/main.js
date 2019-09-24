 
	canv          = document.getElementById('canv'),
	ctx           = canv.getContext('2d'),
	ismouseDown   = false,
	ismouseout    = false,
	cords         = [],
	gcolor        = 'black',
	isff          = true,
	range         = 0,
	timer		  = 0,
	local_cords   = [],
	default_array = [];

canv.width  = window.innerWidth-100;
canv.height = window.innerHeight-200;



setInterval(function(){
	document.getElementById('p').innerHTML = range =
		document.getElementById('range').value;
}, 1000/20);


canv.addEventListener('mouseup', function(){
	ismouseDown = false;
	ctx.beginPath();
	cords.push('mousedown')
});

canv.addEventListener('mousedown', function(){
	ismouseDown = true;
});

canv.addEventListener('mouseout', function(){
	ismouseout = true;
	ctx.beginPath();
	cords.push('mouseout');
});



canv.addEventListener('mousemove', function(e){

    if(ismouseDown){
    	if(isff){
    		cords.push([e.clientX, e.clientY, gcolor, range]);

			ctx.strokeStyle = gcolor;
			ctx.lineWidth = range * 2;
    		ctx.lineTo(e.clientX-42, e.clientY);
    		ctx.stroke();

    		ctx.beginPath();
    		ctx.fillStyle = gcolor;
    		ctx.arc(e.clientX-42, e.clientY, range, 0, Math.PI*2);
    		ctx.fill();

    		ctx.beginPath();
    		ctx.fillStyle = gcolor;
    		ctx.moveTo(e.clientX-42, e.clientY);
    	}
	}
});

function save(){

	// localStorage.setItem('coords', JSON.stringify(default_array));
	
	localStorage.setItem('coords', JSON.stringify(cords));
	
	// fillblack();
}

function play(){
	 
		timer = setInterval(function(){
			if(!local_cords.length){
				clearInterval(timer);
				ctx.beginPath();
				isff = true;
				return;
		};

		
			isff = false;
			var crd = local_cords.shift();
			e = {
				clientX: crd['0'],
				clientY: crd['1'],
				clolr:   crd['2'],
				range:   crd['3']
			};

			ctx.strokeStyle = e.clolr;
			ctx.lineWidth = e.range * 2;
			ctx.lineTo(e.clientX-50, e.clientY);
			ctx.stroke();

			ctx.beginPath();
			ctx.fillStyle = e.clolr;
			ctx.arc(e.clientX-50, e.clientY, e.range, 0, Math.PI*2);
			ctx.fill();

			ctx.beginPath();
			ctx.strokeStyle = e.clolr;
			ctx.lineWidth = e.range * 2;
			ctx.moveTo(e.clientX-50, e.clientY);

		}, 1000/60);
}

ctx.save();
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canv.width, canv.height);
ctx.fill();
ctx.restore();

function clear(){

	cords = [];

	clearInterval(timer);
	ctx.beginPath();
	isff = true;

	ctx.save();
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canv.width, canv.height);
	ctx.restore();

	ctx.beginPath();
	ctx.strokeStyle = gcolor;
	ctx.fillStyle = gcolor;
}

document.addEventListener('keydown', function(e){
	r = e.keyCode;
	switch(r){
		case 83:
			console.log('S');
			save();
			break;
		case 82:
			console.log("R");
			clear();
			break;
		case 80:
			console.log("P");

			local_cords = JSON.parse(localStorage.getItem('coords'));
			clear();
			play();

			break;
		default:
			console.log("default");
			break;
	}
});

function fillblack(){
	document.getElementById('sml').value  = gcolor  = '#000';
	document.getElementById('c5').style.border = 'solid 3px #ccc'
	document.getElementById('c2').style.border = 'solid 1px #777';
	document.getElementById('c3').style.border = 'solid 1px #777';
	document.getElementById('c4').style.border = 'solid 1px #777';
	document.getElementById('c1').style.border = 'solid 1px #777';
	document.getElementById('c6').style.border = 'solid 1px #777';
}

document.getElementById('c1').onclick = function(){
	document.getElementById('sml').value  = gcolor  = '#D23D3D';
	this.style.border = 'solid 3px #333'
	document.getElementById('c2').style.border = 'solid 1px #777';
	document.getElementById('c3').style.border = 'solid 1px #777';
	document.getElementById('c4').style.border = 'solid 1px #777';
	document.getElementById('c5').style.border = 'solid 1px #777';
	document.getElementById('c6').style.border = 'solid 1px #777';
};
document.getElementById('c2').onclick = function(){
	document.getElementById('sml').value = gcolor   = '#3D46D2';
	this.style.border = 'solid 3px #333'
	document.getElementById('c1').style.border = 'solid 1px #777';
	document.getElementById('c3').style.border = 'solid 1px #777';
	document.getElementById('c4').style.border = 'solid 1px #777';
	document.getElementById('c5').style.border = 'solid 1px #777';
	document.getElementById('c6').style.border = 'solid 1px #777';
};
document.getElementById('c3').onclick = function(){
	document.getElementById('sml').value  = gcolor  = '#36C92A';
	this.style.border = 'solid 3px #333'
	document.getElementById('c2').style.border = 'solid 1px #777';
	document.getElementById('c1').style.border = 'solid 1px #777';
	document.getElementById('c4').style.border = 'solid 1px #777';
	document.getElementById('c5').style.border = 'solid 1px #777';
	document.getElementById('c6').style.border = 'solid 1px #777';
};
document.getElementById('c4').onclick = function(){
	document.getElementById('sml').value  = gcolor  = '#D567B3';
	this.style.border = 'solid 3px #333'
	document.getElementById('c2').style.border = 'solid 1px #777';
	document.getElementById('c3').style.border = 'solid 1px #777';
	document.getElementById('c1').style.border = 'solid 1px #777';
	document.getElementById('c5').style.border = 'solid 1px #777';
	document.getElementById('c6').style.border = 'solid 1px #777';
};
document.getElementById('c5').onclick = function(){
	fillblack();
};
document.getElementById('c6').onclick = function(){
	document.getElementById('sml').value  = gcolor  = 'white';
	this.style.border = 'solid 3px white'
	document.getElementById('c2').style.border = 'solid 1px #777';
	document.getElementById('c3').style.border = 'solid 1px #777';
	document.getElementById('c4').style.border = 'solid 1px #777';
	document.getElementById('c5').style.border = 'solid 1px #777';
	document.getElementById('c1').style.border = 'solid 1px #777';
};