const myForm = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const emailInfo = document.getElementById("email_info").innerText;
const emailMessage = document.getElementById("email_message");
const infoContainer = document.getElementById("infoContainer");
const iconInfo = document.querySelector(".icon-info");
const infoShow = document.querySelectorAll(".infoShow");

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

myForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const email = emailInput.value.trim();

    if (!email || !regex.test(email)) {
        emailMessage.innerText = "Email không hợp lệ"
    } else if (email !== emailInfo) {
        emailMessage.innerText = "Email không đúng"
    } else {
        infoContainer.style.display = "block";
        iconInfo.style.display = "block";
        myForm.style.display = "none";
        return;
    }
    emailMessage.style.display = "block";
});

infoShow.forEach(function (infoShow) {
    let isShowMore = true;

    infoShow.addEventListener("click", function () {
        const jobItemAll = infoShow.nextElementSibling.querySelectorAll(".job-item-all");

        if (isShowMore) {
            infoShow.textContent = "Show Less";
            jobItemAll.forEach(function (item) {
                item.style.display = "block";
            });
        } else {
            infoShow.textContent = "Show More";
            jobItemAll.forEach(function (item) {
                item.style.display = "none";
            });
        }
        isShowMore = !isShowMore;
    });
});
