import { redirect } from "react-router";

export function meta() {
  return [
    { title: "Causes" },
    { name: "description", content: "Empowering Citizen Engagement" },
  ];
}

export async function loader() {
  return redirect("/signup");
}
