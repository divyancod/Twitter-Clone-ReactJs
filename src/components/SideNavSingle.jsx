import React from 'react';

function SideNavSingle({Icon, text}) {
    return (
        <div style={{display:"flex",alignItems:"center",marginBottom:"18px",padding:"10px"}}>
            <Icon size={35} style={{marginRight:"10px"}}/>
            <p style={{margin:"0",fontSize:"18px"}}>{text}</p>
        </div>
    );
}

export default SideNavSingle;