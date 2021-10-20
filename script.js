const container = document.querySelector('.animation')
const animated = document.querySelector('#animated')
container.addEventListener("mouseenter", function (event) {
    let razao = 0.2
    var x = event.pageX * razao
    var y = event.pageY * razao
    // animated.style.transform = 'translate('+ x +'px, '+ y +'px)'
    // animated.style.transitionDuration += "1500ms"
    animated.setAttribute('style', 'transform: translate('+ x +'px, '+ y +'px); transition-duration: 180ms;')
    setTimeout(function(){
        animated.removeAttribute('style')
       },181)
}, false);


container.addEventListener("mousemove", function (event) {
    let razao = 0.2
    var x = event.pageX * razao
    var y = event.pageY * razao
    animated.style.transform = 'translate('+ x +'px, '+ y +'px)'

    
}, false);


container.addEventListener("mouseleave", function(event){
    animated.setAttribute('style', 'transform: translate(0px, 0px); transition-duration: 500ms;')
    
}, false);