$(document).ready(function () {

    var color = [];
    var number = [];
    var complete = 0;
    var fields = document.querySelectorAll(".back");
    var colors = ["blue", "green", "grey", "orange", "purple", "red", "white", "yellow"];
    var text = document.querySelector("h2");
    var index = 0;

    setInterval(function () {
        if (index === colors.length) index = 0;
        text.style.color = colors[index];
        index++;
    }, 1000);

    var assets = ["./blue.jpg", "./green.jpg",
        "./grey.jpg", "./orange.jpg", "./purple.jpg",
        "./red.jpg", "./white.jpg", "./yellow.jpg",
        "./blue.jpg", "./green.jpg", "./grey.jpg",
        "./orange.jpg", "./purple.jpg", "./red.jpg",
        "./white.jpg", "./yellow.jpg",];

    function click() {
        if ($(this).find(".cover").hasClass("flip")) {
            return;
        }
        $(this).find(".cover").toggleClass("flip");
        color.push($(this).find("img").attr("src"));
        number.push($(this).attr("id"));
        check();
    }

    $(".field").on("click", click);

    function randomColors(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function start() {
        var arr = randomColors(assets);
        for (var i = 0; i < fields.length; i++) {
            var img = document.createElement("img");
            img.src = arr[i];
            fields[i].appendChild(img);
        }
    }

    function check() {
        if (color.length === 2) {
            $(".field").off("click", click);
            setTimeout(function () {
                if (color[0] !== color[1]) {
                    $("#" + number[0]).find(".cover").removeClass("flip");
                    $("#" + number[1]).find(".cover").removeClass("flip");
                    color = [];
                    number = [];
                    $(".field").on("click", click);
                } else {
                    complete += 2;
                    color = [];
                    number = [];
                    final();
                    $(".field").on("click", click);
                }
            }, 500);
        }
    }

    function final() {
        if (complete === 16) {
            alert("   Felicitări!  Ați descoperit toate perechile de aceeași culoare!");
            restart();
        }
    }

    function restart() {
        $(".back").find("img").remove();
        $(".field .cover").removeClass("flip");
        color = [];
        idCheck = [];
        complete = 0;
        start();
    }
    start();

});