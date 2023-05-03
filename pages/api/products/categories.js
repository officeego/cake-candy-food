import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Anniversary', 'Happy Birthday', 'Baby Shower', 'Buttercream', 'Christening', 'Christmas','Happy Party', 'Cupcakes','Happy Easter', 'Fathers Day', 'Mothers Day', 'Graduation', 'Retirement', 'Wedding Day', 'Valentines', 'Travel', 'Halloween', 'Breakfast'];
  res.send(categories);
});

export default handler;
