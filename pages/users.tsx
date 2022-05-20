import { NextPage } from "next";
import { useEffect, useState } from "react";
import { getAllUsers, User } from "../lib/users";

const Users: NextPage = () => {
  const [users, setUsers]: any = useState([])

  useEffect(()=>{
    getAllUsers().then(users => setUsers(users))
  }, [])

  function printUsers(){
    return users.map((user: User)=><p>{user.fullName}</p>)
  }
  return (
    <div>
      {printUsers()}
    </div>
  );
};

export default Users;
