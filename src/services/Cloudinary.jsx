import { Cloudinary } from '@cloudinary/url-gen';

export const CloudInstance = () => {
  return new Cloudinary({
    cloud: {
      cloudName: `${process.env.CLOUD_NAME}`,
    },
  });
};
