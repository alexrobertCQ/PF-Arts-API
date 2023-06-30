const { Review,User,Artwork } = require('../../db');

const getReviewsArtwork = async (artworkId)=>{
    const reviews = await Artwork.findAll({
        attributes: [],
        where:{artworkId:artworkId},
        include:[{ 
            model: User, 
            as:'reviews',
            attributes: ['userId','userName','profilePicture'],
            through: {
                attributes: ['review','rating'],
            },
        }],
    
    })
    return reviews;
}
module.exports = getReviewsArtwork;