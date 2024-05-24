const fs = require("fs");
function writeOnJson(file, newData) {
    const filetoWrite = JSON.stringify(newData);
    fs.writeFileSync(file, filetoWrite);
};

module.exports = {
    getPosts: (req,res) => {
        const blogPosts = require("../db/blogPosts.json");
        res.format({
            html: () => {
                let content = ``;
                blogPosts.forEach(post=>{
                    content += `
                    <div>
                        <h2>${post.titolo}</h2>
                        <div>
                          <img style="width: 200px; height: 200px; object-fit: cover;" 
                          src="${post.immagine}" alt="immagine-di-${post.titolo}"> 
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
    },
    postPost: (req, res) => {
        const blogPosts = require("../db/blogPosts.json");
        writeOnJson("db/blogPosts.json", [...blogPosts, req.body]);
        res.send("post creato con successo !");
    }
}
