"use server";

export async function postNotification(formData: FormData) {
  const type = formData.get("type") as "sms" | "email"; 
  const userId = formData.get("userId") as string;
  const message = formData.get("message") as string;
  const email = formData.get("email") as string | undefined;
  const number = formData.get("number") as string | undefined;

  let responseBody: string;
  if (type === "email") {
    responseBody = JSON.stringify({
      userId,
      email,
      type,
      message,
    });
  } else if (type === "sms") {
    responseBody = JSON.stringify({
      userId,
      number,
      type,
      message,
    });
  } else {
    throw new Error("Invalid notification type");
  }

  try {
    const res = await fetch(`${process.env.API_URL}/notifications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: responseBody,
    });
    const jsonResponse = await res.json();
    console.log("Response from notification service: ", jsonResponse);
    return jsonResponse;
  } catch (err) {
    console.error("Error posting notification:", err);
    throw new Error("Failed to post notification");
  }
}
