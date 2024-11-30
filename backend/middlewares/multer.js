import multer from 'multer';

// Use memory storage to hold the file in memory (without saving it on disk)
const storage = multer.memoryStorage();

// Set up the multer middleware to handle a single file upload
export const singleUpload = multer({ storage }).single('file');
