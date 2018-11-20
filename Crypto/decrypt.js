let decrypt = function(ciphertext, secret) {

    const crypto = require('crypto');
    const decipher = crypto.createDecipher('aes192', secret);

    const encrypted = ciphertext;
    let decrypted;

    try {
        decrypted = decipher.update(encrypted, 'hex', 'utf8');
    } catch (err) {
        console.log("Ungültiger Hashcode wurde übergeben!");
    }

    try {
        decrypted += decipher.final('utf8');
        console.log(decrypted);
    } catch (err) {
        console.log("Authentifizierung fehlgeschlagen!");
    }
};

module.exports = decrypt;