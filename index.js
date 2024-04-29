// 1.import the express
const express =require('express')
const Food=require('./models')
const cors =require('cors')


// 2

const app=new express()

// middleware

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


// api to add data to db
app.post('/add',async(req,res)=>{
    const result=await new Food(req.body);
    result.save();
    res.send("data added")
})

// Endpoint to add an item to the cart
app.post('/api/cart/add', (req, res) => {
    const item = req.body;
    cart.push(item);
    res.status(201).json({ message: 'Item added to cart successfully' });
});

// Endpoint to place an order
app.post('/api/orders/place', (req, res) => {
    const orderItems = req.body;
    // Process the orderItems (e.g., save to database, calculate total)
    console.log('Received order:', orderItems);
    res.status(201).json({ message: 'Order placed successfully' });
});



// 4.create a localhost port
app.listen(8080,()=>{
    console.log("port is running at 8080")
})