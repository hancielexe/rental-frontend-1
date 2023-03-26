import React from 'react';
import Register from './Register';
import Sidebar from './Sidebar';

function Admin() {
    return ( 
        <div class="flex">
            <Sidebar />
            <Register />
        </div>
    );
}

export default Admin;