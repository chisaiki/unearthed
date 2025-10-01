// Import the Express framework for building web servers and APIs
import express from 'express'

// Import Node.js's path module for handling file and directory paths
import path from 'path'

// Import a utility function to convert a file URL to a file system path
import { fileURLToPath } from 'url'

// // Import the gift data array from the data file but we dont need it since we're using a db now
// import giftData from '../data/gifts.js'

import GiftsController from '../controllers/gifts.js'


// Get the absolute path of the current file (ES modules don't have __filename by default)
const __filename = fileURLToPath(import.meta.url)

// Get the directory name of the current file (ES modules don't have __dirname by default)
const __dirname = path.dirname(__filename)

const router = express.Router()

//Status 200 is an HTTP status code that means "OK." 
//It indicates that a request was successful and the server is returning the requested data.
router.get('/', GiftsController.getGifts);

router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'));
});

//This route handles GET requests to /gifts/:giftId, where :giftId is a variable 
//part of the URL (like /gifts/3). When a request matches this pattern, 
//the server responds with status 200 ("OK") and sends the gift.html file from 
//the public directory to the client.

export default router
