const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 

// Import Firebase credentials
const serviceAccount = require('../serviceAccountKey.json');
initializeApp({
  credential: cert(serviceAccount)
});

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const firebaseUser = await getAuth().createUser({ email, password });
        const newUser = await User.create({ email, firebaseUid: firebaseUser.uid });
        res.status(200).json({ message: "Registered in Firebase & MongoDB", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email } = req.body;
        // Find user in MongoDB
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });

        // Generate local JWT for API protection
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secretkey', { expiresIn: '1d' });
        
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};