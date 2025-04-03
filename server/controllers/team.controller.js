const Team = require('../models/team.model');
const { uploadImage, deleteImageFromCloudinary } = require('../Utils/Cloudnary');
const fs = require('fs').promises;

exports.createTeam = async (req, res) => {
    try {
        const { name, position } = req.body;
        if (!name || !position) {
            return res.status(400).json({
                success: false,
                message: 'Name and position are required'
            });
        }
        const team = await Team.create({ name, position });
        if (req.file) {
            const imgUrl = await uploadImage(req.file.path)
            team.image.url = imgUrl.image;
            team.image.public_id = imgUrl.public_id;
            try {
                fs.unlink(req.file.path)
            } catch (error) {
                console.log('Error in deleting file form local storage')
            }
        } else {
            return res.status(400).json({
                success: false,
                message: 'Please upload an image',
            })
        }
        await team.save();
        res.status(201).json({
            success: true,
            message: 'Team created successfully',
            data: team
        });
    } catch (error) {
        console.log("Internal server error", error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        if (teams.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Teams not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Teams retrieved successfully',
            data: teams
        });
    } catch (error) {
        console.log("Internal server error", error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

exports.getSingleTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const team = await Team.findById(id);
        if (!team) {
            return res.status(404).json({
                success: false,
                message: 'Team not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Team retrieved successfully',
            data: team
        });
    } catch (error) {
        console.log("Internal server error", error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

exports.updateTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, position } = req.body;
        const team = await Team.findById(id);
        if (!team) {
            return res.status(404).json({
                success: false,
                message: 'Team not found'
            });
        }
        team.name = name;
        team.position = position;
        if (req.file) {
            if (hero.image.public_id) {
                await deleteImageFromCloudinary(hero.image.public_id)
            }
            const { image, public_id } = await uploadImage(req.file.path);
            team.image.url = image;
            team.image.public_id = public_id;
            try {
                fs.unlink(req.file.path)
            } catch (error) {
                console.log('Error in deleting file form local storage')
            }
        }
    } catch (error) {
        console.log("Internal server error", error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

exports.deleteTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const team = await Team.findById(id);
        if (!team) {
            return res.status(404).json({
                success: false,
                message: 'Team not found'
            });
        }
        if (team.image.public_id) {
            await deleteImageFromCloudinary(team.image.public_id)
        }
        await Team.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'Team deleted successfully'
        });
    } catch (error) {
        console.log("Internal server error", error)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}