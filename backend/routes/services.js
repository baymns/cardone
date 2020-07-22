import express from 'express';
import Service from '../models/service.js';

const router = express.Router();

router.post('/', async (req, res) => {
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

  function totalRating(services) {
    return services.map((service) => {
      const rating = service.reviews.reduce((acc, review) => acc + review.rating, 0);
      service.totalRating = (rating / service.reviews.length).toFixed(1);
      return service;
    });
  }

  let services;
  try {
    services = await Service.find({ category }).populate({ path: 'reviews' });
  } catch (error) {
    return error;
  }
  const updated = services.map((service) => {
    service.distance = getDistanceInKm(latitude, longitude, service.coordinates[1], service.coordinates[0]);
    return service;
  });
  const sorted = updated.sort((a, b) => a.distance - b.distance);
  const ratingAndDistance = totalRating(sorted);
  const result = ratingAndDistance.length > 10 ? ratingAndDistance.slice(0, 10) : sorted(0, ratingAndDistance.length - 1);

  return res.json(result);
});

router.post('/details/:id', async (req, res) => {
  const { id } = req.params;
  let service;
  try {
    service = await Service.findOne({ id });
  } catch (error) {
    return error;
  }
  if (!service) {
    return res.status(406).end();
  }
  return res.json(service);
});

export default router;
