import React from 'react'
import styled from 'styled-components';

const Infos = styled.div`
  color: #18191a;
`;

function Header() {
    return (
        <div className='header'>
            <div className='menu-nav'>
                <div>
                    <Infos>
                        <span className='name'>Ayse</span>
                    </Infos>
                </div>
                <div>Services</div>
                <div>Case Studies</div>
                <div>About Me</div>
                <div>Contact</div>
            </div>
            <div className='div-btn'><button>See My Work</button></div>
        </div>
    )
}

export default Header