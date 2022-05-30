export default async function colorAPI(hex) {
  const hexNums = hex.substring(1);

  const response = await fetch(`https://www.thecolorapi.com/id?hex=${hexNums}`);

  const data = await response.json();

  return data;
}
