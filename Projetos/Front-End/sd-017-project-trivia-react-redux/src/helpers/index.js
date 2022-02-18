export async function getQuestions(token) {
  const { results } = await (await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)).json();
  return results;
}

export async function getToken() {
  const promise = await fetch('https://opentdb.com/api_token.php?command=request');
  const { token } = await promise.json();
  return token;
}

export function idGenerator() {
  const maxID = 9999999;
  return (Math.trunc(Math.random() * maxID));
}
