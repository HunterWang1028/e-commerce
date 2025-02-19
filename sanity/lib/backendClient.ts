import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../env";

export const BackendClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});
