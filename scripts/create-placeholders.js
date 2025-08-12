import fs from 'fs';
import path from 'path';


const imageDir = path.join(__dirname, '..', 'public', 'image');

// Ensure directory exists
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

const people = [
  { name: 'MartyTenenbaum', title: 'Founder & CEO' },
  { name: 'RobertPham', title: 'Asia Development Director' },
  { name: 'Person3', title: 'Chief Medical Officer' },
  { name: 'Person4', title: 'Head of Engineering' },
  { name: 'Person5', title: 'VP of Research' }
];

people.forEach(person => {
  const filePath = path.join(imageDir, `${person.name}.png`);
  if (!fs.existsSync(filePath)) {
    // Create a placeholder file (you would replace this with actual image generation)
    fs.writeFileSync(filePath, '// Placeholder for ' + person.name);
    console.log(`Created placeholder for ${person.name}`);
  }
});
