const apiUrl = "https://randomuser.me/api/";
const randomUrl = "https://api.publicapis.org/random";
const contactsUrl = "https://randomuser.me/api/?page=1&results=10&seed=abc";

class ApiService {
  async getApi() {
    const res = await fetch(`${apiUrl}`);

    if (!res.ok) {
      throw new Error(`Could not fetch api, received ${res.status}`);
    }
    return await res.json();
  }

  async getRandom() {
    const res = await fetch(`${randomUrl}`);

    if (!res.ok) {
      throw new Error(`Could not fetch random, received ${res.status}`);
    }
    return await res.json();
  }

  async getContacts() {
    const res = await fetch(`${contactsUrl}`);

    if (!res.ok) {
      throw new Error(`Could not fetch contacts, received ${res.status}`);
    }
    return await res.json();
  }
}

export default new ApiService();
