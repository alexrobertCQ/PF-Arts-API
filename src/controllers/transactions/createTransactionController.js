const { Transaction, Artwork, User } = require('../../db');

const createTrans = async (artworkId, buyerId, sellerId) => {
  const transaction = await Transaction.create({
    artworkId,
    buyerId,
    sellerId,
  });

  const artwork = await Artwork.findByPk(artworkId);
  if (!artwork) {
    throw new Error('Artwork not found');
  }

  await transaction.addArtwork(artwork);

  const buyer = await User.findByPk(buyerId);
  const seller = await User.findByPk(sellerId);

  // Retornar los detalles de la transacción creada
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
