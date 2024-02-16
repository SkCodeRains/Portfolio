// build.js

const { execSync } = require('child_process');

try {
    console.log('Copying files...');
    execSync('copy -r docs/browser/* docs/');
    execSync('copy -r docs/browser/* docs/');
    console.log('Copy operation completed.');
    // Delete the browser folder
    console.log('Deleting browser folder...');
    execSync('rmdir /s /q docs/browser');
    console.log('Deletion of browser folder completed.');
} catch (error) {
    console.error('Error during copy operation:', error.message);
    process.exit(1);
}
