const Content = require('../models/contentModel');

const getContent = async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateContent = async (req, res) => {
  try {
    const { section, title, description, extraData, faq } = req.body;
    const updated = await Content.findOneAndUpdate(
      { section },
      { title, description, extraData, faq },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getContent, updateContent };