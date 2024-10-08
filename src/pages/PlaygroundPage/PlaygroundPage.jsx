import React, { useEffect } from 'react';
import './PlaygroundPage.scss';
import { Link } from 'react-router-dom';
import SmoothScroll from '../../wrappers/SmoothScroll';
import TextAnimation from '../../wrappers/TextAnimation';

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


                    <div className="temop" id="temp">
                        <TextAnimation text='WORK HISTORY' className='yo bebas'></TextAnimation>
                        <p>Work History</p>
                    </div>

                    <div className="lorem container">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                    </div>














































                </div>
                {/* END OF TEMP AREA  ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦ */}
            </SmoothScroll>
        </>

    );






};

export default PlaygroundPage;
