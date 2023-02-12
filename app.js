const express = require("express");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.json({ status: "success", message: "Welcome To Testing APIS" });
});

app.get("/name", (req, res) => {
    res.json({ status: "success", name: "Nwachukwu" });
});

app.post("/add", (req, res) => {
    const { num1, num2 } = req.body;
    const add = (num1, num2) => {
        return num1 + num2;
    };
    res.json({
        status: "success",
        result: "Welcome To Testing API",
        result: add(num1, num2)
    });
});


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));


module.exports = app;