import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import validator from "validator"
import transporter from '../config/nodemailer.js'

// login user 

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // phần làm thêm
    if (!email || !password) {
        return res.json({ success: false, message: 'Email and password are required' });
    }

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User Doesn't exists" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = createToken(user._id);

        // thêm lệnh 
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        // thêm return
        return res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

// register user 

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    // phần làm thêm 
    if (!name || !email || !password) {
        return res.json({ success: false, message: 'Missing Details' });
    }

    try {
        const exists = await userModel.findOne({ email });
        // checking is user already exists
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);

        // thêm lệnh 
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        // sending welcome email
        // const mailOptions = {
        //   from: process.env.SENDER_EMAIL,
        //   to: email,
        //    subject: 'Welcome to website',
        //   text: `Welcome to my website.Your account has been created with email id: ${email}`
        //}
        //await transporter.sendMail(mailOptions);

        // thêm return 
        // return res.json({ success: true});
        res.json({success:true, token});

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// chức năng logout(chức năng thêm vào) 

const logoutUser = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });
        
        return res.json({success:true, message: "Logged Out"});

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "Error" });
    }
}
export { loginUser, registerUser , logoutUser}