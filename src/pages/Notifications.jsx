import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNav from './sidenav';

function Notifications() {
    return(
        <section className='flex h-screen overflow-y-hidden'>
            <SideNav />

            <div className='ml-1 pt-20 md:ml-60 md:pl-1 Context'>
                <h1>Notifications Page under Construction</h1>
            </div>
        </section>        
    )
}

export default Notifications;