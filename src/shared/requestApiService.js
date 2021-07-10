import React from "react";
export const postRequest = async (url, params) => {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...params,
    }),
  })
  return response.json()
};

export const getRequest = async (url) => {
  try {
    let response = await fetch(url);
    return response.json()
  } catch (error) {
    console.log(error);
  }
  
};
