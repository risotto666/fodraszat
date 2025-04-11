import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bbubvdxcwiqpoxlburpt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJidWJ2ZHhjd2lxcG94bGJ1cnB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyMDcxODgsImV4cCI6MjA1OTc4MzE4OH0.SE29obrAClq1KFg-ZmQEAOHEH561LMI03jm5VF96yt0";
export const supabase = createClient(supabaseUrl, supabaseKey);
export const getReservations = async () => {
  const { data, error } = await supabase
    .from("foglalt_idopontok") // A tábla neve
    .select("*")
    .order("datum", { ascending: true })
    .order("ido", { ascending: true }); // Minden adat lekérése

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
