export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string | string[] }>;

export type PropertyCardProps = {
  image: string;
  id: string;
  name: string;
  tagline: string;
  country: string;
  price: number;
};
