import React from 'react';

const MainContainer = ({ className, children }) => {
    return (
        <>
            <div className={`${className} xl:px-[150px]`}>
                {children}
            </div>
        </>
    );
};

export default MainContainer;