const mongoose = require('mongoose');

//Modelo de datos de un usuario
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required: true
    },
    depa: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});



module.exports = mongoose.model('User' , userSchema);


/*const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    apellido: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    depa: { type: String, required: true },
    password: { type: String, required: true }
});

UserSchema.pre('save', function (next) {
    if (this.isNew || this.isModified('password')) {
        const document = this;

        bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
            if (err) {
                next(err);
            } else {
                document.password = hashedPassword;
                next();
            }
        });
    } else {
        next();
    }
});

UserSchema.methods.isCorrectPassword = function (password, callback) {
    bcrypt.compare(password, this.password, function (err, same) {
        if (err) {
            callback(err);
        } else {
            callback(err, same);
        }
    });
}

module.exports = mongoose.model('User', UserSchema);*/