const getSavedCart = () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
};

const setSaveCart = (cart) => {
localStorage.setItem("cart", JSON.stringify(cart));
}

export {getSavedCart, setSaveCart};