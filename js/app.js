window.onload = function() {
     
    var current,screen,output,limit,zero,period,operator;
    screen = document.getElementById("result");
    
    var elem = document.querySelectorAll(".num");
    var len = elem.length;
    for(var i=0;i<len;i++) {
        elem[i].addEventListener("click",function() {
            num= this.value;
            output = screen.innerHTML +=num;
            limit = output.length;
            if(limit>16) {
                alert("No more input allowed");
            }
        },false);
    }
    
}
