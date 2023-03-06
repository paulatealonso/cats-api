const express = require("express");
const app = express();
const PORT = 3001;
const cors = require('cors');

const cats = require("./cats.json");
const adopted = require("./adopted.json");

app.use(cors())

app.get("/", (request, response) => {
    response.send({response: true, code: 200, cats: cats});
});

app.get("/adopted", (request, response) => {
    response.send({response: true, code: 200, adopted: adopted});
    console.log(response, '--------');
});
app.get("/:id", (request, response) => {
    const { id } = request.params;
    const results = cats.filter(user => user.id === Number(id));
    response.send({response: true, code: 200, cats: results});
    console.log(id, response, '--------------', results);
});


app.get("/adopted/:id", (request, response) => {
    const { id } = request.params;
    const results = adopted.filter(adopt => adopt.id === Number(id));
    response.status(200).send({response: true, adopted: results});
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});