export type Image = {
  color: string;
  url: string;  
}

export type Comments = {
  name: string;
  reviews: string;
  date: string;
  title: string;
  message: string;
  likes: string;
  dislike: string;
}

export type Hat = {
  id: string;
  images: Image[];
  tags: string;
  title: string;
  details: string;
  price: string;
  available: string;
  comments: Comments[];
}

export type CategoryProduct = {
  category: string;
  hats: Hat[]  
}