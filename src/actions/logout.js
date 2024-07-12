// Import necessary libraries
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem } from "../helpers";

// Function to handle user logout and account deletion
export async function logoutAction() {
  // Delete user data from local storage
  deleteItem({ key: "userName" });
  deleteItem({ key: "budgets" });
  deleteItem({ key: "expenses" });

  // Notify the user of successful account deletion
  toast.success("You’ve deleted your account!");

  // Redirect to the home page after deletion
  return redirect("/");
}
