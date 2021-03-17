module.exports = {
  get: (req, res) => {
    res.status(200).send({ result: 'OK', status: 200 });
    return;
  }
}
