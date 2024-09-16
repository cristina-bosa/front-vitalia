/**
 * @file Fetch
 * @description Functions to fetch data from the API
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/16
 * @version 1.0
 */

"use server";

import { baseUrl } from "@/constants";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils";

export async function fetchData(endpoint: string, data?: any) {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = response.statusText;
      return {
        status: response.status,
        error: error,
      }
    }

    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error al fetch");
  }
}

export async function fetchDataToken(endpoint: string) {
  const session = await getServerSession(authOptions);
  const token = session?.access_token;
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      return {
        status: response.status,
        error: error,
      }
    }

    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error al fetch");
  }
}

export async function fetchDataTokenPost(endpoint: string, data?: any) {
  const session = await getServerSession(authOptions);
  const token = session?.access_token;

  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      return {
        status: response.status,
        error: error,
      }
    }
    return {
        status: response.status,
        data: await response.json(),
    };
  } catch (error) {
    console.error(error);
  }
}
export async function fetchDataTokenPostWithOutBody(endpoint: string) {
  const session = await getServerSession(authOptions);
  const token = session?.access_token;

  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    const message = await response.json();
    if (!response.ok) {
      const error = await response.json();
      return {
        status: response.status,
        error: error,
      }
    }
    return {
      status: response.status,
      data: message
    };
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDataTokenDelete(endpoint: string, data: any) {
  const session = await getServerSession(authOptions);
  const token = session?.access_token;

  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      return {
        status: response.status,
        error: error,
      }
    }
    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    console.error(error);
  }
}