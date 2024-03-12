import express from "express";
import cors from "cors";
import { users } from "./data.js";
const app = express();


app.use(cors());
app.get('/',(req,res)=>{
    res.status(200).send("hallo dunia")
})
app.get('/students',(req,res)=>{
    res.status(200).send({user:users})
})

app.get('/student/:nim',(req,res)=>{
    const params = req.params.nim;
    const user = users.find((user => user.id = params ))
    res.status(200).send({user})
})
app.get('/student', (req, res) => {
    const nim = req.query.nim;
    if (!nim) {
        return res.status(400).send("NIM tidak ditemukan dalam query string");
    }

    const user = users.find(user => user.id === nim);

    if (!user) {
        return res.status(404).send("Pengguna dengan NIM tersebut tidak ditemukan");
    }

    res.status(200).send({ user });
});



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});