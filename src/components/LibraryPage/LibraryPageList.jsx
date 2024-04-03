import { Button } from 'antd';

const LibraryPageList = ({users, onRead, pushUserInMyBook, oneBook}) => {

    return (
        <>
          { users.length > 0
            ?
          users.map((user, index) => 
                <div key={user.id}>
                    <div className='Libray__Page-User' >
                        {index + 1}. {user.name}
                        <p>{user.email}</p>
                       {oneBook.dostup === true 
                       ? 
                       <Button 
                        className='Libray__Page-User-Button'
                        onClick={() => {
                        pushUserInMyBook(user)
                        onRead(user.id)
                        }}
                            >
                                push to myBook
                        </Button>
                        :
                        <Button disabled className='Libray__Page-User-Button'>
                            push to myBook
                        </Button>
                        }
                        
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