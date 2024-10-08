window.addEventListener('DOMContentLoaded', (event) => {

    /**
     * ===============================
     * Sticky Navbar On scroll
     * ===============================
     */
    function navbarSticky() {

        try {

            // When the user scrolls the page, execute stickyFunction
            window.onscroll = function () { stickyFunction() };

            // Get the navbar
            const header = document.querySelector(".ltv-site-header");

            // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
            function stickyFunction() {

                if (window.scrollY > 0) {

                    header.classList.add("ltv-fixed-top");

                } else {

                    header.classList.remove("ltv-fixed-top");

                }
            }

        } catch (e) {
            console.log("navbarSticky(): " + e);
        }

    }
    navbarSticky();

    /**
     * =======================
     * BAck to top Arrow
     * =======================
     */
    function scrollToTopBtn() {

        try {
            document.addEventListener("scroll", handleScroll);

            var scrollToTopBtn = document.querySelector("#scrollToTop");

            function handleScroll() {

                if ((document.documentElement.scrollTop > 200)) {
                    //show button
                    scrollToTopBtn.style.display = "block";
                } else {
                    //hide button
                    scrollToTopBtn.style.display = "none";
                }
            }

            scrollToTopBtn.addEventListener("click", scrollToTop);

            function scrollToTop(e) {
                e.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }

        } catch (e) {
            console.log("scrollToTopBtn(): " + e);
        }
    }
    scrollToTopBtn();

    /**
     * ========================
     * FULL SEARCH COLLAPSE
     * ========================
     */
    function fullSearchCollapse() {

        try {

            // Will hold previously focused element
            var focusedElementBefore;

            const fullSearch = document.querySelector("#fullsearch-container");

            // Menu Toggle
            const collapseBtns = document.querySelectorAll(".ltv-toggle-fullsearch");

            collapseBtns.forEach((collapseBtn) => {
                collapseBtn.addEventListener('click', openSearch);
            });

            function openSearch() {

                fullSearch.classList.add('show');

                fullSearch.innerHTML = `
                <div id="fullsearch" class="fullsearch-menu">
                    <div class="fullsearch-search-btn-container">
                        <button id="closeSearch" type="button" class="close-menu-btn" aria-label="Close Sidebar">
                            <i class="fa fa-x"></i>
                        </button>
                    </div>
                    <div class="sidebar-search-container">
                        <form action="search.html" class="form-icon-inline">
                            <input type="search" name="s" class="form-control" placeholder="Search...">
                            <button type="button" class="form-button" aria-label="Search">
                                <i class="fa fa-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            `;

                const fullSearchMenu = document.querySelector("#fullsearch");
                const closeBtn = document.querySelector("#closeSearch");

                // Save current focus
                focusedElementBefore = document.activeElement;

                // Listen for and Trap the Keyboard
                fullSearchMenu.addEventListener('keydown', trapTabKey);

                // Close Menu Button
                closeBtn.addEventListener('click', closeSearch);

                // Find all focisable children
                var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], button:not([disabled])';
                var focusableElements = fullSearchMenu.querySelectorAll(focusableElementsString);

                // Convert NodeList to Array
                focusableElements = Array.prototype.slice.call(focusableElements);

                var firstTabStop = focusableElements[0];
                var lastTabStop = focusableElements[focusableElements.length - 1];

                // Show Menu and Overlay
                fullSearchMenu.classList.add("show");

                // Bring focus on first child
                firstTabStop.focus();

                function trapTabKey(e) {
                    // Check if TAB key press
                    if (e.keyCode === 9) {

                        // SHIFT + TAB
                        if (e.shiftKey) {
                            if (document.activeElement === firstTabStop) {
                                e.preventDefault();
                                lastTabStop.focus();
                            }

                            // TAB
                        } else {
                            if (document.activeElement === lastTabStop) {
                                e.preventDefault();
                                firstTabStop.focus();
                            }
                        }
                    }

                    // ESCAPE
                    if (e.keyCode === 27) {
                        closeSearch();
                    }
                }

            }

            function closeSearch() {
                // Hide Menu and Overlay
                fullSearch.classList.remove('show');

                // Set focus back to element that had it before the Menu was opened
                focusedElementBefore.focus();
            }

        } catch (e) {
            console.log("fullSearchCollapse(): " + e);
        }

    }
    fullSearchCollapse();

    /**
     * ========================
     * NAVBAR COLLAPSE
     * ========================
     */
    function navbarCollapse() {

        try {
            // Will hold previously focused element
            var focusedElementBefore;

            // Find the menu and its overlay
            const navbarMenu = document.querySelector("#sidebarMenu");
            const overlay = document.querySelector(".body-overlay");
            const closeBtn = document.querySelector("#ltv-close-menu-btn");

            // Menu Toggle
            const collapseBtns = document.querySelectorAll(".ltv-sidebar-toggle");

            collapseBtns.forEach((collapseBtn) => {
                collapseBtn.addEventListener('click', openSidebar);
            });

            function openSidebar() {

                collapseBtns.forEach((collapseBtn) => {
                    collapseBtn.classList.add('open');
                });

                // Save current focus
                focusedElementBefore = document.activeElement;

                // Listen for and Trap the Keyboard
                navbarMenu.addEventListener('keydown', trapTabKey);

                // Listen for indicators to close the Menu
                overlay.addEventListener('click', closeSideBar);

                // Close Menu Button
                closeBtn.addEventListener('click', closeSideBar);

                // Find all focisable children
                var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], button:not([disabled])';
                var focusableElements = navbarMenu.querySelectorAll(focusableElementsString);

                // Convert NodeList to Array
                focusableElements = Array.prototype.slice.call(focusableElements);

                var firstTabStop = focusableElements[0];
                var lastTabStop = focusableElements[focusableElements.length - 1];

                // Show Menu and Overlay
                navbarMenu.classList.add("show");
                overlay.classList.add("show");

                // Bring focus on first child
                firstTabStop.focus();

                function trapTabKey(e) {
                    // Check if TAB key press
                    if (e.keyCode === 9) {

                        // SHIFT + TAB
                        if (e.shiftKey) {
                            if (document.activeElement === firstTabStop) {
                                e.preventDefault();
                                lastTabStop.focus();
                            }

                            // TAB
                        } else {
                            if (document.activeElement === lastTabStop) {
                                e.preventDefault();
                                firstTabStop.focus();
                            }
                        }
                    }

                    // ESCAPE
                    if (e.keyCode === 27) {
                        closeSideBar();
                    }
                }

            }

            function closeSideBar() {

                collapseBtns.forEach((collapseBtn) => {
                    collapseBtn.classList.remove('open');
                });

                // Hide Menu and Overlay
                navbarMenu.classList.remove("show");
                overlay.classList.remove("show");

                // Set focus back to element that had it before the Menu was opened
                focusedElementBefore.focus();
            }

        } catch (e) {
            console.log("navbarCollapse(): " + e);
        }

    }
    navbarCollapse();

    /**
     * ====================
     * ADD ARIA DETAILS
     * ====================
     */
    function addAriaAttributes() {

        function setRoleAttribute(selector, role) {
            document.querySelectorAll(selector).forEach(element => {
                if (!element.hasAttribute('role')) {
                    element.setAttribute('role', role);
                }
            });
        }
    
        function setLinkAttributes(selector, role, ariaLabel) {
            document.querySelectorAll(selector).forEach(link => {
                if (!link.hasAttribute('role')) {
                    link.setAttribute('role', role);
                }
                if (!link.hasAttribute('aria-label')) {
                    link.setAttribute('aria-label', ariaLabel);
                }
            });
        }
    
        try {
            setRoleAttribute('table', 'table');
            setRoleAttribute('caption', 'caption');
            setRoleAttribute('thead, tbody, tfoot', 'rowgroup');
            setRoleAttribute('tr', 'row');
            setRoleAttribute('td', 'cell');
            setRoleAttribute('th', 'columnheader');
            setRoleAttribute('th[scope=row]', 'rowheader');
            setRoleAttribute('ol, ul', 'list');
            setRoleAttribute('li', 'listitem');
            setRoleAttribute('dl', 'associationlist list');
            setRoleAttribute('dt', 'associationlistitemkey listitem');
            setRoleAttribute('dd', 'associationlistitemvalue listitem');
            setLinkAttributes('a', 'link', 'Link');
        } catch (e) {
            console.error("addAriaAttributes():", e);
        }
    }
    addAriaAttributes();
    
    /**
     * ==================================
     * INJECT FORM_CONTROL, FORM SELECT
     * =================================
     */
    function injectBsFormClasses() {
        try {
            const inputs = document.querySelectorAll('input');
            const selects = document.querySelectorAll('select');
            const textareas = document.querySelectorAll('textarea');
            const imgs = document.querySelectorAll('img');
            const labels = document.querySelectorAll('form label');

            labels.forEach((label) => {

                if (label.classList.contains("form-label")) {
                    return;
                } else {
                    label.classList.add("form-label");
                }
            });

            inputs.forEach((input) => {

                if (input.classList.contains("form-control", "card-rounded")) {
                    return;
                } else {
                    const attrCheck = input.getAttribute('type');

                    if (attrCheck == 'checkbox' || attrCheck == 'radio') {
                        return;
                    }
                    input.classList.add("form-control", "card-rounded");
                }
            });

            selects.forEach((select) => {
                if (select.classList.contains("form-select", "card-rounded")) {
                    return;
                } else {
                    select.classList.add("form-select", "card-rounded");
                }
            });

            textareas.forEach((textarea) => {
                if (textarea.classList.contains("form-control", "card-rounded")) {
                    return;
                } else {
                    textarea.classList.add("form-control", "card-rounded");
                }
            });

            imgs.forEach((img) => {

                if (img.classList.contains("img-card-rounded")) {
                    return;
                } else {
                    img.classList.add("img-card-rounded");
                }
            });

        } catch (e) {
            console.log("injectBsFormClasses(): " + e);
        }
    }
    // injectBsFormClasses();

    /**
     * =====================================
     * Toggle Password for multiple fields
     * =====================================
     */
    function togglePasswords() {

        try {

            const chBox = document.querySelector("#showPassword");

            chBox.addEventListener("click", togglePass);

            function togglePass() {

                const pwd = document.querySelectorAll(".password-field");

                pwd.forEach(function (field) {
                    if (field.type === "password") {
                        field.type = "text";
                    } else {
                        field.type = "password";
                    }
                });
            }

        } catch (e) {
            console.log("togglePasswords(): " + e);
        }
    }
    // togglePasswords();

    /**
     * =============================
     * SCROLL TO CONTENT
     * =============================
     */
    function scrollToContent() {
        document.getElementById('scrolltocontent').scrollIntoView({
            behavior: 'smooth'
        });
    }

    /**
     * =======================
     * NAV TABS
     * =======================
     */
    function initNavTabs() {

        try {

            document.querySelectorAll('.ltv-tabs').forEach(tabsContainer => {

                const tabButtons = tabsContainer.querySelectorAll('.tab-button');
                const tabContents = tabsContainer.querySelectorAll('.tab');
            
                tabButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const tabData = button.getAttribute('data-tab');
                        
                        // Remove active class from all tab buttons
                        tabButtons.forEach(btn => btn.classList.remove('active'));
                        
                        // Add active class to clicked button
                        button.classList.add('active');
                        
                        // Hide all tab content
                        tabContents.forEach(tab => tab.classList.remove('active'));
                        
                        // Show the selected tab content
                        tabsContainer.querySelector(`.tab[data-tab-content="${tabData}"]`).classList.add('active');
                    });
                });
            
                // Trigger the first tab to be active on page load
                tabButtons[0].click();
            });            
            
        } catch (e) {
            console.log("initNavTabs(): " + e );
        }

    }
    initNavTabs();

});