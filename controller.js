const Profile = require('./model');

async function GET_profiles(req, res) {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function GET_profileid(req, res) {
  try {
    const id = req.params.id;
    const profile = await Profile.findById(id);
    
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function POST_profiles(req, res) {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function POST_profileidExperience(req, res) {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      { $push: { experience: req.body } },
      { new: true }
    );
    
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function POST_profileidSkills(req, res) {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      { $push: { skills: req.body.skill } },
      { new: true }
    );
    
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function PUT_profileid(req, res) {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function PUT_profileidInformation(req, res) {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      { information: req.body },
      { new: true }
    );
    
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function DELETE_profileid(req, res) {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    res.json({ message: 'Profile deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function DELETE_profileidExperience(req, res) {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      { $pull: { experience: { _id: req.params.experienceId } } },
      { new: true }
    );
    
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function DELETE_profileidSkills(req, res) {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      { $pull: { skills: req.params.skillId } },
      { new: true }
    );
    
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  GET_profiles,
  GET_profileid,
  POST_profiles,
  POST_profileidExperience,
  POST_profileidSkills,
  PUT_profileid,
  PUT_profileidInformation,
  DELETE_profileid,
  DELETE_profileidExperience,
  DELETE_profileidSkills
};