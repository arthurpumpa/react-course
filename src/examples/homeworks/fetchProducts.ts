// mocks server call
export default () => {
    return new Promise((resolve) => {
        const products = [
            {name: 'iPhone 6', price: 1001},
            {name: 'LG X2000', price: 709},
            {name: 'Samsung A5', price: 318},
            {name: 'Nokia 3310', price: 1100},
            {name: 'OnePlusOne', price: 300},
            {name: 'iPhone SE', price: 1000},
            {name: 'Huawei', price: 105},
            {name: 'HTC', price: 444},
            {name: 'Motorolla', price: 305},
            {name: 'ZTE', price: 250},
            {name: 'Sony', price: 300},
        ];

        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};