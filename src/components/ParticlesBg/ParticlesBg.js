import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBg = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log('Particles loaded:', container);
    };

    const options = useMemo(() => ({
        fullScreen: { enable: false }, // ❌ فول‌اسکرین خاموش
        background: {
            color: "transparent",
        },
        particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            links: { enable: true },
        },
    }), []);

    if (init) {
        return (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            </div>
        );
    }

    return <></>;
};

export default ParticlesBg;