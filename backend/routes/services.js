import express from 'express';
import Autoservice from '../models/autoservice.js';
import Autoparts from '../models/autoparts.js';
import Tireservice from '../models/tireservice.js';
import Carwash from '../models/carwash.js';

const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body);
  const { latitude, longitude, category } = req.body;
  // const [lat, long] = [55.712471799999996, 37.591137599999996];

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
  const categoryList = {
    Autoservice,
    Autoparts,
    Tireservice,
    Carwash,
  };
  let services;
  try {
    services = await categoryList[category].find();
  } catch (error) {
    console.log(error);
  }
  const updated = services.map((service) => {
    service.distance = getDistanceInKm(latitude, longitude, service.coordinates[1], service.coordinates[0]);
    return service;
  });
  const sorted = updated.sort((a, b) => a.distance - b.distance);
  const result = sorted.length > 10 ? sorted.slice(0, 10) : sorted(0, sorted.length - 1);
  console.log(result);

  return res.json(result);
});

router.post('/details/:id', async (req, res) => {
  const { id } = req.params;
  const { category } = req.body;
  const categoryList = {
    Autoservice,
    Autoparts,
    Tireservice,
    Carwash,
  };
  let service;
  try {
    service = await categoryList[category].findOne({ id });
  } catch (error) {
    console.log('Details error:', error);
  }
  if (!service) {
    return res.status(406).end();
  }
  return res.json(service);
});

export default router;
