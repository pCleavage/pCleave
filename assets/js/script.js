// tippy.js
tippy("[data-tippy-content]");

// aos.js
AOS.init({
    duration: 700,
    once: true
});

// navbar burger
document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        if ($navbarBurgers.length > 0) {
          $navbarBurgers.forEach( el => {
              el.addEventListener('click', () => {
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
              });
        });
    }
});

$(document).ready(function() {
    $(".navbar-burger").click(function() {
          $(".navbar-burger").toggleClass("is-active");
          $(".navbar-menu").toggleClass("is-active");
    });
});

// navbar on scroll
$(function () {
    $(window).on("scroll", function () {
          if ($(window).scrollTop() > 700) {
              $("nav").addClass("nav-w");
              $(".navbar-menu").addClass("nav-w");
              $(".navbar-item").addClass("nav-dark");
              $(".navbar-link").addClass("nav-dark");
              $(".navbar-burger").removeClass("has-text-white");
              $(".navbar-burger").addClass("has-text-dark");
          } else {
              $("nav").removeClass("nav-w");
              $(".navbar-menu").removeClass("nav-w");
              $(".navbar-item").removeClass("nav-dark");
              $(".navbar-link").removeClass("nav-dark");
              $(".navbar-burger").removeClass("has-text-dark");
              $(".navbar-burger").addClass("has-text-white");
          }
    });
});

// back to top
var btn = $("#backtotop");

$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        btn.addClass("show");
    } else {
        btn.removeClass("show");
    }
});

btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
});

// copyright year
document.getElementById("cp-year").innerHTML = new Date().getFullYear();

async function fillTheTitle() {
    responseData = await fetch("https://corsproxy.io/?https://pastebin.com/raw/KwACTd80", {
        cache : "no-store",
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    console.log('fetched raw data');

    jsonData = await responseData.json();

    console.log(jsonData);
    console.log('Guild Count: ' + jsonData["guildCount"]);
    console.log('Client Count: ' + jsonData["clientCount"]);
    console.log('Command Count: ' + jsonData["commandCount"]);
    console.log('Request Count: ' + jsonData["guildCount"]);
    return jsonData;
}

setInterval(async function() {
    const clientData = await fillTheTitle();
    document.getElementById("server-count").innerHTML = clientData["guildCount"];
    document.getElementById("command-count").innerHTML = clientData["commandCount"];
    document.getElementById("user-count").innerHTML = clientData["clientCount"];
}, 5000);