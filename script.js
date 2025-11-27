
        // --- Certificate Image Viewer ---
        function viewCertificate(url) {
            // Simple function to open the certificate URL in a new tab
            if (url) {
                window.open(url, '_blank');
            } else {
                // Fallback if no URL is present
                const fallbackUrl = 'https://placehold.co/800x600/9CA3AF/FFFFFF?text=No+Certificate+Image+Available';
                window.open(fallbackUrl, '_blank');
            }
        }

        // --- Dark Mode Toggle Logic ---
        const themeToggle = document.getElementById('theme-toggle');
        const themeToggleMobile = document.getElementById('theme-toggle-mobile');
        const toggleIcon = document.getElementById('toggle-icon');
        const toggleIconMobile = document.getElementById('toggle-icon-mobile');
        const body = document.body;

        const MOON_ICON_SVG = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>';
        const SUN_ICON_SVG = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>'; // Used if theme is managed externally, but we stick to the moon for simplicity

        // Function to set the icon based on the current theme
        function setIcon(iconElement) {
            if (!iconElement) return;

            if (body.classList.contains('dark-mode')) {
                // In dark mode, show the moon icon (indicates user can switch to light mode)
                iconElement.innerHTML = MOON_ICON_SVG;
            } else {
                 // In light mode, show the sun icon (indicates user can switch to dark mode)
                iconElement.innerHTML = SUN_ICON_SVG;
            }
        }

        // Function to toggle dark mode
        function toggleDarkMode() {
            body.classList.toggle('dark-mode');
            
            // Update icons immediately
            setIcon(toggleIcon);
            setIcon(toggleIconMobile);

            // Change background colors based on mode
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('bg-white', 'text-gray-900');
                body.classList.add('bg-gray-900', 'text-gray-100');
            } else {
                body.classList.remove('bg-gray-900', 'text-gray-100');
                body.classList.add('bg-white', 'text-gray-900');
            }
        }

        // Initialize icons on load
        setIcon(toggleIcon);
        setIcon(toggleIconMobile);

        // Add event listeners
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleDarkMode);
        }
        if (themeToggleMobile) {
            themeToggleMobile.addEventListener('click', toggleDarkMode);
        }

        // --- Mobile Menu Toggle Logic ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Hide mobile menu after clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // --- Form Submission Logic (Simulated) ---
        function showMessage() {
            const formMessage = document.getElementById('form-message');
            formMessage.classList.remove('hidden');
            // Hide the message after 5 seconds
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
            
            // Optional: clear the form fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }
    