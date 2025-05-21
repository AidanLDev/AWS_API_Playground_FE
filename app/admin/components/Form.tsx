import { upsertUser } from "@/userActions";
import Button from "@/components/inputs/Button";

export default function Form() {
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
      <Button type="submit" label="Add user!" />
    </form>
  );
}
