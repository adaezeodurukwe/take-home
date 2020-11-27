## Pangaea FE Coding Challenge

### Run app
clone the repository and run 
- `yarn`
- `yarn start`

### Product Page Reqiurements

Should query from
https://pangaea-interviews.now.sh/api/graphql, retrieve the products and display them in a grid.

Feel free to use graphql client libraries such as Apollo Client

Each item should display the image, title, price and a "Add to Cart" button.

For screens wider than 768px, it should show grid of 3 items, for less than 768px wide it should show a grid of two wide.

### Cart Reqiurements

When a user clicks "Add to Cart" on an item it should open the cart sidebar and add the item in.
If the item already exists it should increment the quantity.

Clicking the + or - buttons will increase or descrease the quantity, if the quantity is 1 and the "-" button is pressed it should remove the item.

In the top left there is a currency select, doing so should requery the GraphQL api with a new currency and update the prices.

It should sum the items in the cart and display them in the correct selected currency.