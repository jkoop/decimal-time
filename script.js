function padRight(i) {
    var rhs = Math.round((i % 1) * 10000);
    var output = i;
    for (var a = (i + '').length; a < 6; a++) {
        output = output + '0';
    }
    return output;
}

function blah() {
    var d = new Date();
    var second = d.getSeconds() + d.getMilliseconds() / 1000;
    var minute = d.getMinutes() + (d.getSeconds() + d.getMilliseconds() / 1000) / 60;
    var hour = d.getHours() + (d.getMinutes() + (d.getSeconds() + d.getMilliseconds() / 1000) / 60) / 60;

    var hour = hour / 24;
    var minute = (hour * 10) % 1;
    var second = (minute * 100 - Math.floor(minute * 100));
    document.getElementById('second').style.transform = 'rotate(' + ((second * 360) - 180).toFixed(1) + 'deg)';
    document.getElementById('minute').style.transform = 'rotate(' + ((minute * 360) - 180).toFixed(1) + 'deg)';
    document.getElementById('hour').style.transform = 'rotate(' + ((hour * 360) - 180).toFixed(1) + 'deg)';
    document.querySelector('#text').textContent = padRight(Math.floor(hour * 100000) / 10000);
}

setInterval(blah, 60 * 60 * 24 / 100);
blah();
