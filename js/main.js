function initMap(){
    const loc = {lat:28.535517, lng:77.391029};
    const map = new google.maps.Map(document.querySelector(".map"),{
            zoom:14,
            center:loc
        }
    );
    const marker = new google.maps.Marker({position: loc, map:map});
}

$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800)
    }
})

window.addEventListener('scroll', function(){
    const nav = document.querySelector('#navbar');
    if(window.scrollY > 150){
        nav.style.opacity = 0.9
    }else{
        nav.style.opacity = 1;
    }
})