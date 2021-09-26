import React from 'react';
import './CommonGG.css';
import CommonLogo from '../images/logotextlarge 1.png';

function CommonGG() {
    return (
        <>
            <div className='common-logo'>
                <a href='https://common.gg/' target='_blank'>
                    <img src={CommonLogo} alt="common_logo" />
                </a>
            </div>
            <div className='common-gg'>
                Common.gg is a social-media site for the TeamFight Tactics community. I worked alongside 3 other engineers in a team of 10 to develop this site, personally focusing on front-end tasks.
                This site was created using React with Hook and Bootstrap for the front-end complimented with Firebase for the database.
            </div>
        </>
    )
}

export default CommonGG
