import { memo } from 'react';

const UserList = memo(({listItem}) => {
    return (
        <ul>
            {
                listItem.map((item, index) => {
                    return (
                        <li key={index} className='text-black'> 
                            Name: {item.name}  || Username: {item.username}
                        </li>
                    )
                })
            }
        </ul>
    )
});

export default UserList;