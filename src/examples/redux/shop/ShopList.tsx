import * as React from 'react';
import { connect } from 'react-redux';
import { Product } from './shop-reducer';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from './shop-actions';
import { IAppState } from '../root-reducers';

interface IStateProps {
    allProducts: Product[];
}

interface IDispatchProps {
    fetchProducts: () => void;
    addProductToCart: (product: Product) => void;
}

interface ProductItemProps {
    product: Product;
    onProductAdd: (product: Product) => void;
}

class ProductItem extends React.Component<ProductItemProps> {
    render() {
        return (
            <tr>
                <td style={{verticalAlign: 'middle'}}>
                    {`${this.props.product.name}(${this.props.product.price})`}
                </td>
                <td>
                    <button
                        className="btn btn-default"
                        onClick={this.handleClick}
                    >
                        Add
                    </button>
                </td>
            </tr>
        );
    }

    private handleClick = () => {
        this.props.onProductAdd(this.props.product);
    }
}

class ShopList extends React.Component<IStateProps & IDispatchProps> {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <table className="table">
                <tbody>
                {this.renderProducts()}
                </tbody>
            </table>
        );
    }

    private renderProducts = () => this.props.allProducts.map((product: Product, index) => (
        <ProductItem
            key={index}
            product={product}
            onProductAdd={this.props.addProductToCart}
        />
    ))
}

const mapStateToProps = (state: IAppState): IStateProps => {
    return {
        allProducts: state.shop.allProducts
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>): IDispatchProps =>
    bindActionCreators({
        fetchProducts: actions.fetchProducts,
        addProductToCart: actions.addProductToCart
    }, dispatch);

export default connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(ShopList);