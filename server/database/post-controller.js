const db = require('./postgres.js');

const controller = {
  getComments: async function(req, res, next) {
    db.connect(async () => {
      const videoId = req.params.videoId;
      const results = await db.query(`SELECT (c.comment, c.timestamp, u.name, u.avatar) FROM comments c INNER JOIN users u ON (c.userid = u.userid) WHERE c.video_id = ('${videoId}');`);
      const finalArray = [];
      results.rows.forEach(row => {
        const commentObj = {};
        const arr = row.row.split(',');
        arr[0] = arr[0].split('').filter((c, i, a) => i > 1 && i < (a.length - 1)).join('');
        arr[3] = arr[3].split('').filter((c, i, a) => i < (a.length - 1)).join('');
        commentObj.message = arr[0];
        commentObj.timestamp = arr[1];
        commentObj.name = arr[2];
        commentObj.avatar = arr[3];
        finalArray.push(commentObj);
      });
      res.locals.comments = finalArray;
      db.end();
      next();
    });
  }
}

module.exports = controller;