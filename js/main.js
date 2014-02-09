/*
 |--------------------------------------------------------------------------
 | Terminal
 |--------------------------------------------------------------------------
 */
jQuery(function ($, undefined) {
    $('#term').terminal({
            info: function () {
                this.echo('[[;#D9FF00;#000]Avaiable commands:]');
                this.echo('\twhoami            who i am?');
                this.echo('\tstatus            avaiable or not to work');
                this.echo('\tlanguages         programming languages that i know');
                this.echo('\tframeworks        some frameworks that i use');
                this.echo('\ttools             tools that make things possible');
                this.echo('\tcontact           contact information');
                this.echo('\tage               my age? hum');
                this.echo('');
                this.echo('\tsome other commands like clear are also avaiable');
            },
            whoami: function() {
                this.echo("Hello, my name is Carlos Florêncio, i am a Computer Science student from lisbon.");
                this.echo("I'm a programmer who likes to learn new things and best practices.");
                this.echo("<3 Open Source software.");
                this.echo("\nSometimes i work as a freelancer, so feel free to get in touch via [[b;#44D544;]contact] command");
            },
            status: function () {
                this.echo('[[;#000;#FF0000]Too busy to work right now, sorry!]');
            },
            languages: function() {
                this.echo('\tPHP            ***************');
                this.echo('\tJAVA           **************');
                this.echo('\tHTML5          **************');
                this.echo('\tCSS3           **************');
                this.echo('\tJavaScript     **********');
                this.echo('\tPython         *********')
            },
            frameworks: function() {
                this.echo('\tLaravel');
                this.echo('\tTwitter Bootstrap');
                this.echo('\tHTML5 Boilerplate');
                this.echo('\tCodeigniter');
            },
            tools: function() {
                this.echo('Phpstorm');
                this.echo('Sublime Text');
                this.echo('Brackets');
                this.echo('Eclipse');
                this.echo('Composer');
                this.echo('Chrome');
                this.echo('Command Line :p');
            },
            age:function() {
              this.echo('I was born on 9/10/1993 (think!)')
            },
            contact: function() {
                var self = this;
                this.push(function(command) {
                    if (command.match(/y|yes|sim/i)) {
                        self.echo('Okay then:');
                        self.echo('email: carlosmflorencio@gmail.com');
                        self.pop();
                    } else if (command.match(/n|no|nao/i)) {
                        self.echo('bahhhh');
                        self.pop();
                    }
                }, {
                    prompt: 'wuuuuuuuut, are you sure? '
                });
            }
        },
        {
            greetings: 'Hello stranger, you can interact with me. To see the avaiable commands type [[;#000;#00ee11]info]',
            name: 'terminal',
            height: 400,
            prompt: "$command> "
        });
});

/*
|--------------------------------------------------------------------------
| Text rotator
|--------------------------------------------------------------------------
*/
$(".rotate").textrotator({
    animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 4000 // How many milliseconds until the next word show.
});


/*
|--------------------------------------------------------------------------
| Parallax
|--------------------------------------------------------------------------
*/
var rightKey, leftKey, topKey, bottomKey;

//Set up the triggers for the arrow keys
$(document).keydown(function (e) {
    if (e.keyCode == 37 && typeof leftKey === 'function') {
        leftKey();
    } else if (e.keyCode == 38 && typeof topKey === 'function') {
        topKey();
    } else if (e.keyCode == 39 && typeof rightKey === 'function') {
        rightKey();
    } else if (e.keyCode == 40 && typeof bottomKey === 'function') {
        bottomKey();
    }
});

parallax.add($("#about"))
    .add($("#console"));

parallax.background = $("body");

//Clears each page navigation on load
parallax.preload = function () {
    rightKey = leftKey = topKey = bottomKey = "";
    $(".control").hide();
};


//Setting up page navigation
var overlay = $('.overlay');
parallax.about.onload = function () {
    setBottom("console", "Console");
    overlay.css('background-color', 'rgba(43, 48, 59, .6)');
};

parallax.console.onload = function () {
    setTop("about", "About");
    overlay.css('background-color', 'rgba(0, 0, 0, .6)');
};

//Sets the correct triggers for the arrows, plus arrow keys
function setRight(page, text) {
    $("#rightText").text(text);
    $("#rightControl").show().unbind('click').click(function () {
        parallax[page].right();
    });
    rightKey = function () {
        parallax[page].right();
    };
}

function setLeft(page, text) {
    $("#leftText").text(text);
    $("#leftControl").show().unbind('click').click(function () {
        parallax[page].left();
    });
    leftKey = function () {
        parallax[page].left();
    };
}

function setTop(page, text) {
    $("#topText").text(text);
    $("#topControl").show().unbind('click').click(function () {
        parallax[page].top();
    });
    topKey = function () {
        parallax[page].top();
    };
}

function setBottom(page, text) {
    $("#bottomText").text(text);
    $("#bottomControl").show().unbind('click').click(function () {
        parallax[page].bottom();
    });
    bottomKey = function () {
        parallax[page].bottom();
    };
}

//The fadey bits
function setFade(to) {
    $("#" + to + "Control").mouseenter(function () {
        $("#" + to + "Arrow").fadeTo(500, 1);
        $("#" + to + "Text").fadeTo(500, 1);
    }).mouseleave(function () {
        $("#" + to + "Arrow").stop().fadeTo(500, 0.2);
        $("#" + to + "Text").stop().fadeTo(500, 0);
    });
}

setFade('bottom');
setFade('left');
setFade('right');
setFade('top');


$(".control").hide();
parallax.about.show();
