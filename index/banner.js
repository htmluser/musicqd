var imgs=document.getElementById('imgs').getElementsByTagName('li');
var nums=document.getElementById("num").getElementsByTagName("li");
var luanpo=document.getElementById("banner");
var oimg=document.getElementById('imgs');
var iNow=0;
var dt=null;
oimg.style.width=imgs.length*imgs[0].offsetWidth+"px";

function tab(){
for(var i=0;i<nums.length;i++){
    nums[i].index=i;
    nums[i].onclick=function(){
        clearInterval(dt);
        iNow=this.index;
        for(var i=0;i<nums.length;i++){
            nums[i].className="b";        
        }
        this.className="a";
        oimg.style.left=-(imgs[0].offsetWidth*iNow)+"px";    //这边可以加上我前面所写的那个缓动框架            
    }
    nums[i].onmouseout=function(){
            start();
    }
}
}
