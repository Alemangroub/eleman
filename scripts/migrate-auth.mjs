/**
 * Script to batch-replace Firebase Auth imports and calls
 * across all .astro pages with our custom API-based auth.
 */
import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('src');

// Find all .astro files recursively
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

    // 1. Replace Firebase auth imports with our custom auth
    // Handle various import path depths
    content = content.replace(
        /import\s*\{[^}]*\}\s*from\s*['"][^'"]*firebase\/client['"]\s*;?\s*\n/g,
        ''
    );
    content = content.replace(
        /import\s*\{[^}]*\}\s*from\s*['"]firebase\/auth['"]\s*;?\s*\n/g,
        ''
    );
    content = content.replace(
        /import\s*\{[^}]*\}\s*from\s*['"]firebase\/firestore['"]\s*;?\s*\n/g,
        ''
    );
    content = content.replace(
        /import\s*\{[^}]*\}\s*from\s*['"]firebase\/app['"]\s*;?\s*\n/g,
        ''
    );
    content = content.replace(
        /import\s*\{[^}]*\}\s*from\s*['"]firebase\/storage['"]\s*;?\s*\n/g,
        ''
    );
    content = content.replace(
        /import\s*\{[^}]*\}\s*from\s*['"][^'"]*firebase\/admin['"]\s*;?\s*\n/g,
        ''
    );
    content = content.replace(
        /import\s*\{[^}]*\}\s*from\s*['"]firebase-admin\/firestore['"]\s*;?\s*\n/g,
        ''
    );

    // 2. Check if we need to add checkAuth import (only if file had firebase and doesn't already have it)
    if (content !== original && !content.includes("from '../../lib/auth.js'") && !content.includes("from '../lib/auth.js'") && !content.includes("from '../../../lib/auth.js'") && !content.includes("from '../../../../lib/auth.js'")) {
        // Determine relative path from file to src/lib/auth.js
        const fileDir = path.dirname(filePath);
        const authPath = path.join(srcDir, 'lib', 'auth.js');
        let relPath = path.relative(fileDir, authPath).replace(/\\/g, '/');
        if (!relPath.startsWith('.')) relPath = './' + relPath;

        // Add the import after opening <script> tag
        content = content.replace(
            /(<script[^>]*>)/,
            `$1\n  import { checkAuth, logout } from '${relPath}';`
        );
    }

    // 3. Replace onAuthStateChanged pattern
    // Simple pattern: replace signOut(auth) call
    content = content.replace(/await\s+signOut\s*\(\s*auth\s*\)/g, 'await logout()');
    content = content.replace(/signOut\s*\(\s*auth\s*\)/g, 'logout()');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        totalChanged++;
        console.log(`✅ Updated: ${path.relative('.', filePath)}`);
    }
}

console.log(`\nDone! Updated ${totalChanged} files.`);
