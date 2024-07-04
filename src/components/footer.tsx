import { IoMailOutline } from "react-icons/io5";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="min-h-screen w-full bg-[#0e1014] text-[#d7d7d7] py-12 px-6">
      <div className='max-w-7xl mx-auto w-full'>
        <div className='w-full grid sm:grid-cols-2 md:grid-md-3 lg:grid-cols-4 items-start justify-items-start justify-center gap-x-6 gap-y-12 pb-32 border-b'>
          <div className='w-full'>
            <h1 className='uppercase text-base font-semibold'>contact us</h1>
            <ul className='mt-5 text-sm space-y-2'>
              <li>+1(409)987-5874</li>
              <li>info@bankingplatform.org</li>
              <li>6036 Richmond hwy., Alexandria, VA, 2230</li>
            </ul>
          </div>
          <div className='w-full'>
            <h1 className='uppercase text-base font-semibold'>products</h1>
            <ul className='mt-5 text-sm space-y-2'>
              <li>Credit Cards</li>
              <li>Studen Loans</li>
              <li>Mortgages</li>
              <li>Personal Loans</li>
            </ul>
          </div>
          <div className='w-full'>
            <h1 className='uppercase text-base font-semibold'>about us</h1>
            <ul className='mt-5 text-sm space-y-2'>
              <li>Social Media</li>
              <li>Testimonials</li>
              <li>Our History</li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h1 className='uppercase text-base font-semibold'>still have questions</h1>
            <p>Feel free to call our loan agents</p>
            <button className='bg-[#009CFF] py-2 px-14 transition-colors duration-300 hover:bg-[#020817]'>
              CONTACT US
              <IoMailOutline size={20} className='inline-block ml-4 mb-1'/>
            </button>
          </div>
        </div>

        <div className='space-y-8 text-sm py-14'>
          <p>
          Estimated savings are calculated based on the credit profiles of all loans originated as of December 01, 2017 in which the funds were used for credit card refinancing. Capital calculates estimated savings by deriving current credit card APR using minimum monthly payment and 1% of the principal balance. We then compare estimated credit card APR to Capital APR to determine median savings per borrower. To evaluate savings on a loan you are considering, it is important to compare your actual APR from your existing debt to the APR offered by our company.
          </p>
          <p>
          Loans used to fund education related expenses are subject to a 3 business day wait period between loan acceptance and funding in accordance with federal law. While most of our borrowers opt for automated recurring payment for ease of use, we also accept payments by check or one time electronic payments. Borrowers have the flexibility to choose the repayment method that works best for them.
          </p>
          <p>
          The average 3-year loan on Capital will have an APR of 17% and 36 monthly payments of $31 per $1,000 borrowed. The average APR on Capital is calculated based on 3-year rates offered in the last 1 month. You can find out more information from our agents.
          </p>
        </div>

        <div className='flex items-center justify-between'>
          <p>Capital &#169; 2024. All Rights Reserved</p>
          <div className='flex space-x-3 items-center'>
            <CiInstagram size={20} color='#ffffff'/>
            <FaTwitter size={20} color='#ffffff'/>
            <TiSocialFacebook size={20} color='#ffffff'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
