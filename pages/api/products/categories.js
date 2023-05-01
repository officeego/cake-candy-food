import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Afghan Hound', 'Akita Dog', 'Chow Chow', 'Samoyed', 'Tibetan Mastiff', 'Rottweiler','Afghan Hound','French Bulldog', 'English Bulldog', 'Yorkie Puppy', 'German Shepherd', 'New Foundland', 'Saint Bernard', 'Biewer Terrier', 'Russian Terrier'];
  res.send(categories);
});

export default handler;
