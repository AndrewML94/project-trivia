export default async function requisicaoToken() {
  const link = 'https://opentdb.com/api_token.php?command=request';
  const req = await fetch(link);
  const json = await req.json();

  return json;
}
