// Import necessary libraries and components
import { Form, Link } from "react-router-dom";
import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../helpers";

// BudgetItem component to display individual budget details
const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);
  const remaining = amount - spent;
  const spentPercentage = spent / amount;

  // Handle delete confirmation
  const handleDelete = (event) => {
    if (!confirm("Are you sure you want to permanently delete this budget?")) {
      event.preventDefault();
    }
  };

  return (
    <div className="budget" style={{ "--accent": color }}>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spentPercentage)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(remaining)} remaining</small>
      </div>
      <div className="flex-sm">
        {showDelete ? (
          <Form method="post" action="delete" onSubmit={handleDelete}>
            <button type="submit" className="btn">
              <span>Delete Budget</span>
              <TrashIcon width={20} />
            </button>
          </Form>
        ) : (
          <Link to={`/budget/${id}`} className="btn">
            <span>View Details</span>
            <BanknotesIcon width={20} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default BudgetItem;
