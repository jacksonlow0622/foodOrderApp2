/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFoodOrder = /* GraphQL */ `
  subscription OnCreateFoodOrder(
    $filter: ModelSubscriptionFoodOrderFilterInput
    $owner: String
  ) {
    onCreateFoodOrder(filter: $filter, owner: $owner) {
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
export const onUpdateFoodOrder = /* GraphQL */ `
  subscription OnUpdateFoodOrder(
    $filter: ModelSubscriptionFoodOrderFilterInput
    $owner: String
  ) {
    onUpdateFoodOrder(filter: $filter, owner: $owner) {
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
export const onDeleteFoodOrder = /* GraphQL */ `
  subscription OnDeleteFoodOrder(
    $filter: ModelSubscriptionFoodOrderFilterInput
    $owner: String
  ) {
    onDeleteFoodOrder(filter: $filter, owner: $owner) {
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
