const database = require('../database');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query('select * from track where id_album = ?', [id])
    .then(([tracks]) => {
      if (tracks[0] != null) {
        res.send(tracks);
      } else {
        res.status(404).send('Not Found');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving data from database');
    });
};
