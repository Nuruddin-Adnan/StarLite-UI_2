let swiper = new Swiper(".gellery-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});


{

    let width = 100,
        perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
        EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
        time = parseInt((EstimatedTime / 1000) % 60) * 100;

    // Loadbar Animation
    $(".loadbar").animate({
        width: width + "%"
    }, time);

    // Loadbar Glow Animation
    $(".glow").animate({
        width: width + "%"
    }, time);

    // Percentage Increment Animation
    let PercentageID = $("#precent"),
        start = 0,
        end = 100,
        durataion = time;
    animateValue(PercentageID, start, end, durataion);

    function animateValue(id, start, end, duration) {

        let range = end - start,
            current = start,
            increment = end > start ? 1 : -1,
            stepTime = Math.abs(Math.floor(duration / range)),
            obj = $(id);

        let timer = setInterval(function () {
            current += increment;
            $(obj).text(current + "%");
            //obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Fading Out Loadbar on Finised
    setTimeout(function () {
        $('.preloader-wrap').fadeOut(300);
    }, time);
}

