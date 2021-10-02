document.getElementsByClassName = function(clsName){
    var retVal = new Array();
    var elements = document.getElementsByTagName("*");
    for(var i = 0;i < elements.length;i++){
        if(elements[i].className.indexOf(" ") >= 0){
            var classes = elements[i].className.split(" ");
            for(var j = 0;j < classes.length;j++){
                if(classes[j] == clsName)
                    retVal.push(elements[i]);
            }
        }
        else if(elements[i].className == clsName)
            retVal.push(elements[i]);
    }
    return retVal;
}

function antiplagiat(){
  var postBodyClass = (postBodyClass) ? postBodyClass : 'post-body';
  var d = document.getElementsByClassName(postBodyClass);
  for(var i=0;i<d.length;i++){
  	d[i].innerHTML = d[i].innerHTML.replace(/\yang/g, 'yang <span class="bajakan"> "tulisan ini diambil dari <a href="https://www.re-tawon.com">Republik Eusosialis Tawon</a>"</span>');
  }
}

antiplagiat();