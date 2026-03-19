export interface ApiRequestOptions {
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  token?: string;
  body?: unknown;
}

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

async function apiRequest<T>(path: string, options: ApiRequestOptions = {}) {
  const { method = "GET", token, body } = options;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data as T;
}

export function apiGet<T>(path: string, token?: string) {
  return apiRequest<T>(path, { method: "GET", token });
}

export function apiPost<T>(path: string, body: unknown, token?: string) {
  return apiRequest<T>(path, { method: "POST", body, token });
}

export function apiPatch<T>(path: string, body: unknown, token?: string) {
  return apiRequest<T>(path, { method: "PATCH", body, token });
}

export { API_BASE_URL };
