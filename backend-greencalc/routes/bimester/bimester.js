const router = require("express").Router();
const User = require("../../models/User");
const Bimester = require("../../models/Bimester");
const verify = require("../verifyToken");

function co2(luz, gasolina, gas, agua) {
  var co2_emitido = 0;
  co2_emitido += (luz * 247) / 3022;
  co2_emitido += (gasolina * 79) / 763;
  co2_emitido += (gas * 286) / 2545;
  co2_emitido += (agua * 1253) / 50000;
  return co2_emitido;
}
function countPoints(id, res) {}

router.post("/newBimester", verify, async (req, res) => {
  const bim = new Bimester({
    gasto_luz: req.body.gasto_luz,
    gasto_gasolina: req.body.gasto_gasolina,
    gasto_gas: req.body.gasto_gas,
    gasto_agua: req.body.gasto_agua,
    co2_emitido: co2(
      req.body.gasto_luz,
      req.body.gasto_gasolina,
      req.body.gasto_gas,
      req.body.gasto_agua
    ),
    belongs_to: req.body.user_id,
  });
  const savedBimester = await bim.save();
  let allBim = await Bimester.find({ belongs_to: req.body.user_id });
  let puntos;
  if (allBim) {
    if (allBim > 2) {
      let x =
        (allBim[allBim.length - 2].co2_emitido -
          allBim[allBim.length - 1].co2_emitido) /
        6;
      puntos = x;
    } else {
      puntos = 1;
    }
    let u = await User.findOneAndUpdate(
      { _id: req.body.user_id },
      { $inc: { points: puntos } }
    );

    console.log("error caching this");
  }
  console.log(allBim);
  if (!savedBimester) {
    console.log("Error saving bimester");
    res.status(400).json({ message: "Error creating bimester record" });
  } else {
    res.status(200).json(savedBimester);
  }
});
router.post("/countPoints", verify, (req, res) => {});
router.post("/getMyBimester", verify, async (req, res) => {
  const bim = await Bimester.find({ belongs_to: req.body.user_id });
  if (!bim) {
    console.log("Bimester not found");
    res.status(400).json({ message: "Could not get Bimester from your user" });
  } else {
    res.status(200).json(bim);
  }
});

module.exports = router;
