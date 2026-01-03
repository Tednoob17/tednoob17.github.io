// Language selector functionality
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('lang-toggle');
    const langDropdown = document.querySelector('.lang-dropdown');
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!langDropdown.contains(e.target)) {
            langDropdown.classList.remove('open');
        }
    });
    
    // Handle language option clicks (optional enhancement)
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            // Allow natural navigation to the language's URL
            // (no preventDefault needed - let the link work naturally)
        });
    });
});
