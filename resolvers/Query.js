exports.Query = {
    hello: (parent, args, context) => {
        return null;
    },
    numberOfAnimals: (parent, args, context) => {
        return 55;
    },
    price: (parent, args, context) => {
        return 123.321;
    },
    isCool: (parent, args, context) => false,
    helloArray: (parent, args, context) => {
        return ["null"];
    },
    products: (parent, {filter}, {products, reviews})  => {
        let filteredProducts = products;

        if (filter){
            const { onSale, avgRating } = filter;
            if (onSale){
                filteredProducts = filteredProducts.filter((product) => {
                    return product.onSale;
                });
            }
            if ([1,2,3,4,5].includes(avgRating)){
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach(review => {
                        if(review.productId === product.id) {
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    });
                    const avgProductRating = sumRating/numberOfReviews;
                    console.log(avgProductRating, product.name);
                    return avgProductRating >= avgRating;
                });
            }
        }

        return filteredProducts;
    },
    product: (parent, args, {products}) => {
        const { id } = args;
        return products.find((product) => product.id === id);
    },
    categories: (parent, args, {categories}) => {return categories;},
    category: (parent, args, {categories}) => {
        const { id } = args;
        return categories.find((category)=>category.id===id);        
    }
};