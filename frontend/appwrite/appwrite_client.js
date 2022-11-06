import { Client, Account, ID } from "appwrite";

/**
 * Registration
 *
 * @param {string} email email
 * @param {string} pw password
 * @param {string} name name
 */
export function register(email, pw, name) {
  const client = new Client()
    .setEndpoint("http://localhost/v1")
    .setProject("636712c874fb329f2dda");

  const account = new Account(client);

  account.create(ID.unique(), email, pw, name).then(
    (response) => {
      console.log(response);
      return response;
    },
    (error) => {
      console.log(error);
      return null;
    }
  );
}

/**
 * Login
 *
 * @param {*} email email
 * @param {*} pw password
 */
export function login(email, pw) {
  const client = new Client()
    .setEndpoint("http://localhost/v1")
    .setProject("636712c874fb329f2dda");

  const account = new Account(client);

  account.createEmailSession(email, pw).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
}
