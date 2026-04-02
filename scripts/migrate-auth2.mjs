/**
 * Script to replace onAuthStateChanged patterns with checkAuth() calls.
 * Handles the common patterns used across all pages.
 */
import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('src');

function findFiles(dir, ext, files = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) findFiles(fullPath, ext, files);
        else if (entry.name.endsWith(ext)) files.push(fullPath);
    }
    return files;
}

const astroFiles = findFiles(path.join(srcDir, 'pages'), '.astro');
let totalChanged = 0;

for (const filePath of astroFiles) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const original = content;

    // Pattern 1: Replace onAuthStateChanged(auth, async (user) => { with async IIFE + checkAuth
    // The key insight: onAuthStateChanged wraps everything in a callback.
    // We replace it with a simple async call at the top level.
    
    // Simple replacement: just replace the function call signature
    content = content.replace(
        /onAuthStateChanged\s*\(\s*auth\s*,\s*async\s*\(\s*user\s*\)\s*=>\s*\{/g,
        '(async () => {\n    const user = await checkAuth();'
    );

    // Close the onAuthStateChanged - replace the extra closing ");  " at the end
    // This is trickier - we need to find the matching close
    // For safety, just replace common endings
    content = content.replace(/\n\s*\}\s*\)\s*;\s*\n(\s*\}\s*\)\s*;)/g, '\n  })();\n');
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        totalChanged++;
        console.log(`✅ Updated: ${path.relative('.', filePath)}`);
    }
}

console.log(`\nDone! Updated ${totalChanged} files.`);
