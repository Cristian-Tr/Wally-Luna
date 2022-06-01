$(function () {

    init();
    init();
    //set random tiles value and add classes
    function init() {
        var panelValues = [1, 2, 3, 4, 5, 6, 7, 8, ""],
            $panelBox = $(".panel");
        $panelBox.html("");
        for (let i = 0; i < 9; i++) {
            var $newDiv = $("<div>");
            let numbers = random(panelValues);
            $newDiv.html(numbers);
            $newDiv.addClass("tiles tile" + numbers);
            $panelBox.append($newDiv);
        }
        $(".tile").css("background-image", "none");
        $panelTiles = $(".tiles");
        move();
    }

    //check if the game is complete
    function checkState() {
        let checkArray = [];
        for (let i = 0; i < 9; i++) {
            if ($(".tiles").eq(i).hasClass("tile" + (i + 1))) {
                checkArray.push(i + 1);
            }
        }
        if (checkArray.length === 8) {
            $(".tile").css("background-image", "url(./dog.jpg)");
            setTimeout(function () {
                alert("Congratulations! If you want to play again click OK!");
                init();
            }, 250);
        }
    }

    //set array random element and delete it
    function random(arr) {
        let rand = Math.floor(Math.random() * arr.length);
        let toReturn = arr[rand];
        arr.splice(rand, 1);
        return toReturn;
    }

    //change positions of two tiles
    function swapTiles(tile1, tile2) {
        var $temp = $("<div>");
        tile1.before($temp);
        tile2.before(tile1);
        $temp.before(tile2);
        $temp.remove;
    }

    // Move this tile to the 'empty' box
    function move() {
        $(".tiles").on("click", function (e) {
            // tile 0
            if ($(this).is($(".tiles").eq(0))) {
                if ($(".tiles").eq(1).hasClass("tile")) swapTiles($(this), $(".tiles").eq(1));
                else if ($(".tiles").eq(3).hasClass("tile")) swapTiles($(this), $(".tiles").eq(3));
            }
            // tile 1
            else if ($(this).is($(".tiles").eq(1))) {
                if ($(".tiles").eq(0).hasClass("tile")) swapTiles($(this), $(".tiles").eq(0));
                else if ($(".tiles").eq(2).hasClass("tile")) swapTiles($(this), $(".tiles").eq(2));
                else if ($(".tiles").eq(4).hasClass("tile")) swapTiles($(this), $(".tiles").eq(4));
            }
            // tile 2
            else if ($(this).is($(".tiles").eq(2))) {
                if ($(".tiles").eq(1).hasClass("tile")) swapTiles($(this), $(".tiles").eq(1));
                else if ($(".tiles").eq(5).hasClass("tile")) swapTiles($(this), $(".tiles").eq(5));
            }
            // tile 3
            else if ($(this).is($(".tiles").eq(3))) {
                if ($(".tiles").eq(0).hasClass("tile")) swapTiles($(this), $(".tiles").eq(0));
                else if ($(".tiles").eq(4).hasClass("tile")) swapTiles($(this), $(".tiles").eq(4));
                else if ($(".tiles").eq(6).hasClass("tile")) swapTiles($(this), $(".tiles").eq(6));
            }
            // tile 4
            else if ($(this).is($(".tiles").eq(4))) {
                if ($(".tiles").eq(1).hasClass("tile")) swapTiles($(this), $(".tiles").eq(1));
                else if ($(".tiles").eq(3).hasClass("tile")) swapTiles($(this), $(".tiles").eq(3));
                else if ($(".tiles").eq(5).hasClass("tile")) swapTiles($(this), $(".tiles").eq(5));
                else if ($(".tiles").eq(7).hasClass("tile")) swapTiles($(this), $(".tiles").eq(7));
            }
            // tile 5
            else if ($(this).is($(".tiles").eq(5))) {
                if ($(".tiles").eq(2).hasClass("tile")) swapTiles($(this), $(".tiles").eq(2));
                else if ($(".tiles").eq(4).hasClass("tile")) swapTiles($(this), $(".tiles").eq(4));
                else if ($(".tiles").eq(8).hasClass("tile")) swapTiles($(this), $(".tiles").eq(8));
            }
            // tile 6
            else if ($(this).is($(".tiles").eq(6))) {
                if ($(".tiles").eq(3).hasClass("tile")) swapTiles($(this), $(".tiles").eq(3));
                else if ($(".tiles").eq(7).hasClass("tile")) swapTiles($(this), $(".tiles").eq(7));
            }
            // tile 7
            else if ($(this).is($(".tiles").eq(7))) {
                if ($(".tiles").eq(4).hasClass("tile")) swapTiles($(this), $(".tiles").eq(4));
                else if ($(".tiles").eq(6).hasClass("tile")) swapTiles($(this), $(".tiles").eq(6));
                else if ($(".tiles").eq(8).hasClass("tile")) swapTiles($(this), $(".tiles").eq(8));
            }
            // tile 8
            else if ($(this).is($(".tiles").eq(8))) {
                if ($(".tiles").eq(5).hasClass("tile")) swapTiles($(this), $(".tiles").eq(5));
                else if ($(".tiles").eq(7).hasClass("tile")) swapTiles($(this), $(".tiles").eq(7));
            }
            // play after condition check
            checkState();
        });
    }

});