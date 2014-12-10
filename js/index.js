$(document).ready(function() {
    var canvas = document.getElementById('canvas')
              , context = canvas.getContext('2d')
              , img = new Image()
              , w
              , h
              , offset
              , glitchInterval;
            
            img.src = 'http://i62.tinypic.com/2po4045.png';
            img.onload = function() {
              init();
                window.onresize = init;
            };
            
            var init = function() {
                clearInterval(glitchInterval);
                canvas.width = w = window.innerWidth;
                offset = w * 0;
                canvas.height = h = ~~(100 * ((w - (offset * 100)) / img.width));
                glitchInterval = setInterval(function() {
                    clear();
                    context.drawImage(img, 0, 0, img.width, 100, offset, 0, w - (offset * 2), h);
                    setTimeout(glitchImg, randInt(100, 1000));
                }, 500);
            };
            
            var clear = function() {
                context.rect(0, 0, w, h);
                context.fillStyle = 'white';
                context.fill();
            };
                
            var glitchImg = function() {
                for (var i = 0; i < randInt(1, 13); i++) {
                    var x = Math.random() * w;
                    var y = Math.random() * h;
                    var spliceWidth = w - x;
                    var spliceHeight = randInt(5, h / 3);
                    context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
                    context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
                }
            };
            
            var randInt = function(a, b) {
                return ~~(Math.random() * (b - a) + a);
            };
    });
