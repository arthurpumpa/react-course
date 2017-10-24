import * as React from 'react';
import { connect } from 'react-redux';
import { ICartItem, ShopState } from './shop-reducer';
import { bindActionCreators, Dispatch } from 'redux';
import { removeProductFromCart } from './shop-actions';

interface IStateProps {
    cart: ICartItem[];
}

interface IDispatchProps {
    removeProductFromCart: (name: string) => void;
}

const style = {
    column: {
        verticalAlign: 'middle'
    }
};

interface CartItemProps {
    cartItem: ICartItem;
    onRemove: (name: string) => void;
}

class CartItem extends React.Component<CartItemProps> {
    render() {
        const {cartItem} = this.props;

        return (
            <tr>
                <td style={style.column}>{cartItem.product.name}</td>
                <td style={style.column}>
                    {cartItem.count}
                </td>
                <td style={style.column}>
                    {cartItem.count * cartItem.product.price}
                </td>
                <td>
                    <button
                        className="btn btn-default"
                        onClick={this.handleRemove}
                    >
                        Remove
                    </button>
                </td>
            </tr>
        );
    }

    private handleRemove = () => {
        this.props.onRemove(this.props.cartItem.product.name);
    }
}

class ShopCart extends React.Component<IStateProps & IDispatchProps> {
    render() {
        const totals = this.props.cart.reduce((result, cartItem) => ({
            count: result.count + cartItem.count,
            price: result.price + cartItem.product.price * cartItem.count
        }), {
            count: 0,
            price: 0
        });

        return (
            <div>
                <div style={{float: 'left'}}>
                    Cart
                </div>
                <div style={{float: 'right'}}>
                    {`${totals.count} item(s) (${totals.price})`}
                </div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderItems()}
                    </tbody>
                </table>
            </div>
        );
    }

    private renderItems = () => this.props.cart.map((cartItem: ICartItem) => (
        <CartItem
            key={cartItem.product.name}
            cartItem={cartItem}
            onRemove={this.props.removeProductFromCart}
        />
    ))
}

const mapStateToProps = (state: ShopState): IStateProps => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): IDispatchProps =>
    bindActionCreators({
        removeProductFromCart: removeProductFromCart
    }, dispatch);

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(ShopCart);