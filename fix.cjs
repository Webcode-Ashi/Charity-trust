const fs = require('fs');

const files = [
  'd:/KASANA-CHARITY-TRUST/charity-trust/src/pages/Home.jsx',
  'd:/KASANA-CHARITY-TRUST/charity-trust/src/pages/Contact.jsx',
  'd:/KASANA-CHARITY-TRUST/charity-trust/src/pages/About.jsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Clean up any weird double spaces
    content = content.replace(/text-brand-green\s+font-bold/g, 'text-brand-green font-bold');
    
    // For green borders
    content = content.replace(/border-brand-green\/20"/g, 'border-brand-green/20 inline-block mb-1"');
    content = content.replace(/border-brand-green\/30"/g, 'border-brand-green/30 inline-block mb-1"');
    
    // For gold borders
    content = content.replace(/border-brand-gold\/30"/g, 'border-brand-gold/30 inline-block mb-1"');
    
    // Cleanup overlaps if they already had inline flex/block
    content = content.replace(/inline-block inline-block/g, 'inline-block');
    content = content.replace(/inline-block w-fit self-start inline-block mb-1/g, 'inline-block w-fit self-start mb-1');
    content = content.replace(/inline-block inline-block mb-1/g, 'inline-block mb-1');
    content = content.replace(/inline-flex items-center gap-1\.5 inline-block mb-1/g, 'inline-flex items-center gap-1.5 mb-1');
    content = content.replace(/inline-block w-fit mb-2 inline-block mb-1/g, 'inline-block w-fit mb-2');

    fs.writeFileSync(file, content, 'utf8');
  }
});
console.log('Fixed tags');
