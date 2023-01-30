import { sigin, verify } from "jsonwebtoken";

const JWY_SECRET = "jfkojecnejhvbrrhv()vcfknvgkv jngfv[]djcfevbjhfvjfvlfvbnvjf"

const mongoUrl="mongodb+srv://zharickBautista:HOLA.182406@cluster0.x3xilkj.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl,{
    UseNewUrlParser:true,
}).then(()=>{
    console.log("Conectado a la base de datos");
})
.catch((e) => console.log(e));

import "./userDetails";

const User = mongoose.model("UserInfo");

app.post("/register",async(req,res)=>{
    const{fname,lname, email,password} = req.body;
    const encryptedPassword= await bcrypt.hash(password,10)

    try {
        const oldUser=User.findOne({email});
        
        if (oldUser) {
           return res.send({error: "El usuario ya existe"});
        }
        await User.create({
            fname,
            lname,
            email,
            password:encryptedPassword,
        });
        res.send({status:"ok"})
    } catch (error) {
        res.send({status:"error"})
    }
})

app.post("/login-user",async(req,res)=>{
    const {email, password} = req.body;

    const user = await User.findOne ({email});
    if (user) {
        return res.send({error: "El usuario no se encuentra"});
     }
     if(await bcrypt.compare(password)){
        const token = sigin({email:user.email},JWY_SECRET);
        if(res.status(201)){
            return res.json({"status":"ok", data: token});
        }else{
        return res.json({error: "error"});
        }
     }
     res.json({status: "error", error:"Contraseña incorrecta"});
});

app.post("/userData",async(req,res)=>{
    const {token}=req.body;
    try {
        const user=verify(token, JWY_SECRET);
        console.log(user);

        const useremail = user.email;
        User.findOne({email: useremail})
        .then((data) =>{
            res.send({status: "ok", data:data});
        
        })
        .catch((error) => {
            res.send({status: "error", data:data});
        });
    } catch (error) {
        
    }
})
app.listen (3000,()=>{
    console.log("Su puerto es el 3000 iniciado");
})