const express = require('express');
const server = express();

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages');

//configurando o nunjucks (template engine)
const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
    express: server,
    noCache: true

})

//Inicio e configuração do servidor
server
    //receber os dados do req.body
    .use(express.urlencoded({extended:true}))
    //configurando os arquivo estáticos
    .use(express.static("public"))
    //Rotas da aplicação
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses)
    .post('/save-classes', saveClasses)
    .listen(3333, () => {
        console.log("Ligado na porta 3333");
    });