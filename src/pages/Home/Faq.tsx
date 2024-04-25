import React from 'react'

const Faq = () => {
  return (
    <>
      <div className='max-w-screen-xl mx-auto px-5 bg-white min-h-[80vh]'>
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-5xl mt-5 tracking-tight'>FAQ</h2>
          <p className='text-neutral-500 text-xl mt-3'>Preguntas frecuentes</p>
        </div>
        <div className='grid lg:grid-cols-2 px-4 lg:px-0 gap-5 lg:max-w-[70%] mx-auto mt-8'>
          <div className='py-5'>
            <details className='group'>
              <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                <span> Cómo puedo suscribirme a un plan?</span>
                <span className='transition group-open:rotate-180 text-purple-900'>
                  <svg
                    fill='none'
                    height='24'
                    shape-rendering='geometricPrecision'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>
              <p className='text-neutral-600 mt-3 group-open:animate-fadeIn mb-3'>
                Puedes suscribirte a un plan en nuestro sistema siguiendo estos
                pasos:
              </p>
              <ul className='list-disc px-4'>
                <li>Dirígete a la página de planes de suscripción.</li>
                <li>
                  Selecciona el plan que deseas y haz clic en "Suscribirse" o
                  "Comprar"
                </li>
                <li>Crea tu cuenta</li>
                <li>Completa el proceso de pago a través de Stripe.</li>
              </ul>
            </details>
          </div>
          <div className='py-5'>
            <details className='group'>
              <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                <span>
                  Qué métodos de pago puedo utilizar para suscribirme?
                </span>
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shape-rendering='geometricPrecision'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>
              <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                Aceptamos pagos con tarjetas de crédito y débito. Stripe procesa
                pagos con Visa, Mastercard, American Express, y otros métodos
                locales dependiendo de tu ubicación.
              </p>
            </details>
          </div>
          <div className='py-5'>
            <details className='group'>
              <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                <span>¿Puedo cambiar de plan en cualquier momento?</span>
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shape-rendering='geometricPrecision'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>
              <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                Sí, puedes cambiar de plan en cualquier momento. Simplemente
                inicia sesión en tu cuenta, ve a la página de planes de
                suscripción y selecciona el nuevo plan al que deseas cambiar.
                Stripe ajustará automáticamente tu facturación según el nuevo
                plan.
              </p>
            </details>
          </div>
          <div className='py-5'>
            <details className='group'>
              <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                <span>¿Cómo puedo cancelar mi suscripción?</span>
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shape-rendering='geometricPrecision'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>
              <p className='text-neutral-600 mt-3 group-open:animate-fadeIn mb-3'>
                Puedes cancelar tu suscripción en cualquier momento siguiendo
                estos pasos:
              </p>
              <ul className='list-disc px-4'>
                <li>Inicia sesión en tu cuenta.</li>
                <li>Ve a la sección de configuración o perfil.</li>
                <li>
                  Busca la opción de "Cancelar suscripción" o "Suspender
                  cuenta".
                </li>
                <li>
                  Confirma la cancelación y sigue las instrucciones
                  proporcionadas.
                </li>
              </ul>
            </details>
          </div>
          <div className='py-5'>
            <details className='group'>
              <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                <span>
                  ¿Recibiré un reembolso si cancelo mi suscripción antes de que
                  finalice el período de facturación actual?
                </span>
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shape-rendering='geometricPrecision'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>
              <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                No, las cancelaciones durante un período de facturación no
                generan reembolsos parciales. Sin embargo, seguirás teniendo
                acceso al servicio hasta que finalice el período de facturación
                actual.
              </p>
            </details>
          </div>
          <div className='py-5'>
            <details className='group'>
              <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                <span>
                  ¿Cómo puedo obtener asistencia si tengo problemas con mi
                  suscripción o pagos?
                </span>
                <span className='transition group-open:rotate-180'>
                  <svg
                    fill='none'
                    height='24'
                    shape-rendering='geometricPrecision'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='1.5'
                    viewBox='0 0 24 24'
                    width='24'
                  >
                    <path d='M6 9l6 6 6-6'></path>
                  </svg>
                </span>
              </summary>
              <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                Si tienes algún problema con tu suscripción o pagos, contáctanos
                a través de nuestro servicio de atención al cliente. Puedes
                enviar un correo electrónico a [correo de soporte] o utilizar el
                formulario de contacto en nuestro sitio web. Nuestro equipo de
                soporte estará encantado de ayudarte a resolver cualquier
                problema que puedas tener.
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
