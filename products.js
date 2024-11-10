import express from "express";
const app = express();
const PORT = 3000;

let products = [
    { id: 1, name: 'Shirt', size: 'M', price: 15 },
    { id: 2, name: 'Jeans', size: 'L', price: 40 }
];
app.use(express.json());

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/products', (req, res) => {
    const { name, size, price } = req.body;

    if (!name || !size || !price) {
        return res.status(400).json({ message: 'Укажите размер, название и цену!' });
    }

    const newProduct = {
        id: products.length + 1,
        name,
        size,
        price
    };
    products.push(newProduct);
    
    res.status(201).json(newProduct);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});