window.addEventListener('DOMContentLoaded', (event) => {
    /**
     * ==================
     * CUSTOM TAB NAV
     * ==================
     */
    function customTabNavs() {

        try {

            const tabs = document.querySelectorAll('.tt-tab-link');
            const tabContents = document.querySelectorAll('.tt-tab');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const target = document.getElementById(tab.dataset.tab);

                    tabs.forEach(t => t.classList.remove('active'));
                    tabContents.forEach(tc => tc.classList.remove('active'));

                    tab.classList.add('active');
                    target.classList.add('active');
                });
            });

            // Activate the first tab by default
            tabs[0].click();
            
        } catch (e) {
            console.log("customTabNavs() :" + e);
        }

    }
    customTabNavs();

});