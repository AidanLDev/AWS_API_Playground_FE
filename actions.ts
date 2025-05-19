"use server";

export async function getRoot(_formData: FormData) {
  console.log("formData is: ", _formData);
  const res = await fetch(`${process.env.API_URL}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    console.error("res: ", res);
    throw new Error("Failed to GET root API /");
  }

  return res.json();
}
