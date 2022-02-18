import fetchPlanets from '../helpers';

export default async function getData() {
  const { results } = await fetchPlanets();
  return results;
}
