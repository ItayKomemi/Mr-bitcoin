import React from 'react'
import { Doughnut,SparklinesLine } from 'react-sparklines';


export default function Chart({marketPrice,transactionsData}) {
  return (
    <>
    <Doughnut data={marketPrice}>
    <SparklinesLine color="green" />
    </Doughnut>
    
    <Doughnut data={transactionsData}>
    <SparklinesLine color="green" />
    </Doughnut>
    </>

  )
}
