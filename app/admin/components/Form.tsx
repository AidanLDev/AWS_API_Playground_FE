import { upsertUser } from "@/app/userActions";

export default async function Form() {
  return (
    <form action={upsertUser} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <label htmlFor="email-input">Email: </label>
        <input name="email" type="email" id="email-input" />
      </div>
      <div className="flex gap-2">
        <label htmlFor="number-input">phone: </label>
        <input id="number-input" name="number" type="number" />
      </div>
      <button type="submit" className="cursor-pointer">
        Add User!
      </button>
    </form>
  );
}
