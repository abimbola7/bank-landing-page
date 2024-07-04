import Manager from "./manager";



const Managers = () => {
  const managers = [
    {
      name : "Ann Perkins",
      profession : "mortgage expert",
      avatar : "https://livedemo00.template-help.com/wt_prod-20296/images/team-5-138x138.png"
    },
    {
      name : "Martha Graham",
      profession : "operations manager",
      avatar : "https://livedemo00.template-help.com/wt_prod-20296/images/team-6-138x138.png"
    },
    {
      name : "Joan Smith",
      profession : "loan consultant",
      avatar : "https://livedemo00.template-help.com/wt_prod-20296/images/team-7-138x138.png"
    },
    
  ]
  return (
    <div className='flex items-center justify-center pt-16 min-h-[90vh] bg-[#F2F3F8]'>
      <div className='w-full mx-auto max-w-7xl !p-3'>
        <h1 className='text-2xl font-semibold text-center md:text-5xl'>Your Personal Managers</h1>
        <div className='grid items-center justify-center w-full grid-cols-1 gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
          {
            managers.map((manager, index) => (
              <Manager
              avatar={manager.avatar}
              index={index}
              name={manager.name}
              profession={manager.profession}
              key={index}
              />
            ))
          }
        </div>
      </div>
      
    </div>
  )
}

export default Managers

