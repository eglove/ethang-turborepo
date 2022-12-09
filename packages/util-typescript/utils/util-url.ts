type GetYoutubeIdProperties = {
  options?: {
    fuzzy?: boolean;
  };
  url: string;
};

export const getYoutubeId = ({
  url,
}: GetYoutubeIdProperties): string | undefined => {
  const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = regex.exec(url);
  return match && match[2].length === 11 ? match[2] : undefined;
};

export const isUrlSecure = (url: string): boolean => {
  return url.includes('https://');
};

export const urlSecureVersion = (url: string): string => {
  return isUrlSecure(url) ? url : url.replace('http://', 'https://');
};
