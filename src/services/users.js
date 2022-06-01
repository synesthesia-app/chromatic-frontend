export const getCurrentUser = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/github/me`, {
      credentials: 'include',
      mode: 'cors',
    });

    console.log(`|| res >`, res);

    return res.json();
  } catch (error) {
    return null;
  }
};

export const signOut = async () => {
  const res = await fetch(`${process.env.API_URL}/api/v1/github`, {
    method: 'DELETE',
    credentials: 'include',
    mode: 'cors',
  });

  return res.ok;
};
