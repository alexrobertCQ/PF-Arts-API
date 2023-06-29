const { Transaction, Artwork, User } = require('../../db');

const createTrans = async (artworkId, buyerId, sellerId) => {
  const transaction = await Transaction.create({
    artwork: artworkId,
    buyer: buyerId,
    seller: sellerId,
  });

  const artwork = await Artwork.findByPk(artworkId);
  if (!artwork) {
    throw new Error('Artwork not found');
  }

  await transaction.addArtwork(artwork);

  const buyer = await User.findByPk(buyerId);
  console.log('buyerByPk', buyer);
  const seller = await User.findByPk(sellerId);
  console.log('sellerByPk', seller);

  return {
    transactionId: transaction.id,
    buyer: {
      id: buyer.userId,
      name: buyer.userName,
    },
    seller: {
      id: seller.userId,
      name: seller.userName,
    },
  };
};

module.exports = createTrans;
