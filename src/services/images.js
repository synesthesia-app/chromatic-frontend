export const getImages = async (id) => {
  console.log('in getImages', { id });
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
  console.log(data);
  return data;
};

export const uploadImage = async (publicUrl, publicId, id) => {
  console.log('in upload', publicUrl, publicId, id);
  const res = await fetch(
    'https://chromatic-backend.herokuapp.com/api/v1/images',
    {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({
        imageName: publicUrl,
        publicId,
        userId: id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await res.json();
  console.log(data);
};
