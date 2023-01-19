import { useParams } from 'react-router-dom';
import Layout from '../components/common/Layout'
import { useSelector } from 'react-redux';
import { selectGalleryStateById } from '../store/selectors/gallerySelector';
import GalleryCard from '../components/gallery/GalleryCard';
import { ThumbDown, ThumbUp } from 'tabler-icons-react';

const Gallery = () => {
  let { galleryId } = useParams();
  const data = useSelector(selectGalleryStateById(galleryId || ""))
  return (
    <Layout>
      <div className='grid md:grid-cols-[1fr_2fr] gap-10 mt-10 px-6'>
        <GalleryCard isSingle classColor='' item={data} />

        <div className='meta-data'>
          <h1 className='text-4xl'>{data.title}</h1>
          {(data.tags && data.tags.length !== 0) && <h3 className='mt-6 font-bold'>Tags:</h3>}
          {data.tags && data.tags.map((tag) => (
            <span key={tag.name} style={{ backgroundColor: `#${tag.accent}` }} className=' py-1 px-4 mt-2 text-sm mr-4  inline-flex rounded-lg text-white'>{tag.name}</span>
          ))}
          {data.points && <div className='flex items-center mt-4'>
            <p className='mr-2 font-bold'>Points:</p>
            <p>{data.points}</p>
          </div>}

          {data.ups && <div className='flex items-center mt-4'>
            <p className='mr-2 font-bold'> <ThumbUp
              size={25}
              strokeWidth={2}
              color={'black'}
            /></p>
            <p>{data.ups}</p>
          </div>}

          {data.downs && <div className='flex items-center mt-4'>
            <p className='mr-2 font-bold'><ThumbDown
              size={25}
              strokeWidth={2}
              color={'black'}
            /></p>
            <p>{data.downs}</p>
          </div>}

          {data.comment_count && <div className='flex items-center mt-4'>
            <p className='mr-2 font-bold'>Comments:</p>
            <p>{data.comment_count}</p>
          </div>}


          {data.description && <div className='flex items-center mt-4'>
            <p className='mr-2 font-bold'>Description:</p>
            <p>{data.description}</p>
          </div>}


        </div>
      </div>
    </Layout>
  )
}

export default Gallery