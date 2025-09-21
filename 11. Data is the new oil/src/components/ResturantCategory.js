
import CategoryItems from './CategoryItems'

const ResturantCategory = ({data, showItems, handleClick}) => {

  return (
    <div>
        <div className='w-full my-4 bg-gray-50 shadow-lg p-4'>
            {/* header */}
            <div className='flex justify-between' onClick={handleClick}>
                <span className='font-bold text-lg'>{data.title} ({data?.itemCards?.length})</span>
            <span className='font-bold text-lg'>🔽</span>
            </div>
            {showItems && <CategoryItems data={data?.itemCards} />}
        </div>
    </div>
  )
}

export default ResturantCategory