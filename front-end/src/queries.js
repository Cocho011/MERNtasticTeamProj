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
export const ADD_SPENDING = gql`
mutation addSpending($amount: Int!, $timeSubmitted: String!, $purchaseDescription: String!, $userId: String!) {
  addSpending(amount: $amount, timeSubmitted: $timeSubmitted, purchaseDescription: $purchaseDescription, userId: $userId) {
    _id
    amount
    timeSubmitted
    purchaseDescription
  }
}
`;
export const ADD_BUDGET = gql`
mutation addBudget($amount: Int!, $weekDate: String!, $userId: String!) {
  addBudget(amount: $amount, weekDate: $weekDate, userId: $userId) {
    _id
    amount
    weekDate
  }
}
`;