import { createClient } from "@supabase/supabase-js";

const bucket = "temp-home-away";
const url = process.env.SUPABASE_URL ?? "";
const key = process.env.SUPABASE_PUBLIC_KEY ?? "";

const supabase = createClient(url, key);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, {
      cacheControl: "3600",
    });

  if (!data) throw new Error(error?.message ?? "Error uploading image");

  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
