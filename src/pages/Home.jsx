import shipping from "../assets/ocean-shipping.jpeg"
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const Home = () => {
  return (
    <div className='px-6 min-h-screen'>
      <div className='flex justify-center'>
        <div className='mt-8 w-1/2 lgg:w-full flex flex-col items-center gap-3'>
            <h1 className='text-center font-bold text-5xl ssm:text-3xl font-header'>Grow your business. <span className=' text-rose-600'>We will take care</span> of all your logistics</h1>
            <p className='text-center ssm:text-sm'>It's time to adapt your business to keep up  with how the world of commerce is evolving Booking controlling   and monitoring your shipments are all simple with <span className='text-2xl ssm:text-lg font-bold font-header text-sky-500'>Shippy</span></p>
        </div>
      </div>
      <div className="h-[500px] flex justify-center mt-6">
        <img src={shipping} alt="" loading="lazy" className="h-full w-[80%] lgg:w-full object-cover"/>
      </div>
      <div className="mt-10">
        <h1 className="font-bold font-header text-lg mb-6 ml-8 text-orange-500">About</h1>
        <div className="flex px-8 justify-between mdd:text-center mdd:justify-center mdd:flex-wrap mdd:gap-6">
          <div className="font-header text-5xl font-medium w-1/2 mdd:w-full ssm:text-3xl">We deliver your logistics safely and easily</div>
          <div className="text-end mdd:text-center ssm:text-sm">We make logistics shipping much easier and straightforward.<br/> Combining good service and technology make everything much efficient</div>
        </div>
      </div>
      <div className="flex gap-12 mt-16 justify-center ssm:flex-wrap">
        <div className="p-6 w-96 rounded flex flex-col gap-3 bg-[#f7f7f7] ssm:grow">
          <div className="p-2 border w-12 rounded"><SecurityIcon sx={{color: '#237ee7'}} fontSize="large"/></div>
          <p className="font-medium text-lg">Always protect your packages</p>
        </div>
        <div className="p-6 w-96 rounded flex flex-col gap-3 bg-[#f7f7f7] ssm:grow">
          <div className="p-2 border w-12 rounded"><SupportAgentIcon sx={{color: '#009600'}} fontSize="large"/></div>
          <p className="font-medium text-lg">Our customer service will be there for you 24/7</p>
        </div>
      </div>
      <div className="py-12 mx-10 mdd:mx-0 flex justify-center mt-10 bg-[#1b1b1b] text-white">
        <div className="w-[80%] mdd:w-full mdd:px-6 flex flex-col gap-6">
          <div className="flex justify-between items-center font-medium pb-4 ssm:flex-wrap ssm:gap-4"> 
              <div className="text-5xl font-header ssm:grow">How do we <span className="font-bold text-sky-500 font-header">Deliver</span> your Packages?</div>
              <p className="text-[#d1d1d1] ssm:grow">Shippy provides several methods which have their respective advantages, choose the method that suits your packages</p>
          </div>
          <div className="flex justify-between mdd:items-center border-b border-[#484848] pb-6 ssm:flex-wrap ssm:gap-4"> 
              <div className="text-3xl font-semibold font-header">Overseas Shippment</div>
              <p className="text-[#d1d1d1]">Oversees shippment is a method of transporting large amounts of goods using carrier ships</p>
          </div>
          <div className="flex justify-between mdd:items-center border-b border-[#484848] pb-6 ssm:flex-wrap ssm:gap-4"> 
              <div className="text-3xl font-semibold font-header">Inland Shippment</div>
              <p className="text-[#d1d1d1]">Inland shippment is a method of delivering goods by land using a variety of vehicles </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;