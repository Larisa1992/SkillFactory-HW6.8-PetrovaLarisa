let progressProcent = 0;

function checkprogressProcent() {
    progressProcent = progressProcent === 100 ? 100: progressProcent % 100;
    console.log("checkprogressProcent ", progressProcent);
}

function changeProdress() {
    $("#my-progress-bar").width(progressProcent + '%');
}

function clickButton1() {
    progressProcent += 1;
    checkprogressProcent();
    changeProdress();
   // console.log("кнопка 1% ", progressProcent + '%');
}

function clickButton3() {
    progressProcent += 3;
    checkprogressProcent();
    changeProdress();
   // console.log("кнопка 3% ", progressProcent);
}

function clickButton7() {
    progressProcent += 7;
    checkprogressProcent();
    changeProdress();
   // console.log("кнопка 7 ", progressProcent);
}

function init() {
    $('.btn-success').click(clickButton1);
    $('.btn-warning').click(clickButton3);
    $('.btn-danger').click(clickButton7);     
}

$(document).ready(init);
