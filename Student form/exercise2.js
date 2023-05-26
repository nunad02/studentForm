 function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    if (h == 0) {
        h = 12;
    }
    if (h >= 12) {
        session = "PM";
    }
    if (h > 12) {
        h = h - 12;
    }
    m = (m < 10) ? m = "0" + m: m;
    s = (s < 10) ? s = "0" + s: s;
    var time = h + ":" + m + ":" + s + " " + session;
     $('#clock').html(time);
        setTimeout(showTime, 1000);
  }
  showTime()

const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const backBtn = document.querySelectorAll("form .back-btn");
const form = document.querySelector("form");
const inputs = form.querySelectorAll(".container input");
nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("next");
    });
});
backBtn.forEach((button) => {
    button.addEventListener("click", () => {
        changeStep("back");
    });
});
form.addEventListener(".submit", (e) => {
    e.preventDefault();
    const inputs = [];
    form.querySelectorAll("input").forEach((input) => {
        const {
            name, value
        } = input;
        inputs.push({
            name, value
        });
    });
    console.log(inputs);
    form.reset();
});
function changeStep(btn) {
    let index = 0;
    const active = document.querySelector(".active");
    index = steps.indexOf(active);
    steps[index].classList.remove("active");
    if (btn === "next") {
        index++;
    } else if (btn === "back") {
        index--;
    }
    steps[index].classList.add("active");
}
 

setInterval(function change9() {
    var range = document.getElementById("range");
    range.min = 0;
    range.max = 100;
    document.getElementById("result").innerHTML = range.value;
});

