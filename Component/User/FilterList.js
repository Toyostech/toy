// import React from "react";
// import filterstyle from './FilterList.module.css'
// import Card from "../UI/Card";

// const FilterList = (props) => {
//     const People = [{
//         id: 0,
//         name: 'toyosi',
//         profession: 'softwere engineering',
//     }, {
//             id: 1,
//             name: 'lolu',
//             profession: 'softwere engineering',
//         },
//         {
//             id: 2,
//             name: 'samuel',
//             profession: 'Hardwere engineering',
//         },
//         {
//             id: 3,
//             name: 'femi',
//             profession: 'UI&UX designer',
//         },
//         {
//             id: 4,
//             name: 'Mayor',
//             profession: 'Graphic designer',
//         },
//         {
//             id: 5,
//             name: 'odun',
//             profession: 'softwere engineering and full_Stack',
//         }
//     ]

//     const softwereds = FilterList.filter(person => person.profession === 'softwere engineering');

//     const filtersslist = softwereds.map(
//         person => 
//             <li>
//                 <p>

//                     <b>{person.name}</b>
//                     {' ' + person.profession + ' '}
//                     know for {person.accomplisment}

//                 </p>
//             </li>
          
        

//     )
    
//     return (
//         <Card>
//             <ul>
//                 {filtersslist}
//             </ul>

//         </Card>
        
        
//     )
// }
// export default FilterList;