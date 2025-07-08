#!/usr/bin/env node

/**
 * CSS Modules Type Generation Script
 * 
 * This script generates TypeScript type definitions for CSS Modules
 * to provide better IntelliSense and type safety.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SRC_DIR = path.join(__dirname, '../src');
const CSS_MODULE_PATTERN = /\.module\.css$/;

/**
 * Find all CSS Module files in the src directory
 */
function findCSSModuleFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (CSS_MODULE_PATTERN.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

/**
 * Generate type definition for a CSS Module file
 */
function generateTypeDefinition(cssFilePath) {
  const content = fs.readFileSync(cssFilePath, 'utf8');
  const classNames = [];
  
  // Extract class names from CSS
  const classRegex = /\.([a-zA-Z][a-zA-Z0-9_-]*)/g;
  let match;
  
  while ((match = classRegex.exec(content)) !== null) {
    const className = match[1];
    if (!classNames.includes(className)) {
      classNames.push(className);
    }
  }
  
  // Generate TypeScript interface
  const interfaceName = path.basename(cssFilePath, '.module.css')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Styles';
  
  const typeDefinition = `// Auto-generated CSS Module type definitions
export interface ${interfaceName} {
${classNames.map(name => `  readonly ${name}: string;`).join('\n')}
}

declare const styles: ${interfaceName};
export default styles;
`;

  // Write type definition file
  const typeFilePath = cssFilePath.replace('.module.css', '.module.css.d.ts');
  fs.writeFileSync(typeFilePath, typeDefinition);
  
  console.log(`Generated types for: ${path.relative(SRC_DIR, cssFilePath)}`);
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Finding CSS Module files...');
  
  const cssModuleFiles = findCSSModuleFiles(SRC_DIR);
  
  if (cssModuleFiles.length === 0) {
    console.log('No CSS Module files found.');
    return;
  }
  
  console.log(`📝 Generating type definitions for ${cssModuleFiles.length} files...`);
  
  cssModuleFiles.forEach(generateTypeDefinition);
  
  console.log('✅ Type generation complete!');
  console.log('\n💡 To use typed CSS Modules:');
  console.log('   import styles from "./Component.module.css";');
  console.log('   // TypeScript will now provide IntelliSense for class names');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  findCSSModuleFiles,
  generateTypeDefinition,
};
