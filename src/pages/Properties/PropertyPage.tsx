import React, { useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import Galeria from './components/Galeria'
import { usePropertyState } from './context'
import Toolbar from './components/Toolbar'

interface IPatientPageProps {
  children?: React.ReactNode
}

const PatientPage: React.FC<IPatientPageProps> = (props) => {
  const { property, handleGetProperty } = usePropertyState()
  const { id } = useParams()
  const navigate = useNavigate()

  console.log(id)
  useEffect(() => {
    if (!property && id) {
      handleGetProperty(id!)
    }
  }, [id])

  return (
    <>
      <div className=' w-full lg:container lg:mx-auto px-4'>
        <div>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
            <div
              className='flex items-center gap-4 cursor-pointer'
              onClick={() => navigate(-1)}
            >
              <FaArrowLeft className='text-xl' />
              <h1 className='text-2xl lg:text-4xl font-semibold'>
                {property?.title}{' '}
              </h1>
            </div>
            <div className='mt-4 md:mt-0 md:text-right'>
              <p className={`text-lg`}>{property?.category}</p>
              <p className='font-bold text-xl lg:text-3xl uppercase'>
                Desde USD${property?.price}
              </p>
            </div>
          </div>
          <div className='text-slate-600 mt-3 text-lg'>
            <i className='pi pi-map-marker mr-2' />
            <span>{property?.province}</span>
          </div>
        </div>
        <div className='grid gap-12 my-6 md:my-14'>
          <Galeria images={property?.images} />
          <div>
            {/*  */}
            <h3 className='text-xl font-semibold'>Descripcion:</h3>
            <div
              className='py-6 text-justify text-slate-600'
              dangerouslySetInnerHTML={{ __html: property?.description || '' }}
            />

            {/*  */}
            {/* <h3 className='text-xl font-semibold py-6'>
            Características de los Apartamentos:
          </h3>
          <ul className='text-lg list-disc text-justify p-4 text-slate-600'>
            {property?.items?.map((i) => (
              <li className='list-item'>{i}</li>
            ))}
          </ul> */}

            {/*  */}
            <h3 className='text-xl font-semibold py-6'>
              Detalle de Apartamento:
            </h3>
            <div className='grid lg:grid-cols-3 w-1/2 gap-3'>
              <div>
                <p className='text-slate-600 mb-2'>Tipo de propiedad</p>
                <p>Apartamento</p>
              </div>
              <div>
                <p className='text-slate-600 mb-2'>Bedrooms</p>
                <p>{property?.rooms}</p>
              </div>
              <div>
                <p className='text-slate-600 mb-2'>Bathrooms</p>
                <p>{property?.bathrooms}</p>
              </div>
              <div>
                <p className='text-slate-600 mb-2'>Size</p>
                <p>{property?.size}</p>
              </div>
              <div>
                <p className='text-slate-600 mb-2'>Floors</p>
                <p>{property?.floors}</p>
              </div>
              <div>
                <p className='text-slate-600 mb-2'>Year Built</p>
                <p>2025</p>
              </div>
            </div>
          </div>
          {/* <img
          className='w-[100%] rounded-3xl text-center'
          src='https://as1.ftcdn.net/v2/jpg/02/91/45/12/1000_F_291451260_DTtmKxG4ph9X8FP22HawITByfdPDG5ZK.jpg'
        /> */}
        </div>
      </div>

      {property ? <Toolbar /> : ''}
    </>
  )
}

export default PatientPage