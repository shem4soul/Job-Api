const express = require('express')

const router = express.Router()

// const {register } = require('../controllers/auth')


const {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}     = require('../controllers/jobs')
 

router.post('/', createJob)
router.get('/', getAllJobs)
router.get('/:id',getJob)
router.put('/:id',updateJob)
router.delete('/:id',deleteJob)


module.exports = router