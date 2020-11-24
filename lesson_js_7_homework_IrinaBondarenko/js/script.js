//Полная загрузка страницы
$(document).ready(function () {

//Open tabs
$(function() {
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});

//Rabdom color
    $(document).keyup(function (evt) {
        if (evt.keyCode == 32) {
              
            let hex = '#';
            let range = 'ABCDEF0123456789';

            for (let i = 0; i < 6; i++) {
                hex += range.charAt(Math.floor(Math.random() * range.length));
              }
              
        $('.hex-color').text(hex);
        $('.color-wrap').css('background-color', hex);         

            let e, t, n, r, i = $('.color-wrap').css('background-color');
            if (i.match(/^rgb/)) {
                i = i.match(/rgb\(([^)]+)\)/)[1];
                i = i.split(/ *, */).map(Number);
                e = i[0];
                t = i[1];
                n = i[2]
            } else if ("#" == i[0] && 7 == i.length) {
                e = parseInt(i.slice(1, 3), 16);
                t = parseInt(i.slice(3, 5), 16);
                n = parseInt(i.slice(5, 7), 16)
            } else if ("#" == i[0] && 4 == i.length) {
                e = parseInt(i[1] + i[1], 16);
                t = parseInt(i[2] + i[2], 16);
                n = parseInt(i[3] + i[3], 16)
            }

            r = (e * 299 + t * 587 + n * 114) / 1e3;
            if (r < 125) {
                 $('.hex-color').css('color', "white");
            } else {
                 $('.hex-color').css('color', "black");
            }
        };
    });  
    
    //border radius
    let exampleBox = $(".example-box");
    let inputTL = $(".inputTL");

    inputTL.change(function () {
        let brTL = $(".brTL")
        exampleBox.css('border-top-left-radius', this.value + "%");
        brTL.text("border-top-left-radius: " + this.value + "%;")
    });
    let inputTR = $(".inputTR");
    inputTR.change(function () {
        let brTR = $(".brTR")
        exampleBox.css("border-top-right-radius", this.value + "%");
        brTR.text("border-top-right-radius: " + this.value + "%;")
    });
    let inputBR = $(".inputBR");
    inputBR.change(function () {
        let brBR = $(".brBR")
        exampleBox.css("border-bottom-right-radius", this.value + "%");
        brBR.text("border-bottom-right-radius: " + this.value + "%;")
    });
    let inputBL = $(".inputBL");
    inputBL.change(function () {
        let brBL = $(".brBL")
        exampleBox.css("border-bottom-left-radius", this.value + "%");
        brBL.text("border-bottom-left-radius: " + this.value + "%;")
    });

    //Array
    let buttonEng = $(".button__eng");
    let buttonRus = $(".button__rus");

    let arr = {
        "eng": ["Apple", "Orange", "Pineapple", "Cherry"],
        "rus": ["Яблоко", "Апельсин", "Ананас", "Вишня"]
    }

    buttonRus.on("click", function () {
        for (let i = 0; i < arr["rus"].length; i++) {
            console.log(arr["rus"][i]);
        }
    })

    buttonEng.on("click", function () {
        for (let i = 0; i < arr["eng"].length; i++) {
            console.log(arr["eng"][i]);
        }
    });
});