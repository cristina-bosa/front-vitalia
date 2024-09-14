/**
 * @file Fetch
 * @description Functions to fetch data from the API
 * @author Cristina Bosa
 * @created 2024/09/03
 * @updated 2024/09/03
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
      throw new Error(error);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Error al fetch");
  }
}

export async function fetchDataToken(endpoint: string, data?: any) {
  const session = await getServerSession(authOptions);
  const token = session?.access_token;
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Error al fetch");
  }
}

export async function fetchDataTokenPost(endpoint: string, data: any) {
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
    const responseJson = await response.json();
    if (!response.ok) {
      const error = responseJson
      console.log(error);
      return {
        status: error.status,
        error: error,
      }
    }
    return {
        status: response.status,
        data: responseJson,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error al fetch");
  }
}
