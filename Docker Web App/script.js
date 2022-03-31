// function in Javascript
function lw()
        {
        
        var xhr=new XMLHttpRequest();
        i=document.getElementById("in1").value;
        
        xhr.open("GET","http://65.2.148.204/cgi-bin/lw.py?x="+i,true);
        xhr.send();
        
        xhr.onload=function (){
        var output=xhr.responseText;
        document.getElementById("d1").innerHTML=output;
                      }
        }
        
   // end of the code   

        
