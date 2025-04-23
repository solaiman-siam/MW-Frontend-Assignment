import { Send } from "lucide-react";
import SlotCounter from 'react-slot-counter';
function Contact() {


  return (
    <div className="container max-w-[1320px] py-24">
      <div className="bg-[#0060af] bg-gradient-to-tr from-[#0060af] to-[#019bab] flex items-center gap-8 rounded-xl p-14 text-white">
        <div className="flex-1">
          <h3 className="text-5xl w-10/12 leading-[65px] font-bold pb-4">
            Do you want to start a project?
          </h3>
          <p className="text-white/80 pt-4 border-b pb-6 border-white/50 w-10/12">
            Drop us a line for your project thought or for sharing the news
            about your company. Yes we check this mailbox frequently!
          </p>

          <div className="flex items-center gap-4 pt-12">
            <div className="flex bg-white p-4 rounded-lg flex-col gap-2">
              <h4 className="text-3xl font-bold text-[#0060af]"> <SlotCounter animateOnVisible={true} value={10} duration={2} />+</h4>
              <p className="bg-gradient-to-tr text-sm from-[#0060af] to-[#019bab] bg-clip-text text-transparent">
                Yes in <br></br> Business
              </p>
            </div>
            <div className="flex bg-white p-4 rounded-lg flex-col gap-2">
              <h4 className="text-3xl font-bold text-[#0060af]"> <SlotCounter animateOnVisible={true} value={100} duration={2} />+</h4>
              <p className="bg-gradient-to-tr text-sm from-[#0060af] to-[#019bab] bg-clip-text text-transparent">
                In House <br></br> employees
              </p>
            </div>
            <div className="flex bg-white p-4 rounded-lg flex-col gap-2">
              <h4 className="text-3xl font-bold text-[#0060af]">  <SlotCounter animateOnVisible={true} value={250} duration={2} />+</h4>
              <p className="bg-gradient-to-tr from-[#0060af] text-sm to-[#019bab] bg-clip-text text-transparent">
                Successfully <br></br> Delivery Projects
              </p>
            </div>
          </div>

          <div className="flex items-start gap-10 pt-12">
            <img
              src="https://i.ibb.co.com/yF8JSpxR/Frame-1597882076.png"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/4n6qRpHg/Frame-1597882146.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white p-10 rounded-3xl">
            <h3 className="bg-gradient-to-tr from-[#0060af] to-[#019bab] bg-clip-text text-transparent text-4xl font-bold leading-[50px] pb-8">
              Get 20% OFF <br></br>
              Your first Project!
            </h3>

            <form action="" className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <label className="text-black/80" htmlFor="">
                  *Full Name
                </label>
                <input
                  className="px-5 text-black/80 py-3 border rounded-lg focus:outline-none focus:border-[#0060af] "
                  placeholder="Enter your full name"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-black/80" htmlFor="">
                  *Email
                </label>
                <input
                  className="px-5 text-black/80 py-3 border rounded-lg focus:outline-none focus:border focus:border-[#0060af] "
                  placeholder="Enter your email"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-black/80" htmlFor="">
                  *Message
                </label>
                <textarea
                  className="h-[200px] px-5 text-black/80  py-3 border rounded-lg focus:outline-none focus:border focus:border-[#0060af]"
                  placeholder="Leave us a message"
                  name=""
                  id=""
                ></textarea>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <input
                  className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-sm relative checked:bg-blue-400 checked:border-transparent checked:outline-none checked:before:content-['✔'] checked:before:absolute checked:before:text-white checked:before:left-1/2 checked:before:top-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
                  type="checkbox"
                  name=""
                  id=""
                />

                <label className="text-black/80" htmlFor="">
                  You agree to our friendly privacy policy.
                </label>
              </div>

              <div className="pt-4">
                <button className="flex w-full py-4 rounded-lg  justify-center items-center text-white bg-gradient-to-tr from-[#0060af] to-[#019bab]  gap-4">
                  Send Message <Send />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
