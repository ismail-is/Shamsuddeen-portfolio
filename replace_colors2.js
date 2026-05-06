const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/components/Footer.tsx',
  'src/components/Navbar.tsx',
  'src/components/CustomCursor.tsx',
  'src/app/layout.tsx',
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
    content = content.replace(/red-/g, 'purple-');
    content = content.replace(/orange-/g, 'indigo-');
    
    // Replace specific background hex codes to violet variants
    content = content.replace(/#110505/g, '#110720');
    content = content.replace(/#0a0202/g, '#0a0414');
    content = content.replace(/#110202/g, '#110720');
    content = content.replace(/#1a0505/g, '#1a0b36');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
