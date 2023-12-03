import { useDispatch } from 'react-redux';

import { authActions } from '../store/auth';
import { notifyActions } from '../store/notify';

import { getCookie } from '../utils/handleCookies';

function useFetch() {
    const dispatch = useDispatch();

    function sendRequest(config, applyData = () => {}, auth = true) {
        dispatch(notifyActions.applyLoading());
        dispatch(notifyActions.clearError());

        fetch(config.url, {
            method: config.method ? config.method : 'GET',
            headers: {
                'Content-type': 'application/json',

                // if need auth use token in cookies
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
                    dispatch(authActions.logOut());
                    applyData();
                    return;
                }

                const data = await response.json();
                applyData(data);
            })
            .catch(error => {
                console.log(error);
                dispatch(
                    notifyActions.applyError(
                        error.message || 'Something went wrong'
                    )
                );
            })
            .finally(() => {
                dispatch(notifyActions.clearLoading());
            });
    }
    return sendRequest;
}

export default useFetch;
