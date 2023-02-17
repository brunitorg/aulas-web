import express from 'express';

const app = express();
app.use(express.json());


app.get('/', (request ,response) => {
    response.send('Página principal');
});

//request.params -> /url/endpoint/:cod ou id ou qualquercoisa
app.get('/data/:id',(request, response) => {
    const { id } = request.params;

    response.send({
        id,
        nome: 'Bruno',
        cpf: "123.456.789-00",
        endpoint: "/data/:id"
    });


});

app.post('/data',(request, response) => {

    const { id, name, barcode } = request.body;

    response.json({
        id,
        name,
        barcode,
    });

});

const config = {
    port: 4000,
    message: "Server is running..."
}


export default app;
export { config };


