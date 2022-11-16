// config inicial
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const User = require("./Models/User");
//register user

app.post("/auth/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(422).json({ message: "O nome é obrigatorio" });
  }
  if (!email) {
    return res.status(422).json({ message: "O email é obrigatorio" });
  }
  if (!password) {
    return res.status(422).json({ message: "Insira uma senha" });
  }

  const userExists = await User.findOne({ email: email });
  if (userExists) {
    return res.status(422).json({ message: "Por favor, utilize outro e-mail" });
  }

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: passwordHash,
  });

  try {
    await user.save();
    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//login user
app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;
  
    // validations
    if (!email) {
      return res.status(422).json({ msg: "O email é obrigatório!" });
    }
  
    if (!password) {
      return res.status(422).json({ msg: "A senha é obrigatória!" });
    }
  
    // check if user exists
    const user = await User.findOne({ email: email });
  
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }
  
    // check if password match
     const checkPassword = await bcrypt.compare(password, user.password);
 
    if (!checkPassword) {
      return res.status(422).json({ msg: "Senha inválida" });
    }
  
    try {
       
     const secret = "hwikejfbw294n14r";
      const token = jwt.sign(
        {
          id: user._id,
        },
        secret
      );
  
      res.status(200).json({ msg: "Autenticação realizada com sucesso!", token });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  });

//Entity routes
const contractRoutes = require("./routes/contractRoutes");
app.use("/new-contract", contractRoutes);

//porta
mongoose
  .connect(
    "mongodb+srv://luiz:zb.bPV2JQ9B.Ka9@apiflexge.afvffqc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("conectamos ao banco");
    app.listen(3001);
  })
  .catch((err) => console.log(err));
