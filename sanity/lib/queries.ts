import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug, author->{_id, name, image}, mainImage, publishedAt, categories[]->{_id, title, slug}, body[0]
}`);

export const AUTHOR_QUERY = defineQuery(`*[_type == "author"]`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id, title, slug, body, author, mainImage, publishedAt
}`);

export const ALL_POSTS_QUERY = defineQuery(`*[_type == "post"]{
  _id, title, slug, author->{_id, name, image}, mainImage, publishedAt, categories[]->{_id, title, slug}, body[0]
}`);

export const CATEGORIES_QUERY = defineQuery(`*[_type == "category"]`);
