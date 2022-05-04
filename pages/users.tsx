
import { NextPage } from "next";
import {User} from "../types";
import {useEffect, useState} from "react";
import React from "react";
import {getAllUsers} from "../lib/users";


const Users: NextPage = () => {
  const [user,setUser] = useState<User|null>(null);

  useEffect(()=>{
    //setUser()
  },[]);

  if (user === null) return <p>No user found</p>;

  return <div className="userCafel">

  </div>;
};

export default Users;

