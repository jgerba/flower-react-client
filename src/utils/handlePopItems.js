function handlePopItems(data, quantity = 3) {
    const popularItems = [];

    // choose 3 random items as 'popular'
    for (let i = 0; i < quantity; i++) {
        let index = Math.round(Math.random() * (data.length - 1));

        // change index if the same item
        while (
            popularItems.length > 0 &&
            popularItems.some(item => item._id === data[index]._id)
        ) {
            index = Math.round(Math.random() * (data.length - 1));
        }

        popularItems.push(data[index]);
    }

    return popularItems;
}

export default handlePopItems;
