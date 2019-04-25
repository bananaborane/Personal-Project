const bcrypt = require('bcryptjs');

module.exports = {
    displayBikes: async (req, res)=>{
        let db = req.app.get('db');
        let arrayOfBikes = await db.display_bikes()
            .catch(err => console.log(`Something happened while retrieving all the bikes: ${err}`))
        console.log(arrayOfBikes)
        return res.status(200).send({ message: 'List of all bikes have been sent', payload: arrayOfBikes, loggedIn: true })
    },
    displayTheBike: async (req, res)=>{
        let { id } = req.params;
        console.log('line 13', req.params);
        let db = req.app.get('db');
        db.retrieve_bike_by_id([id])
        .then(response =>{
          return res.status(200).send({ 
            message:'The Bike by id has been sent', 
            payload: response })
        })
        .catch(err=>console.log(`Something happened while retrieving THE bike: ${err}`))
    
    },
    addBike: (req, res)=>{
        let { id: user_id, username } = req.session.user;
        let { title, description, make, model, bike_size, bike_type, wheel_size, image_url } = req.body;
        let db = req.app.get('db');
        db.add_a_bike({
            user_id,
            title: title || `${username}'s bike`,
            description: description || `This is my rad and rowdy bike, it is the best one out there.`,
            make: make || "Some company's",
            model: model || 'Shredster',
            bike_size,
            bike_type: bike_type || 'two wheeled',
            wheel_size: wheel_size,
            image_url: image_url || 'https://cdn.shopify.com/s/files/1/0011/9069/0863/products/2019_YetiCycles_SB150_TS_Turq_X01_XMC_1e1fcdb9-b749-41ec-9286-78b13e6378e4.jpg?v=1534892461'
        })
        .then((response)=>{
            return res.status(200).send({ message: 'A bike has been added, thank you for contributing to the marketplace', loggedIn: true, payload: response })
        })
        .catch(err=>console.log(`Something happened while adding a bike: ${err}`))
    },
    removeBike: (req, res)=>{
        let db = req.app.get('db');
        let { id: user_id } = req.session.user;
        let { id: bike_id } = req.params;
        db.remove_a_bike([user_id, bike_id])
            .then((response)=>{
                return res.status(200).send({ message: 'A bike has been removed, what a bummer!', loggedIn: true, payload: response })
            })
            .catch(err=>console.log(`Something happened while removing a bike: ${err}`))
    },
    inquireAboutBike: (req, res)=>{
        
    }
}


