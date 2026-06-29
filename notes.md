_This is where I like to do my rough brainstorming_

key features:

1. Cart: collects all product the customer wishes to purchase. The pre-filled whatsapp message, will contain all id for all the products in the cart.
2. menu-btn: only displays on mobile. Diaplays the links to other pages onclick and closes on outside click.
3. An admin dashboard that stores the information in a backend. One page fetches all products from supabase, while the single product page reads the id from the url and fetches just that product, filling in the blanks in the page.
4. Authentication
5. product search and filtering
6. Responsive design (works on mobile and desktop)
7. payment integration

.
.
.

research later:

1. form-validation
2. error-handling
3. loading states
4. 404 page

.
.
.

What to learn:

1. backend (supabase)
2. responsive design
3. authentication
4. product search & filtering
5. payment integration
6. git and github

<i class="fa-classic fa-bars" id="hamburger"></i>
function() {
const themeSelect = document.getElementById('theme');
const body = document.body;

    // Apply saved theme from localStorage if available
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme + '-theme');
        themeSelect.value = savedTheme;
    } else {
        // Default to light theme
        body.classList.add('light-theme');
    }

    // Listen for theme changes
    themeSelect.addEventListener('change', function() {
        const selectedTheme = themeSelect.value;

        // Remove both themes before applying new one
        body.classList.remove('light-theme', 'dark-theme');
        body.classList.add(selectedTheme + '-theme');

        // Save preference
        localStorage.setItem('theme', selectedTheme);
    });

})();
</script>

</body>
</html>
How It Works
HTML:

A <select> dropdown lets the user choose between Light and Dark.
CSS:

Two theme classes: .light-theme and .dark-theme.
Smooth transitions for background and text colors.
JavaScript:

On page load, it checks localStorage for a saved theme.
Applies the saved theme or defaults to Light.
Updates the theme and saves the choice whenever the user changes it.
✅ Features:

Works without any external libraries.
Remembers user preference across sessions.
Easily extendable for more themes (just add more CSS classes and <option> values).
// No saved theme → use system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
savedTheme = prefersDark ? 'dark' : 'light';
