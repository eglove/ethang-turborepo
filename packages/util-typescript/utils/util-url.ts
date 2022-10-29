type GetYoutubeIdProperties = {
  options?: {
    fuzzy?: boolean;
  };
  url: string;
};

export const getYoutubeId = ({
  url,
  options,
}: GetYoutubeIdProperties): string | undefined => {
  if (/youtu\.?be/.test(url)) {
    const knownPatterns = [
      /youtu\.be\/([^#&?]{11})/, // youtu.be/<id>
      /\?v=([^#&?]{11})/, // ?v=<id>
      /&v=([^#&?]{11})/, // &v=<id>
      /embed\/([^#&?]{11})/, // embed/<id>
      /\/v\/([^#&?]{11})/, // /v/<id>
    ];

    for (const knownPattern of knownPatterns) {
      if (knownPattern.test(url)) {
        return knownPattern.exec(url)?.[1];
      }
    }

    // Search for 11 character key
    if (options?.fuzzy === true) {
      const tokens = url.split(/[\s#&./=?]/g);
      for (const token of tokens) {
        if (/^[^#&?]{11}$/.test(token)) {
          return token;
        }
      }
    }
  }

  return undefined;
};

export const isUrlSecure = (url: string): boolean => {
  return url.includes('https://');
};

export const urlSecureVersion = (url: string): string => {
  return isUrlSecure(url) ? url : url.replace('http://', 'https://');
};
