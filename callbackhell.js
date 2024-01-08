function countdown(callback){
    setTimeout(() => {
        var a = document.createElement('h1')
        a.innerHTML = 10;
        document.body.appendChild(a)
        setTimeout(() => {
            a.innerHTML = 9;
            setTimeout(() => {
                a.innerHTML = 8; 
                setTimeout(() => {
                    a.innerHTML = 7;
                    setTimeout(() => {
                        a.innerHTML = 6;
                        setTimeout(() => {
                            a.innerHTML = 5;
                            setTimeout(() => {
                                a.innerHTML = 4;
                                setTimeout(() => {
                                    a.innerHTML = 3;
                                    setTimeout(() => {
                                        a.innerHTML = 2;
                                        setTimeout(() => {
                                            a.innerHTML = 1;
                                            setTimeout(() => {
                                                a.innerHTML = 0;
                                                setTimeout(() => {
                                                    a.innerHTML = 'Happy Independence day'
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000); 
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);                       
        }, 1000);
    }, 1000);
}

countdown(function() {
    console.log("Countdown complete!");
});
