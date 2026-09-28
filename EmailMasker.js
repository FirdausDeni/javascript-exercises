function maskEmail(email) {
    const atIndex = email.indexOf('@');

    // Pastikan format email memiliki @
    if (atIndex <= 0) {
        return email;
    }

    const localPart = email.substring(0, atIndex);
    const domain = email.substring(atIndex + 1);

    // 1 karakter
    if (localPart.length === 1) {
        return localPart + '@' + domain;
    }

    // 2 karakter
    if (localPart.length === 2) {
        return localPart.charAt(0) + '*@' + domain;
    }

    // 3 karakter atau lebih
    return (
        localPart.charAt(0) +
        '*'.repeat(localPart.length - 2) +
        localPart.slice(-1) +
        '@' +
        domain
    );
}

console.log(maskEmail('apple.pie@example.com'));