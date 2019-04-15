const bcrypt = require('bcryptjs');

module.exports = {
    displayBikes: async (req, res)=>{
        let db = req.app.get('db');
        let arrayOfBikes = await db.display_bikes()
            .catch(err => console.log(`Something happened while retrieving all the bikes: ${err}`))
        return res.status(200).send({ message: 'List of all bikes have been sent', payload: arrayOfBikes, loggedIn: true })
    },
    addBike: (req, res)=>{
        let { id: user_id, username } = req.session.user;
        let { title, description, make, model, bikeSize: bike_size, bikeType: bike_type, wheelSize: wheel_size } = req.body;
            // REMEMBER that we will have CAMEL CASE IN FRONT END but UNDERSCORES IN BACK END
        let db = req.app.get('db');
        db.add_a_bike({
            user_id,
            title: title || `${username}'s bike`,
            description: description || `This is my rad and rowdy bike, it is the best one out there.`,
            make: make || "Some company's",
            model: make || 'Shredster',
            bike_size,
            bike_type: bike_type || 'two wheeled',
            wheel_size: wheel_size
        })
        .then((response)=>{
            return res.status(200).send({ message: 'A bike has been added, thank you for contributing to the marketplace', loggedIn: true, payload: response })
        })
        .catch(err=>console.log(`Something happened while adding a bike: ${err}`))
    },
    removeBike: (req, res)=>{
        let db = req.app.get('db');
        let { id: user_id } = req.session.user;
        let { id: bike_id } = req.body;
        db.remove_a_bike([user_id, bike_id])
            .then((response)=>{
                return res.status(200).send({ message: 'A bike has been removed, what a bummer!', loggedIn: true, payload: response })
            })
            .catch(err=>console.log(`Something happened while removing a bike: ${err}`))
    },
    inquireAboutBike: (req, res)=>{}
}


