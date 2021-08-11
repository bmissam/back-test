const router = require ('express').Router()
const Photo = require('../model/Photo')


router.post('/Photos/add_Photo', async (req, res, next) => {
    console.log('req.body: ', req.body)
    try {
        const photo = new Photo({
            Title: req.body.Title,

            src: req.body.src,
           
  
        })
        const savedPhoto = await photo.save()
        res.send(savedPhoto);
    } catch (err) {
        console.log('err: ', err)
        res.status(400).send(err)
    }
    next();
})


router.get('/Photos/', async (req, res, next) => {
    try {
        const photos = await Photo.find({})
        res.send(photos)
        next()
    } catch (err) {
        return res.status(404).send(err)
    }

})


router.delete('/Photos/Photo/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        Photo.deleteOne({ _id: id })
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


  router.get('/Photo/:id', function (req, res) {
    Photo.findById(req.params.id, function (err, photo) {
        if (err) return res.status(500).send(err)
        return res.status(200).send(photo)
    });
});



module.exports = router
