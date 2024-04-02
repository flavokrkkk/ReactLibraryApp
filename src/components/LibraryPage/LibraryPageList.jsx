import { Button } from 'antd';
import React, { useEffect } from 'react';

const LibraryPageList = ({users, onRead, pushUserInMyBook}) => {

    return (
        <>
          { users.length > 0
            ?
          users.map((user, index) => 
                <div>
                    <div className='Libray__Page-User' key={user.id}>
                        {index + 1}. {user.name}
                        <p>{user.email}</p>
                        <Button 
                        className='Libray__Page-User-Button'
                        onClick={() => {
                        pushUserInMyBook(user)
                        onRead(user.id)
                    }
                            }>
                                push to myBook
                        </Button>
                        
                    </div>
                </div>
            )
            :
            <h3>Пользователи еще не добавили книги!</h3>
        }
        </>
    );
};

export default LibraryPageList;