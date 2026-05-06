const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/components/Footer.tsx',
  'src/components/sections/Hero.tsx',
  'src/components/sections/About.tsx',
  'src/components/sections/Experience.tsx',
  'src/components/sections/Skills.tsx',
  'src/components/sections/Certifications.tsx',
  'src/components/sections/Education.tsx',
  'src/components/sections/Contact.tsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace theme colors
    content = content.replace(/purple/g, 'red');
    content = content.replace(/fuchsia/g, 'orange');
    
    // Replace specific background hex codes to red variants
    content = content.replace(/#0d041c/g, '#0a0202');
    content = content.replace(/#110524/g, '#110202');
    content = content.replace(/#1a0b36/g, '#1a0505');
    content = content.replace(/#180932/g, '#110505');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
