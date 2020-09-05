export default function generateRandomNumber(limit) {
  let number = Math.ceil(Math.random()*limit);
  return number;
};
