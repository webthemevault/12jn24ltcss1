(function ($) {
    "use strict";

    $('.ltv-owl-carousel-default').each(function(index, element) {
        var $element = $(element);
        
        // Override options using data attributes
        var items = $element.data('items') || 5;
        var loop = $element.data('loop') !== undefined ? $element.data('loop') : true;
        var margin = $element.data('margin') || 15;
        var center = $element.data('center') || false;
        var dots = $element.data('dots') || false;
        var nav = $element.data('nav') !== undefined ? $element.data('nav') : true;
        var navText = $element.data('nav-text') || ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'];
    
        $element.owlCarousel({
            items: items,
            loop: loop,
            margin: margin,
            center: center,
            dots: dots,
            nav: nav,
            navText: navText,
            responsiveClass: true,
            responsive: {
                0: {
                    items: $element.data('responsive-0-items') || 2,
                    nav: $element.data('responsive-0-nav') !== undefined ? $element.data('responsive-0-nav') : nav,
                    loop: $element.data('responsive-0-loop') !== undefined ? $element.data('responsive-0-loop') : loop
                },
                600: {
                    items: $element.data('responsive-600-items') || 3,
                    nav: $element.data('responsive-600-nav') !== undefined ? $element.data('responsive-600-nav') : nav,
                    loop: $element.data('responsive-600-loop') !== undefined ? $element.data('responsive-600-loop') : loop
                },
                1000: {
                    items: $element.data('responsive-1000-items') || 5,
                    nav: $element.data('responsive-1000-nav') !== undefined ? $element.data('responsive-1000-nav') : nav,
                    loop: $element.data('responsive-1000-loop') !== undefined ? $element.data('responsive-1000-loop') : loop
                }
            }
        });
    });
    

    $('.ltv-whyus-owl-carousels').owlCarousel({
        items: 3,
        loop:true,
        margin:20,
        center: false,
        dots: false,
        nav:false,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        responsiveClass: true,
            responsive:{
                0:{
                    items:1,
                    loop:true,
                },
                600:{
                    items:2,
                    loop:true,
                },
                1000:{
                    items:3,
                    loop:true,
                }
            }
    });

})(jQuery);

(function($) {

    $.SmartMenus.prototype.old_init = $.SmartMenus.prototype.init;
    $.SmartMenus.prototype.init = function(refresh) {
      if (!refresh && !this.$root.hasClass('sm-vertical')) {
        var $originalItems = this.$root.children('li'),
          $moreSub = this.$root.clone().removeAttr('id').removeAttr('class').addClass('dropdown-menu'),
          $moreSubItems = $moreSub.children('li'),
          $moreItem = $('<li role="listitem"><a href="#">View More</a></li>').append($moreSub).appendTo(this.$root),
          self = this,
          vieportW,
          hiddenItems = [],
          hiddenMoreItems = [];
      }
  
      this.old_init(refresh);
  
      if (!refresh && !this.$root.hasClass('sm-vertical')) {
        function handleResize(force) {
          var curWidth = $(window).width();
          if (vieportW !== curWidth || force) {
            // hide More item
            $moreItem.detach();
  
            // show all main menu items
            $.each(hiddenItems, function() {
              $(this).appendTo(self.$root);
            });
            hiddenItems = [];
  
            // show all More sub items
            $.each(hiddenMoreItems, function() {
              $(this).prependTo($moreSub);
            });
            hiddenMoreItems = [];
  
            // if in desktop view and the last item is wrapped
            if (!self.$root.hasClass('sm-vertical') && (/^(left|right)$/.test(self.$firstLink.parent().css('float')) || self.$firstLink.parent().css('display') == 'table-cell') && $originalItems.eq(-1)[0].offsetTop != $originalItems.eq(0)[0].offsetTop) {
              // show More item
              $moreItem.appendTo(self.$root);
  
              // while the More item is wrapped
              while ($moreItem[0].offsetTop != $originalItems.eq(0)[0].offsetTop) {
                hiddenItems.unshift($moreItem.prev('li').detach());
              };
  
              // hide proper More sub items
              $moreSubItems.slice(0, $moreSubItems.length - hiddenItems.length).each(function() {
                hiddenMoreItems.unshift($(this).detach());
              });
            }
  
            // save new viewport width
            vieportW = curWidth;
          }
        }
        handleResize();
  
        $(window).bind({
          'load.smartmenus': function() {
            handleResize(true);
          },
          'resize.smartmenus': handleResize
        });
      }
    };
  
    // Fix isCollapsible method
    $.SmartMenus.prototype.isCollapsible = function() {
      return this.$root.find('ul').eq(0).css('position') == 'static';
    };

    // Init Nav Menu
    $(document).ready(function () {
        $('.initialize-menu').each(function (index, element) {
            $(element).smartmenus();
        });
    });

    // $(document).ready(function () {
    //     $('#ltv-sidebar-menu').each(function (index, element) {
    //         $(element).smartmenus();
    //     });
    // });
  
  })(jQuery);
  
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