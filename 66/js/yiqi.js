// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		$("#w1").text("我观察你很久了");
		$("#w2").text("小姐姐做我对象好不好?");
		$("#pic").attr("src", "https://cdn.jsdelivr.net/gh/loveroath/loveroath.github.io/66/images/1.jpg");
		$("#jsi-cherry-container").hide();
		Dianji++;
		if(Dianji==1){
	   			alert("小姐姐在考虑一下呗");
	   }else if(Dianji==2){
		   		alert("你是我见过的最帅气善良可爱的男孩");
		   		
	   }else if(Dianji==3){
		   		alert("一生一世爱你");
		   		
	   }else if(Dianji==4){
		   		alert("家务我全干");
		   		
	  }else if(Dianji==5){
		   		alert("不藏私房钱");
	  }else if(Dianji==6){
		   		alert("房子写你名");
	  }else if(Dianji==7){
		   		alert("工资全上交");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("小姐姐终于同意了，我爱你");
		$("#w1").text("那从现在开始");
		$("#w2").text("你就是我一个人的小姐姐了~");
		$("#pic").attr("src", "https://cdn.jsdelivr.net/gh/loveroath/loveroath.github.io/66/images/2.jpg");
		$("#jsi-cherry-container").show();
	}
	

}