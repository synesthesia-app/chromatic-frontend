export const getPalettesByUserId = async (id) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/palettes/user/${id}`, {
    credentials: 'include',
  });
  return res.json();
};

export async function createPalette(palette) {
  const res = await fetch(`${process.env.API_URL}/api/v1/palettes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(palette),
  });

  return res.json();
}

export async function deletePaletteById(id) {
  await fetch(`${process.env.API_URL}/api/v1/palettes/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
  });
}
