export const getUsers = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      console.error("res: ", res);
      throw new Error("Failed to GET users");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw new Error("Failed to fetch users");
  }
};

export const upsertUser = async (formData: FormData) => {
  const plainObject = Object.fromEntries(formData.entries());
  const res = await fetch(`${process.env.API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(plainObject),
  });

  if (!res.ok) {
    console.error("res: ", res);
    throw new Error("Failed to POST user");
  }

  return res.json();
};
