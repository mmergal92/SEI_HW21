import React, {useState} from 'react';
// import receiptData from '.ReceiptChild';

const Receipt= () =>{



    //DATA
    const receiptData = [
        {
          person: "Karolin",
          order: {
            main: 'Burrito',
            protein: 'Organic Tofu',
            rice: 'Purple Rice',
            sauce: 'Green Crack',
            toppings: [
              'Baby Bok Choy', 'Cucumber Kimchi'
            ],
            drink: 'Korchata',
            cost: 22
          },
          paid: false
        },
        {
          person: 'Mark',
          order: {
            main: 'Rice Bowl',
            protein: 'Ginger Soy Chix',
            rice: 'Sticky Rice',
            sauce: 'Korilla',
            toppings: [
              'Yuzu Pickled Sweet Pepper', 'Kale'
            ],
            drink: 'Korchata',
            cost: 19
          },
          paid: false
        },
        {
          person: 'Matt',
          order: {
            main: 'Salad Bowl',
            protein: 'Organic Tofu',
            rice: 'none',
            sauce: "K'lla",
            toppings: [
              'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
            ],
            drink: 'Sparkling Blood Orange Soda',
            cost: 20
          },
          paid: true
        }
      ]

    //   const [paid, setPaid] = useState(receiptData.value.paid)
        // STATE
        const [status, setStatus] = useState(receiptData)

        const handleChangePaid = (paid, index) => {
            console.log(paid)
            return(
                setStatus(paid)
            )
        }

    return (
        <div>
            <h1>Korilla Receipts</h1>
            {receiptData.map((value, index) =>(
                <div>
                 <h3>Person: {value.person}</h3>
                 <h3>Main: {value.order.main}</h3>
                 <h3>Protein: {value.order.protein}</h3>
                 <h3>Rice: {value.order.rice}</h3>
                 <h3>Sauce: {value.order.sauce}</h3>
                 <h3>Drink: {value.order.drink}</h3>
                 <h3>Cost: {value.order.cost}</h3>
                 <h3>Topping: {value.order.toppings.map(oneTopping => oneTopping + ", ")}</h3>
                 <button onClick={(e) => handleChangePaid(value.paid, index)}>Person Paid</button>
                 <br/>
                 </div>
            ))}
        </div>
    )
  }
export default Receipt;
