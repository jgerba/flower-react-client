function getCookie() {
    const cookieData = document.cookie.split('; ');

    for (let cookie of cookieData) {
        if (!cookie.includes('=') || !cookie.includes('token')) continue;

        const divider = cookie.indexOf('=');
        const cookieValue = cookie.substring(divider + 1);

        return cookieValue;
    }
}

export { getCookie };
