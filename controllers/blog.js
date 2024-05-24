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
                    <div class="card overflow-hidden m-2" style="width: 400px">
                        <div class="overflow-hidden position-relative">
                            <img style="height: 300px" src="${post.immagine}" class="card-img-top" alt="immagine-di-${post.titolo}">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title text-center mb-3">${post.titolo}</h5>
                            <p class="card-text">${post.contenuto.length > 150 ? post.contenuto.slice(0,150) + "..." : post.contenuto}</p>
                            <ul>
                    `;
                    post.tags.forEach(tag =>{
                        content += `
                            <li class="list-unstyled">${tag}</li>
                        `
                        });
                    content += `
                            </ul>
                        </div>
                    </div>
                    `
                });
                const blogPage = fs.readFileSync("blogPage.html", "utf-8").replace("{{blog}}", content);
                res.send(blogPage);
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
