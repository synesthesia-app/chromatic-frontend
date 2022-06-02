export const getImages = async (id) => {
  console.log(userObj);
  const res = await fetch(
    `https://chromatic-backend.herokuapp.com/api/v1/images/${id}`,
    {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await res.json();

  console.log('images', data);
};

export const uploadImage = async (imgPublicId, id) => {
  console.log('uploading');
  const res = await fetch(
    'https://chromatic-backend.herokuapp.com/api/v1/images',
    {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({
        imageName: imgPublicId,
        userId: id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();
  console.log({ data });
};
