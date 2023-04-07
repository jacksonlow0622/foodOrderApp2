/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFoodOrder = /* GraphQL */ `
  mutation CreateFoodOrder(
    $input: CreateFoodOrderInput!
    $condition: ModelFoodOrderConditionInput
  ) {
    createFoodOrder(input: $input, condition: $condition) {
      id
      name
      address
      food
      quantity
      email
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateFoodOrder = /* GraphQL */ `
  mutation UpdateFoodOrder(
    $input: UpdateFoodOrderInput!
    $condition: ModelFoodOrderConditionInput
  ) {
    updateFoodOrder(input: $input, condition: $condition) {
      id
      name
      address
      food
      quantity
      email
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFoodOrder = /* GraphQL */ `
  mutation DeleteFoodOrder(
    $input: DeleteFoodOrderInput!
    $condition: ModelFoodOrderConditionInput
  ) {
    deleteFoodOrder(input: $input, condition: $condition) {
      id
      name
      address
      food
      quantity
      email
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
