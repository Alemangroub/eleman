// Debug script to test bcrypt hash generation
const bcrypt = require('bcryptjs');

async function generateHashes() {
    console.log('Generating bcrypt hashes...');
    
    // Hash for "elemancompanyid111"
    const adminPassword = 'elemancompanyid111';
    const adminHash = await bcrypt.hash(adminPassword, 10);
    console.log(`Admin password "${adminPassword}": ${adminHash}`);
    
    // Hash for "123456"
    const supervisorPassword = '123456';
    const supervisorHash = await bcrypt.hash(supervisorPassword, 10);
    console.log(`Supervisor password "${supervisorPassword}": ${supervisorHash}`);
    
    // Test verification
    const adminValid = await bcrypt.compare(adminPassword, adminHash);
    const supervisorValid = await bcrypt.compare(supervisorPassword, supervisorHash);
    
    console.log(`Admin verification: ${adminValid}`);
    console.log(`Supervisor verification: ${supervisorValid}`);
}

generateHashes().catch(console.error);
