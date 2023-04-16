const User = require('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc Get all users
// @route GET /users
// @access Private
const getAllusers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password').lean()
    if (!users) {
        return res.status(400).json({ message: 'No users found.'})
    }
    res.json(users)
})

// @desc Create new users
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {

})

// @desc Update new users
// @route PATCH /users
// @access Private
const updateUser = asyncHandler(async (req, res) => {

})

// @desc Delete new users
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {

})

module.exports = {
    getAllusers,
    createNewUser,
    updateUser,
    deleteUser
}