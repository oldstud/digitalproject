"use strict";

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider').mount();

    new Splide('#units_slider', {
        pagination: false,
        perPage: 3,

        breakpoints: {
            1280: {
                perPage: 2,
            },
            925: {
                perPage: 1
            }
        }
    }).mount();

});


window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above

    let form = document.getElementById("my-form");
    let button = document.getElementById("my-form-button");
    let status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();


        status.innerHTML = "Thanks!&#x1F9D9;";
        status.style.background = "rgba(0, 255, 0, 1)";
    }

    function error() {
        status.style.background = "rgba(255, 0, 0, 0.7)";
        status.innerHTML = "Oops! There was a problem.&#x1F916;";

    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        let data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });






    //btns mapArticle


    let map = document.getElementById("map");

    let homeBtn = document.getElementById("home_btn");


    homeBtn.onclick = function () {
        if (homeBtn.style.right == "0px") {
            homeBtn.style.right = "-259px";
            map.style.zIndex = "-10";
        }
        else if (homeBtn.style.right !== "0px") {
            homeBtn.style.right = "0";
            map.style.zIndex = "10";
        }
    }

    let phoneBtn = document.getElementById("phone_btn");
    phoneBtn.onclick = function () {
        if (phoneBtn.style.right == "0px") {
            phoneBtn.style.right = "-259px";

        }
        else if (phoneBtn.style.right !== "0px") {
            phoneBtn.style.right = "0";

        }
    }

});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}



//ALL about NAV
document.addEventListener('DOMContentLoaded', function () {
    let nav_block = document.getElementById("nav_block")
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 280) {
            nav_block.classList.add("when_scroll");
        }
        if ((window.pageYOffset < 280) && (nav_block.classList.contains("when_scroll"))) {
            nav_block.classList.remove("when_scroll")
        }
    });
    let logoWillBeBtn = document.getElementById("logo");
    let navUl = document.getElementById("nav_items");

    const mediaMobile = window.matchMedia('(max-width: 700px)');

    const mediaDesktop = window.matchMedia('(min-width: 701px)');

    function handleTabletChange(e) {
        if (e.matches) {
            if (mediaDesktop.matches) {
                navUl.style.display = "flex";
            }
        }
    }
    mediaDesktop.addEventListener('change', handleTabletChange)
    handleTabletChange(mediaDesktop);

    function handleTabletChangeSmall(e) {
        if (e.matches) {
            if (mediaMobile.matches) {
                console.log("work")
                navUl.style.display = "none";
            }
        }
    }
    mediaMobile.addEventListener('change', handleTabletChangeSmall)
    handleTabletChangeSmall(mediaMobile);




    logoWillBeBtn.onclick = function () {
        if (mediaMobile.matches) {
            if (navUl.style.display == "none") {
                navUl.style.display = "flex";
            }
            else if (navUl.style.display !== "none") {
                navUl.style.display = "none";
            }
        }
    }
})




