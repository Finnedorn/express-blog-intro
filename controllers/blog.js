const blogPosts = [
    {
        "titolo": "L'Arte della Pittura Astratta",
        "contenuto": "La pittura astratta è una forma d'arte che utilizza forme, colori e linee non rappresentative per creare una composizione visivamente impattante. Questo stile permette agli artisti di esprimere emozioni e concetti in modo libero e soggettivo.",
        "immagine": "https://example.com/arte_astratto.jpg",
        "tags": ["arte", "pittura", "astratto"]
    },
    {
        "titolo": "Ricetta della Pasta alla Carbonara",
        "contenuto": "La pasta alla carbonara è un piatto italiano classico che combina pasta, uova, formaggio, pancetta e pepe nero. È facile da preparare e molto gustosa, perfetta per una cena veloce e deliziosa.",
        "immagine": "https://example.com/pasta_carbonara.jpg",
        "tags": ["ricette", "cucina", "italiano"]
    },
    {
        "titolo": "10 Consigli per Migliorare la Tua Produttività",
        "contenuto": "Migliorare la produttività può essere una sfida, ma con questi 10 consigli pratici, potrai ottimizzare il tuo tempo e raggiungere i tuoi obiettivi in modo più efficiente.",
        "immagine": "https://example.com/produttivita.jpg",
        "tags": ["produttività", "consigli", "lavoro"]
    },
    {
        "titolo": "Le Migliori Destinazioni di Viaggio per il 2024",
        "contenuto": "Scopri le migliori destinazioni di viaggio per il 2024, dalle spiagge tropicali alle città storiche, per una vacanza indimenticabile.",
        "immagine": "https://example.com/destinazioni_viaggio.jpg",
        "tags": ["viaggi", "destinazioni", "turismo"]
    },
    {
        "titolo": "Guida alla Meditazione per Principianti",
        "contenuto": "La meditazione è una pratica che può aiutarti a ridurre lo stress e migliorare il benessere mentale. Questa guida per principianti ti introdurrà alle tecniche di base per iniziare il tuo viaggio nella meditazione.",
        "immagine": "https://example.com/meditazione.jpg",
        "tags": ["meditazione", "benessere", "salute"]
    }
]

module.exports = {
    getPosts: (req,res) => {
        res.format({
            html: () => {
                let content = ``;
                blogPosts.forEach(post=>{
                    content += `
                    <div>
                        <h2>${post.titolo}</h2>
                        <div style="width: 100px; height: 100px">
                          <img style="width: 100%" src="${post.titolo}" alt="immagine-di-${post.titolo}"> 
                        </div>
                        <p>${post.contenuto}</p>
                        <ul>
                    `;
                    post.tags.forEach(tag =>{
                        content += `
                            <li>${tag}</li>
                        `
                        });
                    content += `
                        </ul>
                    </div>
                    `
                });
                res.send(content);
            },
            json: () => {
                res.json(blogPosts);
            }
        });
    }
}
