const {Router}=require('express');

const {renewToken}= require('../controllers/token');
const router=Router();

router.get('/renew',renewToken);

module.exports = router;