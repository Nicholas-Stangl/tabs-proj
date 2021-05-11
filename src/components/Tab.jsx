import React, { useState } from 'react';


const Tab = (props) => {

    const[selectedTab, setSelectedTab] = useState(props.items[0]);

    return (
        <div className="container">
            <header className="row">
                {
                    props.items.map((item, i) => {
                        let conditionalClasses = "";
                        if (item === selectedTab) {
                            conditionalClasses += "bg-dark text-white ";
                        }
                        return <h2 onClick={(event) =>{
                            setSelectedTab(item);
                        }}
                        key={i} 
                        className={`py-3 px-5 mr-2 border ${conditionalClasses}`}>{item.header}</h2>
                    })
                }
            </header>
            <div className="row p-3 border mt-3 w-50">
                <h4>{selectedTab.content}</h4>
            </div>
        </div>
    );
};
export default Tab;