import { useEffect } from 'react';

function ErrorPage(params) {
    // reset scroll position
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <></>;
}

export default ErrorPage;
