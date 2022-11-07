import type { Dispatch, SetStateAction } from 'react';
import { createContext, useMemo, useState } from 'react';

import { shopData } from '../data/shop-data';
import type { ShopDatum } from '../utils/types';

type ProductContextType = {
  products: ShopDatum[];
  setProducts: Dispatch<SetStateAction<ShopDatum[]>>;
};

type ProductProviderProperties = {
  children: JSX.Element | JSX.Element[];
};

// @ts-expect-error set in Provider
export const ProductContext = createContext<ProductContextType>({
  products: [],
});

export function ProductProvider({
  children,
}: ProductProviderProperties): JSX.Element {
  const [products, setProducts] = useState<ShopDatum[]>(shopData);

  const value = useMemo(() => {
    return { products, setProducts };
  }, [products]);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
