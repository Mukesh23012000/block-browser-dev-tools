function blockDevTools(isDebuggger=false){
    document.addEventListener('keydown', (event) => {
        if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) event.preventDefault();
    });
    if(isDebuggger){
        setInterval(() => {
            if (typeof window !== 'undefined') {
                eval('debugger');
            }
        }, 2000);
    }
}

module.exports = blockDevTools;