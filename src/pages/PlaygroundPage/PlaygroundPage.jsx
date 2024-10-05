import React, { useEffect } from 'react';
import './PlaygroundPage.scss';
import { Link } from 'react-router-dom';
import image from '../../assets/coder.png';
import InfiniteScrollText from '../../components/InfiniteScrollText/InfiniteScrollText';


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
            {/* ▂▃▅▇█▓▒░    TEMP CODE BELOW HERE    ░▒▓█▇▅▃▂ */}
            <div className="playground-container" >

                <div className="container">
                    <InfiniteScrollText className="text">fsagasgsag</InfiniteScrollText>
                </div>


                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam quibusdam placeat ex, rerum velit repudiandae. Cum, accusamus mollitia distinctio aperiam consequatur perspiciatis? Modi odit dicta voluptas animi aliquam assumenda.</p>





                {/* <div className="playground-container">
                    <div className="navbar">
                        <div className="glass left-section"></div>
                        <div className="glass menu-button"></div>
                    </div>
                    <img src={image} />
                </div> */}


            </div >
            {/* END OF CODING AREA ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦ */}
        </>

    );






};

export default PlaygroundPage;
