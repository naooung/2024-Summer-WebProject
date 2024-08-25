/* 텍스트 타이핑 효과 */
(function() {

    const spanEl = document.querySelector("main h2 span");
    const txtArr = ['Back-End Developer', 'Front-End Developer', 'Web Publisher', 'Web UI Designer', 'UX Designer'];

    let index = 0;
    let currentChars = txtArr[index].split("");

    function getRandomTimeout() {
        return Math.floor(Math.random() * 100);
    }

    function writeTxt() {
        spanEl.textContent += currentChars.shift();

        if (currentChars.length !== 0) {
            setTimeout(writeTxt, getRandomTimeout());
        } 
        else {
            currentChars = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }

    function deleteTxt() {
        currentChars.pop();
        spanEl.textContent = currentChars.join("");

        if (currentChars.length !== 0) {
            setTimeout(deleteTxt, getRandomTimeout());
        } 
        else {
            index = (index + 1) % txtArr.length;
            currentChars = txtArr[index].split("");
            writeTxt();
        }
    }

    writeTxt();

})();

/* 스크롤 이벤트 */
const headerEl = document.querySelector("header");

window.addEventListener('scroll', function() {
    requestAnimationFrame(scrollCheck);
});

function scrollCheck() {
    let browserScrollY = window.scrollY;

    if (browserScrollY > 0) {
        headerEl.classList.add("active");
    } else {
        headerEl.classList.remove("active");
    }
}

/* 메뉴 이동 애니메이션 효과 */
const animationMove = function(selector) {
    const targetEl = document.querySelector(selector);
    // 현재의 y값
    const browserScrollY = window.scrollY;
    // 이동할 대상의 y값
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({top: targetScrollY, behavior: "smooth"});
}

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scrollMoveEl.length; i++) {
    scrollMoveEl[i].addEventListener('click', function(e) {
        const target = this.dataset.target;
        animationMove(target);
    });
}