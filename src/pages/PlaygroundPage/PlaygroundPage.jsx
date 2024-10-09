import React, { useEffect } from 'react';
import './PlaygroundPage.scss';
import { Link } from 'react-router-dom';
import SmoothScroll from '../../wrappers/SmoothScroll';
import TextSplitter from '../../wrappers/TextSplitter';
import TimeLine from '../../components/TimeLine/TimeLine';

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
            <SmoothScroll>
                <Link className="playground-link" to="/">H</Link>
                <div className="playground-container" data-scroll-container>




                    {/* ▂▃▅▇█▓▒░    TEMP CODE BELOW HERE    ░▒▓█▇▅▃▂ */}


                    <TimeLine></TimeLine>













































                </div>
                {/* END OF TEMP AREA  ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦ */}
            </SmoothScroll>
        </>

    );






};

export default PlaygroundPage;
