function blockDevTools(isDebuggger=false,message="Developer tools detected!"){
    document.addEventListener('keydown', (event) => {
        if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) event.preventDefault();
    });
    if(isDebuggger){
        setInterval(() => {
            if (typeof window !== 'undefined') {
                if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
                    alert(message);
                }
                eval('debugger');
            }
        }, 2000);
    }
}

function blockRightClick(){
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
}


function alertBrowserBack(){
    window.addEventListener('beforeunload', function (event) {
        event.preventDefault(); 
        event.returnValue = ''; 
    });
}

function inactivityTimeOut(callback,time=300000, ...callbackArgs){
    let timeout;
    const resetTimer = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback( ...callbackArgs)
        }, time); 
    }
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onkeydown = resetTimer;
    window.ontouchstart = resetTimer;
    window.onscroll = resetTimer;
}

module.exports = {
    blockDevTools,
    blockRightClick,
    alertBrowserBack,
    inactivityTimeOut
};