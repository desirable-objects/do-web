var application_root = __dirname,
    express = require("express"),
    path = require("path"),
    postmark = require("postmark")('5aa82284-3686-4881-9b0d-43af2df2e471');

var app = express();

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(application_root, "public")));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/api', function (req, res) {
  res.json({status: 'ok', version: '1.0'});
});

app.post('/email/send', function (req, res) {

    var msg = req.body.job;

    postmark.send({
      "To": msg.email,
      "From": 'aj'+'@d'+'esirableobjects.co.uk',
      "ReplyTo": msg.email,
      "Subject": 'Email from '+msg.email,
      "TextBody": msg.message
    }, function(response) {
      if (response) {
        console.log(response.message);
        res.status(400).json(response.message);
      } else {
        res.status(200).json({ok: 'true'});
      }
    });

});

app.listen(4242);
