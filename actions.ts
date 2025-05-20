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

export const upsertUser = async (formData: FormData) => {
  console.log("me data: ", formData);
  const res = await fetch(`${process.env.API_URL}users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: formData,
  });

  console.log("res: ", res);

  if (!res.ok) {
    console.error("res: ", res);
    throw new Error("Failed to POST user");
  }

  return res.json();
};
