const database = require('../database');

module.exports = (req, res) => {
  const { title, youtube_url, id_album } = req.body;

  database
    .query('INSERT INTO track(title, youtube_url, id_album) VALUES (?, ?, ?)', [
      title,
      youtube_url,
      id_album,
    ])
    .then(([result]) => {
      res.location(`/api/tracks/${result.insertId}`).status(201);
    })
    .catch((err) => {
      res.status(500).send('Error saving the track');
    });
};
