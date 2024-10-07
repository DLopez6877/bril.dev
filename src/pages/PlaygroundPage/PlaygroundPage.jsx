import React, { useEffect } from 'react';
import './PlaygroundPage.scss';
import { Link } from 'react-router-dom';
import MouseTrail from '../../wrappers/RoundMouse/RoundMouse';
import SmoothScroll from '../../wrappers/SmoothScroll';

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
                    <div className="container cursor-pointer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                        <div className="text">fsagasgsag</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                        <MouseTrail>
                            <div style={{ position: 'relative', padding: '50px', backgroundColor: '#f0f0f0' }}>
                                <h1 className="text-content">Hover over this text to see the custom cursor</h1>
                                <p className="text-content">This text will change when the custom circle cursor passes over it.</p>
                            </div>
                        </MouseTrail>
                    </div>
                    <div className="container">
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
