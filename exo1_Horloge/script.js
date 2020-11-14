const date = document.getElementById("date");
const horloge = document.getElementById("horloge");

function showTime () {
    let today = new Date();
    let year = today.getFullYear();
    let month = isLessThan10(today.getMonth() + 1);
    let day = isLessThan10(today.getDate());
    let hours = isLessThan10(today.getHours());
    let minutes = isLessThan10(today.getMinutes());
    let seconds = isLessThan10(today.getSeconds());

    date.innerHTML = "Nous sommes le : " + day + "/" + month + "/" + year + "."
    horloge.innerHTML = "Il est actuellement " + hours + ":" + minutes + ":" + seconds + "."
    set
}

function isLessThan10 (i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

setInterval(showTime, 1000);