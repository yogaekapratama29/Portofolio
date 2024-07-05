// Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.screenY > fixedNav){
        header.classList.add("navbar-fixed");
    }else{
        header.classList.remove("navbar-fixed");
    }
}


// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
})

const words = ["Hallo Semua 👋🏻,Saya", "Hallo Everyone 👋🏻,Iam", "안녕하세요 여러분 👋🏻,저는", "皆さん こんにちは 👋🏻,私です"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 90; // Kecepatan pengetikan (ms)
        const deletingSpeed = 90; // Kecepatan penghapusan (ms)
        const delayBetweenWords = 1500; // Jeda antar kata (ms)
        
        function type() {
            const currentWord = words[wordIndex];
            const currentText = currentWord.substring(0, charIndex);

            document.getElementById('typingEffect').textContent = currentText;

            if (isDeleting) {
                if (charIndex > 0) {
                    charIndex--;
                    setTimeout(type, deletingSpeed);
                } else {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    setTimeout(type, typingSpeed);
                }
            } else {
                if (charIndex < currentWord.length) {
                    charIndex++;
                    setTimeout(type, typingSpeed);
                } else {
                    isDeleting = true;
                    setTimeout(type, delayBetweenWords);
                }
            }
        }

        document.addEventListener('DOMContentLoaded', (event) => {
            type();
        });
