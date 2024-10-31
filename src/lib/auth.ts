import axios from "axios";
import Cookies from "js-cookie";

// Define response type for signIn
interface SignInResponse {
  token: string;
}

// Define user profile type
interface UserProfile {
  name: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Function to sign in and store the JWT in a cookie
export const signIn = async (
  username: string,
  password: string,
): Promise<SignInResponse> => {
  try {
    const response = await axios.post<SignInResponse>(`${API_URL}/auth/login`, {
      username,
      password,
    });
    const { token } = response.data;

    Cookies.set("token", token, { expires: 7, secure: true });

    return { token };
  } catch (error) {
    throw new Error("Invalid email or password");
  }
};

// Function to retrieve profile using the stored JWT token
export const getProfile = async (): Promise<UserProfile> => {
  try {
    const token = Cookies.get("token");
    if (!token) throw new Error("No token found");

    const res = await axios.get<UserProfile>(`${API_URL}/auth/profile`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    if (res.data) {
      return { name: "ADMIN" };
    }

    throw new Error("Invalid profile data");
  } catch (error) {
    throw new Error("Unable to fetch profile");
  }
};

// Function to log out (clears the JWT)
export const logout = (): void => {
  Cookies.remove("token");
};
