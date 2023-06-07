import { cookies } from "next/headers";

export async function getdbCartData() {
    const res = await fetch(
      `${process.env.Base_Url}/api/cart?user_id=${
        cookies().get("user_id")?.value
      }`
    );
    const data = await res.json();
    return data;
  }