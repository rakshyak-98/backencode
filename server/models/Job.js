const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Job', jobSchema);