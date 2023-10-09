import express from 'express';

const port = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
    res.type('html');

    res.send(`
        <html>
            <head>
                <title>Welcome to you first application</title>
            </head>
            <body>
                <h1>Hello world, we are deployed on the cloud!</h1>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Application listening on ${port}`);
});
