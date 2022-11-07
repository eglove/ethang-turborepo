export type ShopDatum = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type CartItem = ShopDatum & {
  quantity: number;
};
