import React, { useEffect } from 'react';
import './PlaygroundPage.scss';
import { Link } from 'react-router-dom';
import PageTransition from '../../wrappers/PageTransition/PageTransition';
import SmoothScroll from '../../wrappers/SmoothScroll';
import ScenePyhamaa from '../../components/Scenes/ScenePyhamaa';
import SceneStaircase from '../../components/Scenes/SceneStaircase';
import SceneTunnel from '../../components/Scenes/SceneTunnel';

const PlaygroundPage = () => {
    useEffect(() => {
        console.log('PlaygroundPage mounted');
        return () => {
            console.log('PlaygroundPage unmounted');
        };
    },
        []);

    return (
        <>
            {/* <PageTransition> */}
            <SmoothScroll>
                <Link className="playground-link" to="/">H</Link>
                <div className="playground-container" data-scroll-container>




                    {/* ▂▃▅▇█▓▒░    TEMP CODE BELOW HERE    ░▒▓█▇▅▃▂ */}
                    <div className="three-container">
                        <ScenePyhamaa />
                        {/* <SceneStaircase /> */}
                    </div>





































                </div>
                {/* END OF TEMP AREA  ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦ */}
            </SmoothScroll>
            {/* </PageTransition> */}
        </>

    );






};

export default PlaygroundPage;
