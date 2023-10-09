import { useEffect, useState } from 'react';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState([0, 0]);

    useEffect(() => {
        function updateSize() {
            setWindowSize([
                window.scrollY,
                window.innerWidth,
                window.innerHeight,
            ]);
        }
        window.addEventListener('resize', updateSize);
        window.addEventListener('scroll', updateSize);
        updateSize();

        return () => {
            window.removeEventListener('resize', updateSize);
            window.addEventListener('scroll', updateSize);
        };
    }, []);
    return windowSize;
}

export default useWindowSize;
