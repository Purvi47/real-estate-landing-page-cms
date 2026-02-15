const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  section: { type: String, required: true, unique: true },
  title: String,
  description: String,
  // Added sub-fields to handle the specific "Vighnaharta" pricing layout
  extraData: {
    unit1Title: String,
    unit1OldPrice: String,
    unit1NewPrice: String,
    unit2Title: String,
    unit2OldPrice: String,
    unit2NewPrice: String,
    location: String
  },
  faq: [{ question: String, answer: String }]
});

module.exports = mongoose.model('Content', contentSchema);