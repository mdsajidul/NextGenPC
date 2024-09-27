document.addEventListener('DOMContentLoaded', () => {
    const themeDropdown = document.getElementById('theme-dropdown');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    // Log to confirm the elements are correctly selected
    console.log('Theme Dropdown:', themeDropdown);
    console.log('Theme Stylesheet:', themeStylesheet);

    // Check if elements are correctly accessed
    if (!themeDropdown || !themeStylesheet) {
        console.error('Theme Dropdown or Theme Stylesheet element not found.');
        return;
    }

    themeDropdown.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        console.log('Selected Value:', selectedValue);

        switch (selectedValue) {
            case 'default':
                themeStylesheet.href = 'index-default.css';
                break;
            case 'hacker1':
                themeStylesheet.href = 'index-theme1.css'; // Apply Hacker 1 theme
                break;
            // Add more cases for other themes if needed
            default:
                themeStylesheet.href = 'index-default.css';
                break;
        }
    });

    // Optional: Set the initial theme based on the current value of the dropdown
    const initialTheme = themeDropdown.value || 'default';
    themeStylesheet.href = initialTheme === 'hacker1' ? 'index-theme1.css' : 'index-default.css';
});
