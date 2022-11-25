interface AccountTypes {
  email: string;
  password: string;
}

export const signupUser = async (account: AccountTypes): Promise<any> => {
  const { email, password } = account;
  const username = email.split("@")[0];
  const res = await fetch("http://localhost:3001" + "/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, username }),
  });
  const data = await res.json();
  return data;
};

export const loginUser = async (account: AccountTypes): Promise<any> => {
  const { email, password } = account;
  const username = email.split("@")[0];
  const res = await fetch("http://localhost:3001" + "/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, username }),
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export function parseJwt(token: string) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
