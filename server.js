const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Configura a conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cadastro_db' 
});

// Conecta ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conexão estabelecida com sucesso ao banco de dados!');
    }
});

// Serve arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Rota para cadastro
app.post('/cadastrar', (req, res) => {
    const { email, senha, idade } = req.body;
    const query = 'INSERT INTO usuarios (email, senha, idade) VALUES (?, ?, ?)';
    connection.query(query, [email, senha, idade], (err, results) => {
        if (err) {
            console.error('Erro ao cadastrar usuário:', err);
            res.status(500).json({ mensagem: 'Erro ao cadastrar usuário' });
        } else {
            res.json({ mensagem: 'Usuário cadastrado com sucesso!' });
        }
    });
});

// Rota para login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
    connection.query(query, [email, senha], (err, results) => {
        if (err) {
            console.error('Erro ao verificar credenciais:', err);
            res.status(500).json({ mensagem: 'Erro ao verificar credenciais' });
        } else if (results.length > 0) {
            // Login bem-sucedido
            res.json({ sucesso: true });
        } else {
            res.status(401).json({ mensagem: 'Credenciais inválidas' });
        }
    });
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
