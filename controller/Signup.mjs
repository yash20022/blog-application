import userSchema from "../models/login.mjs";
import bcrypt from "bcrypt";

async function Signup(req, res) {
    console.log("-------");
    console.log(req.body);

    try {
    
        const { name, email, Password } = req.body;
        console.log(name,email,Password);
        const hashPassword = await bcrypt.hash(Password, 10);
        console.log(hashPassword)
        const user = new userSchema({ name, email, password: hashPassword });
    
        await user.save();
      //  res.status(200).json({ message: "User registered Successfully" });
        return res.redirect("/auth/login");
    } catch (err) {
        console.error(err);
        res.status(404).json({ error: "Error while storing signup information", details: err });
    }
}

export default Signup;
