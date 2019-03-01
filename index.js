    function addNewStyle(newStyle) {
            var styleElement = document.getElementById('styles_js');

            if (!styleElement) {
                styleElement = document.createElement('style');
                styleElement.type = 'text/css';
                styleElement.id = 'styles_js';
                document.getElementsByTagName('head')[0].appendChild(styleElement);
            }
            
            styleElement.appendChild(document.createTextNode(newStyle));
        }

	  	var i =0;
		var str = 'body{\nbackground:AntiqueWhite;\n}\n.css-content{\noverflow:scroll;\n background:#BBFFFF;\n  height:35vh;\n  width:100%;\n  border-style:solid;\n border-width:1px;\n  border-color:#54FF9F;\n }\n'+
				'/*写一个文本框*/ \n'
				+'.main-text{\n'
				+'border-style:solid;\n'
				+'height:35vh;\n'
				+'width:100%;\n'
				+'border-width:1px;\n'
				+'border-color:#3300CC;\n'
				+'background:#FFCCCC;\n'
				+'overflow:auto;\n'
				+'}\n'
				+'/*下面开始写简历*/';
	 function typing(){
	    var divTyping = document.getElementById('css-text');
	    if (i < str.length) {
	    	if (str[i] == '\n') {
	    		divTyping.innerHTML += '<br>';
	    	}
	    	 addNewStyle(str[i]);
		     divTyping.innerHTML += str[i++];
		     divTyping.scrollTop = divTyping.scrollHeight;

		     setTimeout('typing()', 50);//递归调用
	    }

   }

   var j = 0;
   var str2 = '大家好，我叫雷帅\n'
   			+'现在就读于上海财经大学计算机科学专业\n'
   			+'未来的梦想是做一名程序员！\n';
   function typing2(){
	    var divTyping = document.getElementById('main-text');
	    if (j < str2.length) {
	    	if (str2[j] == '\n') {
	    		divTyping.innerHTML += '<br>';
	    	}
		     divTyping.innerHTML += str2[j++];
		     divTyping.scrollTop = divTyping.scrollHeight;

		     setTimeout('typing2()', 50);//递归调用
	    }

   }

$(document).ready(function(){

	
    typing();
    setTimeout('typing2()',10000);
});

