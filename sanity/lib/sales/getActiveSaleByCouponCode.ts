import { defineQuery } from "next-sanity";
import { CouponCode } from "./CouponCode";
import { sanityFetch } from "../live";

const getActiveSaleByCouponCode = async (couponCode: CouponCode) => {
  const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
        *[
            _type == "sale" && isActive == true && couponCode == $couponCode
        ] | order(valueFrom desc)[0]
        `);

  try {
    const activeSale = await sanityFetch({
      query: ACTIVE_SALE_BY_COUPON_QUERY,
      params: {
        couponCode,
      }, // pass the coupon code as a query param
    });
    return activeSale ? activeSale.data : null;
  } catch (error) {
    console.error("Error fetching active sale by coupon code", error);
    return null;
  }
};

export default getActiveSaleByCouponCode;
