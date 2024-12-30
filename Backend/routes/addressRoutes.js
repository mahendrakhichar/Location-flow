import express from 'express';
import { saveAddress, getAddresses, updateAddress, deleteAddress } from '../controllers/addressController.js';

const router = express.Router();

router.post('/save', saveAddress);
router.get('/list', getAddresses);
router.put('/update/:id', updateAddress);
router.delete('/delete/:id', deleteAddress);

export default router;