export const login = async (email, password) => {
  const response = await fetch(`/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, password}),
  });
  console.log(response);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  localStorage.setItem('token', data.token);
  return data;
}

export const register = async (name, email, password, phone) => {
  const response = await fetch(`/api/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name, email, password, phone}),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  localStorage.setItem('token', data.token);
  return data;
}

export const getProfile = async (token) => {
  const response = await fetch(`/api/profile`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    },
  });
  const data = await response.json();
  console.log(data);
  if (!response.ok) throw new Error(data.message);
  return data;
}
