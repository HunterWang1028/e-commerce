"use server";

import { BasketItem } from "@/store/store";

export type MetaData = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
};

export type GroupedBasketItem = {
  product: BasketItem["product"];
  quantity: number;
};

export const createCheckoutSession = async (
  items: GroupedBasketItem[],
  metadata: MetaData
) => {
  try {
  } catch (error) {}
};
