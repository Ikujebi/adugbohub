
import { siteConfig } from "./site";

type ApiRequestOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  token?: string;
  headers?: HeadersInit;
};

export class ApiError extends Error {
  status: number;
  details: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

export async function apiRequest<T>(
  endpoint: string,
  options: ApiRequestOptions = {},
): Promise<T> {
  const {
    method = "GET",
    body,
    token,
    headers,
  } = options;

  const normalizedEndpoint = endpoint.startsWith("/")
    ? endpoint
    : `/${endpoint}`;

  const requestHeaders = new Headers(headers);

  requestHeaders.set("Accept", "application/json");

  if (body !== undefined) {
    requestHeaders.set("Content-Type", "application/json");
  }

  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  let response: Response;

  try {
    response = await fetch(
      `${siteConfig.apiBaseUrl}${normalizedEndpoint}`,
      {
        method,
        headers: requestHeaders,
        body: body === undefined ? undefined : JSON.stringify(body),
        cache: "no-store",
      },
    );
  } catch {
    throw new ApiError(
      "Unable to connect to AdugboHub. Please check your internet connection.",
      0,
    );
  }

  const contentType = response.headers.get("content-type");
  const isJson = contentType?.includes("application/json");

  let result: unknown = null;

  if (response.status !== 204) {
    try {
      result = isJson
        ? await response.json()
        : await response.text();
    } catch {
      result = null;
    }
  }

 
if (!response.ok) {
  let message = "Something went wrong. Please try again.";

  if (typeof result === "string" && result.trim()) {
    message = result;
  } else if (
    result !== null &&
    typeof result === "object"
  ) {
    const errorData = result as {
      message?: string | string[];
      error?: string;
    };

    if (Array.isArray(errorData.message)) {
      message = errorData.message.join(", ");
    } else if (typeof errorData.message === "string") {
      message = errorData.message;
    } else if (typeof errorData.error === "string") {
      message = errorData.error;
    }
  }

  throw new ApiError(message, response.status, result);
}


  return result as T;
}
