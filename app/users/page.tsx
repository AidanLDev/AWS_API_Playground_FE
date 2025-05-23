import { getUsers } from "@/app/userActions";
import UsersCard from "./components/UsersCard";

interface IUser {
  readonly email?: string;
  readonly number?: string;
  readonly createdAt: string;
  readonly id: string;
}

export default async function Users() {
  const users = await getUsers();
  return (
    <div>
      <h1>Users</h1>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map(({ email, createdAt, id, number }: IUser) => (
          <UsersCard
            key={id}
            email={email}
            createdAt={createdAt}
            number={number}
            id={id}
          />
        ))
      )}
    </div>
  );
}
