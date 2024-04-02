import {Table} from 'antd';
import { useSelector } from 'react-redux';



const MyTable = () => {

  const books = useSelector(state => state.books.books)
  const users = useSelector(state => state.users.users)
  const myBook = useSelector(state => state.myBook.myBook)
  const userTwo = useSelector(state => state.usersTwo.usersTwo)

  //Таблица
  const columns = [
    {
      title: 'Каталог',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Пользователи',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Избранное',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'MyBook',
      key: 'action',
      dataIndex: 'action',
    },
  ];
  
  
  const data = [
    {
      key: '1',
      name: `${books.length} книг`,
      age: `${users.length + userTwo.length} пользователей онлайн`,
      address: `${users.length} книжки в избранном`,
      action: ` ${userTwo.length} кол-во книг в MyBook`,
    },
  ];

  return (
    <Table columns={columns} dataSource={data} />
  )
}
 
export default MyTable;