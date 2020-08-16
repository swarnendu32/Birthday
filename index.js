var img=[1,2,3,4,5,6,7,8,9];
var i=0;

function changeImage()
{
	var pic="Ankita/img"+img[i]+".jpg";
	document.querySelector(".cont-img").setAttribute("src",pic);
	if(i<img.length-1)
	{
		i++;
	}
	else
	{
		i=0;
	}
}
