const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ productId: mongoose.Schema.Types.ObjectId }]
},{
    timestamps: true
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
