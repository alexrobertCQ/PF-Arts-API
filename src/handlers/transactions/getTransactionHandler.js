const getTransHandler = async (req, res) => {
  const buyerId = req.userId;
  try {
    const response = await getTrans();
  } catch (error) {}
};

module.exports = getTransHandler;
