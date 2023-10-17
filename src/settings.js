   // Function to generate HTML elements for each option
   function generateSettings(shortcuts) {
       const settingsDiv = document.getElementById('settings');
       shortcuts.forEach(shortcut => {
           const div = document.createElement('div');
           div.textContent = shortcut.name;
           settingsDiv.appendChild(div);
       });
   }

   // Call the function with the shortcuts data
   generateSettings(shortcuts);