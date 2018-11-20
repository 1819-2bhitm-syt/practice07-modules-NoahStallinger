let encrypt = function(secret, plaintext) {

    const crypto = require('crypto');
    const cipher = crypto.createCipher('aes192', secret);

    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted);

    return encrypted;
};

module.exports = encrypt;