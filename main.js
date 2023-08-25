    const progressBar = document.getElementById("progress-bar");
    const contentArea = document.getElementById("content-area");

    function updateProgressBar() {
        const contentAreaHeight = contentArea.offsetHeight - window.innerHeight + 100;
        const scrolled = window.scrollY;
        const scrollPercentage = (scrolled / contentAreaHeight) * 100;
      
        progressBar.style.width = scrollPercentage + "%";
    }
    window.addEventListener("scroll", updateProgressBar);
    window.addEventListener("resize", updateProgressBar);
