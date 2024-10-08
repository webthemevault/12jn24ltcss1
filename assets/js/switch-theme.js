window.addEventListener('DOMContentLoaded', (event) => {
    /**
     * ==========================
     * SWITCH LIGHT / DARK MODE
     * ==========================
     */
    function switchTheme() {
        try {
            let darkMode = localStorage.getItem("darkMode");
            const switchModeToggles = document.querySelectorAll(".ltv-theme-switch-btn");
            const mainDoc = document.getElementsByTagName("html")[0];
            const iconClass =   document.querySelector(".ltv-theme-switch-btn i");
            const whiteLogos = document.querySelectorAll(".logo-white");
            const darkLogos = document.querySelectorAll(".logo-dark");

            const enableDarkMode = () => {
                // Add class to the html
                mainDoc.classList.add("dark-theme");

                // Add class to icon
                iconClass.setAttribute("class", "fa-regular fa-sun");

                // Change Logo
                darkLogos.forEach((darkLogo) => {
                    darkLogo.style.display = "none";
                });

                whiteLogos.forEach((whiteLogo) => {
                    whiteLogo.style.display = "block";
                });

                // update in the local storage
                localStorage.setItem("darkMode", "enabled");
            }

            const disableDarkMode = () => {
                // Add class to the html
                mainDoc.classList.remove("dark-theme");

                // Add class to icon
                iconClass.setAttribute("class", "fa-solid fa-sun");

                // Change Logo
                darkLogos.forEach((darkLogo) => {
                    darkLogo.style.display = "block";
                });

                whiteLogos.forEach((whiteLogo) => {
                    whiteLogo.style.display = "none";
                });

                // update in the local storage
                localStorage.setItem("darkMode", null);
            }

            if (darkMode === "enabled") {
                enableDarkMode();
            }

            switchModeToggles.forEach((switchModeToggle) => {

                switchModeToggle.addEventListener("click", (e) => {

                    e.preventDefault();

                    darkMode = localStorage.getItem("darkMode");

                    if (darkMode !== "enabled") {
                        enableDarkMode();
                        console.log(darkMode);
                    } else {
                        disableDarkMode();
                        console.log(darkMode);
                    }

                });

            });

        } catch (e) {
            console.log("switchTheme(): " + e);
        }
    }
    switchTheme();

});
