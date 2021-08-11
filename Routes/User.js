const router = require('express').Router()
const User = require('../model/User')




router.post('/Users/add_User/', async (req, res, next) => {

    try {
        const user = new User({
            Name: req.body.Name,

            Surname: req.body.Surname,
            BirthPlace: req.body.BirthPlace,

            BirthYear: req.body.BirthYear,
         
        })
        const savedUser = await user.save()
        res.send(savedUser);
    } catch (err) {
        console.log('err: ', err)
        res.status(400).send(err)
    }
    next();
})


router.get('/Users/', async (req, res, next) => {
    try {
        const users = await User.find({})
        res.send(users)
        next()
    } catch (err) {
        return res.status(404).send(err)
    }

})

router.put('/Users/Edit_User/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});


router.delete('/Users/User/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        User.deleteOne({ _id: id })
            .exec()
            .then(result => {
                res.status(200).json(result)
            })
    }catch (err){
        console.log(err);
        res.status(500).json({
            error: err
        });
    };
  });


module.exports = router