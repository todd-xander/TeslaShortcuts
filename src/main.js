   // ... existing code ...

   // Function to read the shortcuts.json file
   function readShortcutsFile() {
       const fs = require('fs');
       const data = fs.readFileSync('shortcuts.json', 'utf8');
       return JSON.parse(data);
   }

   // Call the function when the application is launched
   const shortcuts = readShortcutsFile();

   // ... existing code ...