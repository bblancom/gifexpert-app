export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=I1GAAXsZ3h1TTpYJucS7cK63wT5GrsnI&q=${category}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map( image => ({
        id: image.id,
        title: image.title,
        url: image.images.fixed_height_small.url
    }));

    return gifs;
}