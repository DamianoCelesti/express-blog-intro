const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Server del mio blog");
})

app.get('/bacheca', (req, res) => {
    const posts = [
        {
            titolo: "Ricetta del ciambellone soffice",
            contenuto: "Scopri come preparare un ciambellone soffice e gustoso, perfetto per la colazione o la merenda.",
            immagine: "/images/ciambellone.jpeg",
            tags: ["dolci", "ciambellone", "colazione", "ricetta"]
        },
        {
            titolo: "Cracker alla barbabietola: snack sano e croccante",
            contenuto: "I cracker alla barbabietola sono uno snack leggero e salutare, perfetti per accompagnare creme e formaggi.",
            immagine: "/images/cracker_barbabietola.jpeg",
            tags: ["snack", "crackers", "barbabietola", "salutare"]
        },
        {
            titolo: "Pane fritto dolce: una delizia croccante",
            contenuto: "Una ricetta tradizionale per un pane fritto dolce irresistibile, perfetto da gustare con zucchero e cannella.",
            immagine: "/images/pane_fritto_dolce.jpeg",
            tags: ["pane fritto", "dolci", "tradizione", "frittura"]
        },
        {
            titolo: "Pasta alla barbabietola: colore e sapore in un piatto unico",
            contenuto: "La pasta alla barbabietola è un primo piatto cremoso e saporito, con un colore acceso e un gusto sorprendente.",
            immagine: "/images/pasta_barbabietola.jpeg",
            tags: ["pasta", "barbabietola", "primi piatti", "cucina creativa"]
        },
        {
            titolo: "Torta paesana: il dolce della tradizione",
            contenuto: "La torta paesana è un dolce tipico della tradizione lombarda, ricco di sapore e perfetto per ogni occasione.",
            immagine: "/images/torta_paesana.jpeg",
            tags: ["torta", "dolci", "tradizione", "Lombardia"]
        }
    ];

    res.json(posts);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})