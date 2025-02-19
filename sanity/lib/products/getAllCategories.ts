import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllCategories = async () => {
  const ALL_CATEGORIES_QUERY = defineQuery(`
        *[
            _type == "category" 
        ] | order(name asc)
        `);

  try {
    // use sanityfetch to send the query
    const categorites = await sanityFetch({
      query: ALL_CATEGORIES_QUERY,
    });
    return categorites.data || [];
  } catch (error) {
    console.error("Error fetching all categories", error);
    return [];
  }
};
