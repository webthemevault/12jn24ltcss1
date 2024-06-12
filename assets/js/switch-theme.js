window.addEventListener('DOMContentLoaded', (event) => {
    /**
     * ==========================
     * SWITCH LIGHT / DARK MODE
     * ==========================
     */
    function switchTheme() {
        try {
            let darkMode = localStorage.getItem("darkMode");
            const switchModeToggles = document.querySelectorAll(".tt-theme-switch-btn");
            const mainDoc = document.getElementsByTagName("html")[0];
            const iconClass =   document.querySelector(".tt-theme-switch-btn .tt-icon");

            const enableDarkMode = () => {
                // Add class to the html
                mainDoc.classList.add("dark");

                // Add class to icon
                iconClass.classList.add("dark-icon");

                // update in the local storage
                localStorage.setItem("darkMode", "enabled");
            }

            const disableDarkMode = () => {
                // Add class to the html
                mainDoc.classList.remove("dark");

                // Add class to icon
                iconClass.classList.remove("dark-icon");

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
