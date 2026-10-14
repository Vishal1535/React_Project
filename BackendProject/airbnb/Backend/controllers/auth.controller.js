import userModule from '../modules/user.module.js';
import bcrypt from 'bcrypt';
import genToken from '../configs/gentoken.js';

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check existing user
        const existingUser = await userModule.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await userModule.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully",
            user
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check user
        const user = await userModule.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        // Generate token
        const token = genToken(user._id);
      
        // Store token in cookie
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: "lax",
    secure: false,
    path: "/"   // 🔥 MUST ADD
}); 

        res.status(200).json({
            message: "Login successful",
            user
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
    
};
export const logout = async (req, res) => {
    try {
        res.cookie("token", "", {
            maxAge: 0
        });

        return res.status(200).json({
            message: "Logout successful"
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
export const profile = async (req, res) => {
    try {
        let user = await userModule.findById(req.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "Profile fetched successfully",
            success:true,
            user
        });

    } catch (err) {
        console.log("Error in Profile", err);

        res.status(500).json({
            message: "Server error"
        });
    }
};