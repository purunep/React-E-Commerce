const items = [
  {
    id: 1,
    name: "john",
  },
  {
    id: 2,
    name: "puru",
  },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "hello world",
    // body: JSON.stringify(items),
  };
};
