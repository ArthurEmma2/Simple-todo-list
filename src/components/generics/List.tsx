import React from 'react'
type ListProps<T> = {
    items: T[]
    onClick: (value:T) => void
}




function List<T extends {id:number}>({items, onClick}: ListProps<T>) {
  return (
    <div>
         <h2>List of Items</h2>

{
    items.map(( item, index) =>{
        console.log(item)
        console.log(item.id)
        return (
            <div key={item.id} onClick={() => onClick(item)}>
            </div>
        )
    })
}

    </div>
   
  )
}

export default List