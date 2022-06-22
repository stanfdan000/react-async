import { checkError, client } from './client';

export async function getCandy() {
  const resp = await client
    .from('candy')
    .select('*');
  return checkError(resp);
}
export async function getCats() {
  const resp = await client
    .from('cats')
    .select();
  return checkError(resp);
}
export async function getBirds() {
  const resp = await client 
    .from('birds')
    .select();
  return checkError(resp);
}
export async function getMagazines() {
  const resp = await client
    .from('magazines')
    .select();
  return checkError(resp);
}