const router = require("express").Router();
const Contract = require("../Models/Contracts");
const jwt = require("jsonwebtoken")
//create
router.post("/", checkToken, async (req, res) => {
  const { country,
    state,
    city,
    documentNumber,
    socialReason,
    address,
    district,
    number,
    zipCode,
    email,
    phone,
    contractStarts,
    contractEnds,
    dueDay,
    company, } = req.body;

  const contract = {
    country,
    state,
    city,
    documentNumber,
    socialReason,
    address,
    district,
    number,
    zipCode,
    email,
    phone,
    contractStarts,
    contractEnds,
    dueDay,
    company,
  };
  //criar lógica de verificação se os dados existem antes de criar
  //create
  try {
    await Contract.create(contract);
    res.status(201).json({ message: "Contrato criado com sucesso!" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//read data

router.get("/", checkToken, async (req, res) => {
  try {
    const contracts = await Contract.find();
    //criar logica caso não tenha nenhum contrato registrado. Colocar return no fim dos ifs
    res.status(200).json(contracts);
  } catch (err) {
    res.status(500).json({ error: err });
  }

});

function checkToken(req, res, next) {
  const authHeader = req.headers['authorization']

  if(!authHeader) {
    return res.status(401).json({message: "Acesso negado"})
  }

  try {
    const secret = "hwikejfbw294n14r"
    jwt.verify(authHeader, secret)
    next()
  } catch(err) {
    res.status(400).json({message: "Token inválido"})
  }
}

//update data (PUT ou PATCH)
router.patch("/:id", checkToken, async (req, res) => {
  const id = req.params.id;

  const { country,
    state,
    city,
    documentNumber,
    socialReason,
    address,
    district,
    number,
    zipCode,
    email,
    phone,
    contractStarts,
    contractEnds,
    dueDay,
    company, } = req.body;

  const contract = {
    country,
    state,
    city,
    documentNumber,
    socialReason,
    address,
    district,
    number,
    zipCode,
    email,
    phone,
    contractStarts,
    contractEnds,
    dueDay,
    company,
  };

  try {
    const updatedContract = await Contract.updateOne({ _id: id }, contract);
    res.status(200).json(contract);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//delete

router.delete("/:id", checkToken, async (req, res) => {
  const id = req.params.id;
  const person = await Contract.findOne({ _id: id });
  if (!person) {
    res.status(422).json({ message: "Contrato não encontrado" });
    return;
  }

  try {
    await Contract.deleteOne({ _id: id });
    res.status(200).json({ message: "Contrato deletado com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
