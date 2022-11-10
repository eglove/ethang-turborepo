export type ShopData = ShopCategory[];

export type CategoryMap = Record<string, ShopDatum[]>;

export type ShopCategory = {
  items: ShopDatum[];
  title: string;
};

export type ShopDatum = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type CartItem = ShopDatum & {
  quantity: number;
};
