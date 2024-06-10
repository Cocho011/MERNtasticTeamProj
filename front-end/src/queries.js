import { gql } from "@apollo/client";
export const GET_BUDGETS_BY_USERID = gql`
query getBudgetsByUserId($userId: String!) {
  budgets(userId: $userId) {
    _id
    amount
    weekDate
  }
}
`;
export const GET_SPENDINGS_BY_USERID = gql`
query getSpendingsByUserId($userId: String!) {
  spendings(userId: $userId) {
    _id
    amount
    timeSubmitted
    purchaseDescription
  }
}
`;