export default function initTripsController(db) {
  const getTrips = async (req, res) => {
    try {
      const trips = await db.Trip.findAll({
        include: {
          model: db.Review,
        },
      });

      res.send(trips);
    } catch (err) {
      console.log(err);
    }
  };

  const newTrip = async (req, res) => {
    try {
      const trip = await db.Trip.create({
        userId: 1,
      });
      const tripId = trip.id;
      res.send({ tripId });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getTrips, newTrip,
  };
}
