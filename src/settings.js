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

   // Function to update the shortcuts.json file
   function saveSettings() {
       const fs = require('fs');
       fs.writeFileSync('shortcuts.json', JSON.stringify(shortcuts));
   }

   // Add an event listener to the 'Save' button
   const saveButton = document.getElementById('save');
   saveButton.addEventListener('click', saveSettings);