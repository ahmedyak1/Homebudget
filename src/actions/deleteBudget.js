// Import necessary libraries
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem, getAllMatchingItems } from "../helpers";

// Function to delete a budget and its associated expenses
export function deleteBudget({ params }) {
  try {
    // Delete the budget item
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    // Fetch and delete all associated expenses
    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach((expense) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });

    // Notify the user of successful deletion
    toast.success("Budget deleted successfully!");
  } catch (e) {
    // Handle any errors that occur during the deletion process
    throw new Error("There was a problem deleting your budget.");
  }

  // Redirect to the home page after deletion
  return redirect("/");
}
