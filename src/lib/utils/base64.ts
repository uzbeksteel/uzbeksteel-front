export function toBase64(obj: any) {
    const jsonString = JSON.stringify(obj);

    const utf8Array = new TextEncoder().encode(jsonString);

    return btoa(String.fromCharCode(...utf8Array));
}

export function fromBase64(base64: string | undefined) {
    if (!base64) return null;

    const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;
    if (!base64Regex.test(base64)) {
        console.error('Invalid Base64 string');
        return null;
    }

    try {
        const binaryString = atob(base64);

        const byteArray = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
        }

        const jsonString = new TextDecoder().decode(byteArray);
        return JSON.parse(jsonString);
    } catch (e) {
        console.error('Error decoding Base64 string:', e);
        return null;
    }
}
