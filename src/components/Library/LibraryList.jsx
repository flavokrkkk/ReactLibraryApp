import { useNavigate } from 'react-router-dom';

const LibraryList = ({book}) => {

    const navigate = useNavigate()

    return (
        <div className='Library__Catalog-Item' onClick={() => navigate(`/info/${book.id}`)}>
            <div className='Library__Catalog-Item-Title'>
               {book.id}. {book.title}
            </div>
            <div className='Library__Catalog-Item-Descr'>
                {book.body}
            </div>
            <div className='Library__Catalog-Item-Author'>
                <h1 style={{fontWeight: 400, textTransform: 'uppercase'}}>Онлайн-библиотека Sbook</h1>
            </div>
            <button onClick={() => navigate(`/info/${book.id}`)} className='Library__Button-Item'>Хочу прочитать</button>
        </div>
    );
};

export default LibraryList;