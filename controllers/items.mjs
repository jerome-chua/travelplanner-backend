export default function initItemsController(db) {
  const addItem = async (req, res) => {
    const {
      type, tripId, mainText, secondaryText,
    } = req.body;

    try {
      const item = await db.Item.create({
        name: mainText,
        tripId,
        type,
        address: secondaryText,
      });

      res.send(item);
    } catch (err) {
      console.log(err);
    }
  };

  const getItems = async (req, res) => {
    const { tripId } = req.params;
    try {
      const items = await db.Item.findAll({
        where: {
          tripId: Number(tripId),
        },
      });
      console.log('items!!! ---', items);

      res.send(items);
    } catch (err) {
      console.log(err);
    }
  };
  return {
    addItem, getItems,
  };
}
