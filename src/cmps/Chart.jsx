import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';


export default function Chart({marketPrice,transactionsData}) {
  return (
    <>
    <Sparklines data={marketPrice}>
    <SparklinesLine color="green" />
    </Sparklines>
    
    <Sparklines data={transactionsData}>
    <SparklinesLine color="green" />
    </Sparklines>
    </>

  )
}
