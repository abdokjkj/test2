
var myb1 = document.getElementById("b1");

myb1.onmouseenter = function(){

"use strict";

this.style.backgroundColor = "orange";

}

myb1.onmouseleave = function(){

    "use strict";
    
this.style.backgroundColor = "green";
    
}

document.getElementById("b2").onclick = function(){

"use strict";

document.getElementById("t1").style.visibility = "hidden";

}

document.getElementById("b2").ondblclick = function(){

"use strict";
    
document.getElementById("t1").style.visibility = "visible";
        
}

var num = 0;

document.getElementById("test1").onmouseout = function(){

"use strict";

num += 1;

document.getElementById("test2").innerHTML = num;

}

document.getElementById("test3").onmouseout = function(){

"use strict";
    
num += 1;
    
document.getElementById("test4").innerHTML = num;
    
}
    
document.getElementById("test5").onmouseout = function(){

"use strict";
    
num += 1;
    
document.getElementById("test6").innerHTML = num;
    
}
    
document.getElementById("b3").onclick = function(){

"use strict";

document.getElementById("test1").style.visibility = "hidden";

}

document.getElementById("b3").ondblclick = function(){

"use strict";
    
document.getElementById("test1").style.visibility = "visible";
        
}

document.getElementById("b4").onclick = function(){

"use strict";
    
document.getElementById("test3").style.visibility = "hidden";    
    
}

document.getElementById("b4").ondblclick = function(){

"use strict";
        
document.getElementById("test3").style.visibility = "visible";
        
}

document.getElementById("b5").onclick = function(){

"use strict";
        
document.getElementById("test5").style.visibility = "hidden";
                
}

document.getElementById("b5").ondblclick = function(){

"use strict";
        
document.getElementById("test5").style.visibility = "visible";
                
}

document.getElementById("fa-twitter").onmouseenter = function(){

document.getElementById("twitter").style.color = "red";

}

document.getElementById("fa-facebook-f").onmouseenter = function(){

document.getElementById("facebook").style.color = "red";
    
}

document.getElementById("fa-instagram-square").onmouseenter = function(){

document.getElementById("instagram").style.color = "red";
    
}

document.getElementById("fa-phone-alt").onmouseenter = function(){

document.getElementById("phone").style.color = "red";
    
}

document.getElementById("fa-envelope").onmouseenter = function(){

document.getElementById("envelope").style.color = "red";
    
}







