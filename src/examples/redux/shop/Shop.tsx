import * as React from 'react';
import ShopCart from './ShopCart';
import ShopList from './ShopList';

class Shop extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-3">
                    <ShopList />
                </div>
                <div className="col-sm-5 col-sm-offset-4">
                    <ShopCart/>
                </div>
            </div>
        );
    }
}

export default Shop;