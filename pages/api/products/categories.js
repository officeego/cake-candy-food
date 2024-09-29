import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Anniversary', 'Birthdays', 'Baby Shower', 'Buttercream', 'Christening', 'Christmas','Happy Party', 'Cupcakes','Easter', 'Fathers Day', 'Mothers Day', 'Graduations', 'Retirement', 'Weddings', 'Valentines', 'Travel', 'Halloween', 'Breakfast'];
  res.send(categories);
});

export default handler;
