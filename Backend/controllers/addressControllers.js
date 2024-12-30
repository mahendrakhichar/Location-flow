export const saveAddress = async (req, res) => {
    try {
      const newAddress = new Address(req.body);
      await newAddress.save();
      res.status(201).json({ message: 'Address saved successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save address' });
    }
  };
  
  export const getAddresses = async (req, res) => {
    try {
      const addresses = await Address.find();
      res.status(200).json(addresses);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch addresses' });
    }
  };
  
  export const updateAddress = async (req, res) => {
    try {
      const updatedAddress = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedAddress);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update address' });
    }
  };
  
  export const deleteAddress = async (req, res) => {
    try {
      await Address.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Address deleted successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete address' });
    }
  };