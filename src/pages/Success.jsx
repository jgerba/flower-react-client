import { useEffect } from 'react';

function Success(params) {
    // reset scroll position
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <></>;
}

export default Success;
