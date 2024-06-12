window.addEventListener('DOMContentLoaded', (event) => {
    /**
     * =============
     * TOOLTIP
     * =============
     */
    function addToolTipAttribute() {
        try {

            // Function to add tooltips to menu items
            function addTooltip(element, title, placement) {
                element.setAttribute('data-bs-toggle', 'tooltip');
                element.setAttribute('data-bs-placement', placement);
                element.setAttribute('title', title);
            }

            // Select all menu items
            var menuItems = document.querySelectorAll('ul[data-tooltip="true"] a');

            // Loop through each menu item and add tooltip
            menuItems.forEach(function(item) {
                var title = item.querySelector('.tt-menu-title').textContent;
                addTooltip(item, title, 'right');
            });

            // Initialize Bootstrap tooltips
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });

        } catch (e) {
            console.log("addToolTipAttribute(): " + e);
        }
    }
    addToolTipAttribute();

});