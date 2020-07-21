import express from 'express';
import Autoservice from '../models/autoservice.js';

const router = express.Router();

router.get('/', async (req, res) => {
  // const { coordinates } = req.body;

  const [lat, long] = [55.712471799999996, 37.591137599999996];

  function getDistanceInKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
      + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2))
      * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1);
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  const autoservices = await Autoservice.find();
  const updatedAuto = autoservices.map((autoservice) => {
    autoservice.distance = getDistanceInKm(lat, long, autoservice.coordinates[1], autoservice.coordinates[0]);
    return autoservice;
  });
  const filtered = updatedAuto.filter((autoservice) => autoservice.distance < '6').sort((a, b) => b.distance - a.distance);
  console.log(filtered);
  // try {

  // } catch (error) {
  //   return res.status(401).end();
  // }
  return res.json(services);
});

export default router;
