import { useState } from 'react';
import { Icon } from '@/components';

export const FullscreenButton = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleFullscreenToggle = () => {
        if (!isFullscreen) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }

        setIsFullscreen(!isFullscreen);
    };

    return isFullscreen ? <Icon onClick={handleFullscreenToggle} name="Minimize" color="#D5680A" /> : <Icon onClick={handleFullscreenToggle} name="Expand" color="#D5680A" />;
};
