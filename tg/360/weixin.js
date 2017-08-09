/*arr_wx=['msyy0008'];

var wx_index = Math.floor((Math.random()*arr_wx.length));
var stxlwx = "<span class='manxing'>"+arr_wx[wx_index]+'</span>';

*/

(function() {
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true;
    g.src='2491913.js'/*tpa=http://s.fenxi.gtanhao.com/stats/2491913.js*/;
    s.parentNode.insertBefore(g,s);
})();



var wx = ['prb17330268431']
var num = Math.floor(Math.random()*wx.length);
window.onload = function(){
	document.getElementById('wx_img').setAttribute('src','image/wx/'+wx[num]+'.jpg');

	var img = wx[num]+".jpg";
	var wx_img = "<img width='100%' height='100%' src='image/wx/"+img+"'>";
	var tag_img = document.getElementsByTagName('img');
	for(i in tag_img){
        if(tag_img[i].className=='lazya'){
            tag_img[i].setAttribute('src','image/wx/'+img);
        }
    }
}
stxlwx = wx[num];
function pupopen(){
    document.getElementById("bg").style.display="block";
    document.getElementById("popbox").style.display="block" ; 
  }
function pupclose(){
 	document.getElementById("bg").style.display="none";
    document.getElementById("popbox").style.display="none" ; 
}
 function getByClass(clsName, parent){
 //定义函数getByClass()实现获取document或指定父元素下所有class为on的元素  
    var oParent=parent?document.getElementById(parent):document
    var oCls=oParent.getElementsByTagName('*')//获取所有的标签元素
    var arr=[];
    for(i in oCls){
//对遍历的标签元素与要查找的元素进行判断
        if(oCls[i].className==clsName){
            arr.push(oCls[i])
        }
    }
    return arr
}
