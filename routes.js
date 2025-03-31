const express = require('express');
const router = express.Router();
const profileController = require('./controller');

// Profile routes
router.get('/', profileController.GET_profiles);
router.get('/:id', profileController.GET_profileid);
router.post('/', profileController.POST_profiles);
router.post('/:id/experience', profileController.POST_profileidExperience);
router.post('/:id/skills', profileController.POST_profileidSkills);
router.put('/:id', profileController.PUT_profileid);
router.put('/:id/information', profileController.PUT_profileidInformation);
router.delete('/:id', profileController.DELETE_profileid);
router.delete('/:id/experience/:experienceId', profileController.DELETE_profileidExperience);
router.delete('/:id/skills/:skillId', profileController.DELETE_profileidSkills);

module.exports = router;