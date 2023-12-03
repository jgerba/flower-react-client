function handlePopItems(data, quantity = 3) {
    if (!data) return;

    const popularItems = [];

    // choose 3 random items as 'popular'
    for (let i = 0; i < quantity; i++) {
        let index = Math.round(Math.random() * (data.length - 1));

        console.log(index);

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
