import app from 'app'

app.get('/user', function (req, res) {
  res.send('Got a GET request at /user')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})