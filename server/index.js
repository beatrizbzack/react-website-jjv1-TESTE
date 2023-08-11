
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;


// CONEXÃO COM O BANCO DE DADOS
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "equipe1", 
    database: "banco", 
}); 


// configs
app.use(express.json());
app.use(cors());

// PACIENTE - CONEXÃO BACK END
app.post("/CadastroPaciente", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const nome = req.body.nome; 
    const genero = req.body.genero; 
    const cpf = req.body.cpf; 
    const dateN = req.body.dateN; 
    const celular = req.body.celular;

  
    db.query("SELECT * FROM pacientes WHERE email = ?", [email], (err, result) => {
      if (err) {
        // res.send(err);
        console.log(JSON.stringify(err)); 
      }
      if (result.length == 0) { // CADASTRA CASO O PACIENTE NN ESTEJA NO BANCO DE DADOS
        // CRIPTOGRAFA A SENHA DO USUÁRIO
        bcrypt.hash(password, saltRounds, (err, hash) => {
          db.query(
            "INSERT INTO pacientes (email, password, nome, genero, cpf, dateN, celular) VALUE (?,?,?,?,?,?,?)",
            [email, hash, nome, genero, cpf, dateN, celular],
            (err, response) => {
              if (err) {
                // res.send(err);
                console.log(JSON.stringify(err)); 
              }
  
              res.send({ msg: "Usuário cadastrado com sucesso" });
          
            }
          );
        });
      } else { // CASO O USUARIO JA ESTEJA CADASTRADO NO BANCO
        res.send({ msg: "Email já cadastrado" });
      }
    });
    res.header( "Access-Control-Allow-Origin" ); 
});
  
app.post("/LoginPaciente", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    pacLogado = false;  
    // POST DE LOGIN
    db.query("SELECT * FROM pacientes WHERE email = ?", [email], (err, result) => {
        if (err) {
        // res.send(err);
        console.log(JSON.stringify(err)); 
        }
        if (result.length > 0) { //  SE TIVER CADASTRO + compara a senha (criptografada)
        bcrypt.compare(password, result[0].password, (error, response) => {
            if (error) {
            // res.send(err);
            console.log(JSON.stringify(err)); 
            }
            if (response) {
            res.send({ msg: "Usuário logado" });
            pacLogado = true;  
            } else {
            res.send({ msg: "Senha incorreta" });
            }
        }); // CASO O USUÁRIO NÃO ESTEJA CADASTRADO 
        } else {
        res.send({ msg: "Usuário não registrado!" });
        }
    });
    res.header( "Access-Control-Allow-Origin" );
});
  
// CLINICAS - CONEXÃO BACK-END

// CADASTRO
app.post("/CadastroClinica", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const nome = req.body.nome; 
    const telefone = req.body.telefone; 
    const celular = req.body.celular; 
    const idClinica = req.body.idClinica; 

  
    db.query("SELECT * FROM clinicas WHERE email = ?", [email], (err, result) => {
      if (err) {
        // res.send(err);
        console.log(JSON.stringify(err)); 
      }
      if (result.length == 0) { // CADASTRA CASO A CLINICA NN ESTEJA NO BANCO DE DADOS
        // CRIPTOGRAFA A SENHA DO USUÁRIO
        bcrypt.hash(password, saltRounds, (err, hash) => {
          db.query(
            "INSERT INTO clinicas (email, password, nome, telefone, celular, idClinica) VALUE (?,?,?,?,?,?)",
            [email, hash, nome, telefone, celular, idClinica],
            (err, response) => {
              if (err) {
                // res.send(err);
                console.log(JSON.stringify(err)); 
              }
  
              res.send({ msg: "Usuário cadastrado com sucesso" });
            }
          );
        });
      } else { // CASO O USUARIO JA ESTEJA CADASTRADO NO BANCO
        res.send({ msg: "Email já cadastrado" });
      }
    });
    res.header( "Access-Control-Allow-Origin" ); 
});

// LOGIN 
app.post("/LoginClinica", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // POST DE LOGIN
    db.query("SELECT * FROM clinicas WHERE email = ?", [email], (err, result) => {
        if (err) {
        // res.send(err);
        console.log(JSON.stringify(err)); 
        }
        console.log(result.length)
        if (result.length > 0) { //  SE TIVER CADASTRO + compara a senha (criptografada)
        bcrypt.compare(password, result[0].password, (error, response) => {
            if (error) {
            // res.send(err);
            console.log(JSON.stringify(err)); 
            }
            if (response) {
            res.send({ msg: "Usuário logado" });
            } else {
            res.send({ msg: "Senha incorreta" });
            }
        }); // CASO O USUÁRIO NÃO ESTEJA CADASTRADO 
        } else {
        res.send({ msg: "Usuário não registrado!" });
        }
    });
    res.header( "Access-Control-Allow-Origin" );
});

app.listen(3001, () => {
    console.log("rodando porta 3001");
}); 