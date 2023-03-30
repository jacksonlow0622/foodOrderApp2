/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFoodOrder = /* GraphQL */ `
  query GetFoodOrder($id: ID!) {
    getFoodOrder(id: $id) {
      id
      name
      address
      food
      quantity
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFoodOrders = /* GraphQL */ `
  query ListFoodOrders(
    $filter: ModelFoodOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoodOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        food
        quantity
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
