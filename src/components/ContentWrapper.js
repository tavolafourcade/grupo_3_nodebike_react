import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import ProductList from './ProductList';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <ProductList />
                    
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;