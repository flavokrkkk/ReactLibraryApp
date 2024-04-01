import {Table} from 'antd';
import { useSelector } from 'react-redux';



const MyTable = () => {

  const books = useSelector(state => state.books.books)
  const users = useSelector(state => state.users.users)
  const myBook = useSelector(state => state.myBook.myBook)


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
      title: 'Прочитано',
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
      age: `${users.length} пользователя`,
      address: `${books.length * users.length} книжек забронировано`,
      action: ` ${myBook.length}- кол-во книг в MyBook`,
    },
  ];

  return (
    <Table columns={columns} dataSource={data} />
  )
}
 
export default MyTable;