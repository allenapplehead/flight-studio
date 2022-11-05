import {Client, Account, ID} from 'appwrite';

const client = new Client()
    .setEndpoint('http://localhost/v1')
    .setProject('6366da325af6bd833fa4');

const account = new Account(client);

/**
 * Registration
 * 
 * @param {string} email email
 * @param {string} pw password
 * @param {string} name name
 */
export default function register(email, pw, name) {
    account.create(
        ID.unique(),
        email,
        password,
        name
    ).then(response => {
        console.log(response);
        return true;
    }, error => {
        console.log(error);
        return false;
    });
}

/**
 * Login
 * 
 * @param {*} email email
 * @param {*} pw password
 */
export default function login(email, pw) {
    account.createEmailSession(email, pw).then(response => {
        console.log(response);
        return true;
    }, error => {
        console.log(error);
        return false;
    });
}