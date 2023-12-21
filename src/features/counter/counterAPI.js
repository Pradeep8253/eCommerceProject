export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    const reponse = await fetch("http://localhost:8080");
    const data = await reponse.json();
    resolve({ data });
  });
}
