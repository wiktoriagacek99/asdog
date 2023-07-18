const handler = async (event) => {
  const data = event.body;

  return {
    statusCode: 200,
    body: data,
  };
};

module.exports = { handler };
