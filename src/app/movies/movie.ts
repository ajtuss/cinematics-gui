
export interface Movie {
  id: string;
  name: string;
  description: string;
  image: Image;
}

export interface Image {
  url: string;
  filename: string;
}
