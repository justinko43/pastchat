const pool = require('./postgres.js');

const controller = {
  getComments: async function(req, res, next) {
    pool.connect(async (error, client, done) => {
      const videoId = req.params.videoId;
      const results = await client.query(`SELECT (c.comment, c.timestamp, u.name, u.avatar) FROM comments c INNER JOIN users u ON (c.userid = u.userid) WHERE c.video_id = ('${videoId}');`);
      done();
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
      next();
    });
  },
  getUser: async function(id, cb) {
    pool.connect(async (error, client, done) => {
      const result = await client.query(`SELECT (u.userid, u.name, u.avatar) FROM users u WHERE u.userid = ('${id}');`);
      done();
      if (result.rows.length !== 0) {
        const arr = result.rows[0].row.split(',');
        arr[0] = arr[0].split('').filter((c, i) => i !== 0).join('');
        arr[2] = arr[2].split('').filter((c, i, a) => i !== a.length - 1).join('');
        const user = {};
        user.id = arr[0];
        user.name = arr[1];
        user.avatar = arr[2];
        cb(user);
      } else {
        cb(void 0);
      }
    });
  },
  postUser: async function (id, name, avatar, cb) {
    pool.connect(async (error, client, done) => {
      await client.query(`INSERT INTO users (userid, name, avatar) VALUES ('${id}', '${name}', '${avatar}');`);
      const result = await client.query(`SELECT (u.userid, u.name, u.avatar) FROM users u WHERE u.userid = ('${id}');`);
      done();
      if (result.rows.length !== 0) {
        const arr = result.rows[0].row.split(',');
        arr[0] = arr[0].split('').filter((c, i) => i !== 0).join('');
        arr[2] = arr[2].split('').filter((c, i, a) => i !== a.length - 1).join('');
        const user = {};
        user.id = arr[0];
        user.name = arr[1];
        user.avatar = arr[2];
        cb(user);
      } else {
        cb(void 0);
      }
    });
  },
  postComment: async function (req, res, next) {
    if (!req.user) {
      res.send('You need to be logged in to do that');
    } else {
      console.log(req.body);
      const userId = req.user.id;
      const comment = req.body.comment;
      const videoId = req.body.videoId;
      const timestamp = req.body.timestamp;
      pool.connect(async (error, client, done) => {
        await client.query(`INSERT INTO comments (userid, comment, video_id, timestamp) VALUES ('${userId}', '${comment}', '${videoId}', '${timestamp}');`);
        done();
        next();
      });
    }
  }
}

module.exports = controller;
