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
            const header = document.querySelector(".tx-main-header");

            // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
            function stickyFunction() {

                if (window.scrollY > 100) {

                    header.classList.add("tx-fixed-top");

                } else {

                    header.classList.remove("tx-fixed-top");

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
            const collapseBtns = document.querySelectorAll(".edt-toggle-fullsearch");

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
    // Index 1
    function navbarCollapse() {

        try {
            // Will hold previously focused element
            var focusedElementBefore;

            // Find the menu and its overlay
            const navbarMenu = document.querySelector("#sidebarMenu");
            const overlay = document.querySelector(".body-overlay");
            const closeBtn = document.querySelector("#tx-close-menu-btn");

            // Menu Toggle
            const collapseBtns = document.querySelectorAll(".tx-sidebar-toggle");

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

    // Index 2
    function collapseSidebar() {
        try {
            // Will hold previously focused element
            var focusedElementBefore;

            // Find the menu and its overlay
            const navbarMenu = document.querySelector("#tx-sidebar");
            const mainContent = document.querySelector("#tx-main");
            const topHeader = document.querySelector("#tx-top-header");
            const footer = document.querySelector("#tx-footer");

            // Menu Toggle
            const collapseBtns = document.querySelectorAll(".tx-sidebar-toggle");

            collapseBtns.forEach((collapseBtn) => {
                collapseBtn.addEventListener('click', openSidebar);
            });

            function openSidebar() {

                collapseBtns.forEach((collapseBtn) => {
                    collapseBtn.classList.toggle('open');
                });

                // Show Menu and Overlay
                navbarMenu.classList.toggle("open");
                mainContent.classList.toggle("open");
                topHeader.classList.toggle("open");
                footer.classList.toggle("open");

            }

        } catch (e) {
            console.log("collapseSidebar(): " + e);
        }
    }
    // collapseSidebar();

    /**
     * ====================
     * ADD ARIA DETAILS
     * ====================
     */
    function addDataARIA() {
        try {
            var allTables = document.querySelectorAll('table');
            for (var i = 0; i < allTables.length; i++) {
                allTables[i].setAttribute('role', 'table');
            }
            var allCaptions = document.querySelectorAll('caption');
            for (var i = 0; i < allCaptions.length; i++) {
                allCaptions[i].setAttribute('role', 'caption');
            }
            var allRowGroups = document.querySelectorAll('thead, tbody, tfoot');
            for (var i = 0; i < allRowGroups.length; i++) {
                allRowGroups[i].setAttribute('role', 'rowgroup');
            }
            var allRows = document.querySelectorAll('tr');
            for (var i = 0; i < allRows.length; i++) {
                allRows[i].setAttribute('role', 'row');
            }
            var allCells = document.querySelectorAll('td');
            for (var i = 0; i < allCells.length; i++) {
                allCells[i].setAttribute('role', 'cell');
            }
            var allHeaders = document.querySelectorAll('th');
            for (var i = 0; i < allHeaders.length; i++) {
                allHeaders[i].setAttribute('role', 'columnheader');
            }
            // this accounts for scoped row headers
            var allRowHeaders = document.querySelectorAll('th[scope=row]');
            for (var i = 0; i < allRowHeaders.length; i++) {
                allRowHeaders[i].setAttribute('role', 'rowheader');
            }

            // List Aria
            var allLists = document.querySelectorAll("ol, ul");
            for (var i = 0; i < allLists.length; i++) {
                allLists[i].setAttribute("role", "list");
            }
            var allListItems = document.querySelectorAll("li");
            for (var i = 0; i < allListItems.length; i++) {
                allListItems[i].setAttribute("role", "listitem");
            }
            var allDefLists = document.querySelectorAll("dl");
            for (var i = 0; i < allDefLists.length; i++) {
                allDefLists[i].setAttribute("role", "associationlist list");
            }
            var allDefTerms = document.querySelectorAll("dt");
            for (var i = 0; i < allDefTerms.length; i++) {
                allDefTerms[i].setAttribute("role", "associationlistitemkey listitem");
            }
            var allDefItems = document.querySelectorAll("dd");
            for (var i = 0; i < allDefItems.length; i++) {
                allDefItems[i].setAttribute("role", "associationlistitemvalue listitem");
            }

        } catch (e) {
            console.log("addDataARIA(): " + e);
        }
    }
    addDataARIA();

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
    injectBsFormClasses();

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

});