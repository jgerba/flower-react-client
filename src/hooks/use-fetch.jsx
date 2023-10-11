import { useState } from 'react';

// import { useDispatch } from 'react-redux';
// import { authActions } from '../store/auth';

import { getCookie } from '../utils/handleCookies';

function useFetch() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // const dispatch = useDispatch();

    function sendRequest(config, applyData, auth = true) {
        setIsLoading(true);
        setError(null);

        fetch(config.url, {
            method: config.method ? config.method : 'GET',
            headers: {
                'Content-type': 'application/json',
                Authorization: auth ? 'Bearer ' + getCookie() : '',
            },
            body: config.body ? JSON.stringify(config.body) : null,
        })
            .then(async response => {
                if (!response.ok) {
                    const message = await response.text();
                    throw new Error(message);
                }

                if (config.url === `/logout`) {
                    document.cookie =
                        'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                    // dispatch(authActions.logOut());
                    applyData();
                    return;
                }

                // if (
                //     (config.url === '/notes/archive/' &&
                //         config.method === 'DELETE') ||
                //     config.url === '/notes/order' ||
                //     response.status === 204
                // ) {
                //     applyData();
                //     return;
                // }

                const data = await response.json();
                applyData(data);
            })
            .catch(error => setError(error.message || 'Something went wrong'))
            .finally(() => {
                setIsLoading(false);
            });
    }
    return { sendRequest, isLoading, error };
}

export default useFetch;
