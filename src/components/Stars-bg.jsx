import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import starsBgConfig from "./config/stars-bg-config";

const StarsParticles = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await container;
    }, []);

    return (
        <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            options={starsBgConfig}
        />
    );
};

export default StarsParticles;