function countDown(secs,ele){
    var element=document.getElementById(ele);
    element.innerHTML=secs;
    if(secs<1){
        clearTimeout(timer);
        element.innerHTML='Happy Independence Day';
    }
    secs--;
    var timer=setTimeout('countDown('+secs+',"'+ele+'")',1000);
}
countDown(10,"status");