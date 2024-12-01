export const dateConverter = (publishedAt: string) => {
  const options = {
    month: "long" as
      | "long"
      | "numeric"
      | "2-digit"
      | "short"
      | "narrow"
      | undefined,
  };

  return (
    new Date(publishedAt!).toLocaleDateString("en-US", options) +
    " " +
    new Date(publishedAt!).getDate() +
    ", " +
    new Date(publishedAt!).getFullYear()
  );
};
