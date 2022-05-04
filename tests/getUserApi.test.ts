import {getAllUsers} from "../lib/users";
import {User} from "../types";
import {string} from "zod";



let users : User[] =[];

beforeAll(async()=>{
    users = await getAllUsers();
})

test('api should not return falsy',async()=>{
    expect(users).not.toBeFalsy();
})

test('type of single user should be an object',async ()=>{
    expect(typeof users[0]).toEqual('object');
})

test('random taken field of user object should has proper types',()=>{

    const index = Math.floor(Math.random()*users.length);

    const user = users[index];

    expect(typeof user.username).toEqual('string');
    expect(typeof user.avatar).toEqual('string');
    expect(typeof user.email).toEqual('string');
    expect(typeof user.age).toEqual('number');
    expect(typeof user.images).toEqual('object');
    expect(typeof user.gender).toEqual('string');
    expect(typeof user.phoneNumber).toEqual('string');
    expect(typeof user.address).toEqual('object');
    expect(typeof user.address.city).toEqual('string');
    expect(typeof user.address.zip).toEqual('string');
    expect(typeof user.address.street).toEqual('string');
})