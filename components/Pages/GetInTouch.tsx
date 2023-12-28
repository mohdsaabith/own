import React from "react";
import { useFormik } from "formik";
import { Button, Input } from "antd";

const { TextArea } = Input;

export default function GetInTouch() {
  return (
    <div className="bg-[#fafbfe]" id="contact">
      <div className="md:mx-[10rem] sm:mx-[1rem] mx-[1rem]  py-[5rem]">
        <div>
          <div className="text-center text-3xl font-semibold">GET IN TOUCH</div>
          <div className="mt-[25px] border border-[#1bbc9d] w-[60px]  flex justify-center items-center mx-auto"></div>
          <div className="text-[#858d96] mt-[30px] text-center">
            If you have any questions, inquiries, or specific needs, our team is
            available to provide assistance. <br />
            Please feel free to contact us; your objectives are our foremost
            concern.
          </div>
        </div>
        <div className="md:flex justify-center items-center mt-[5rem]">
          {/* <div className="md:w-[20%]">
            <div className="font-semibold">Address:</div>
            <div className="text-[#858d96] mt-2">
              <p>
                Manafe International, Building
                <br /> No 1/834, WAY 3433, <br />
                Al Khoud 7, Seeb, <br /> Muscat. Sultanate of Oman.
              </p>
            </div>
          </div> */}
          <div className="md:w-[60%] md:mt-0 sm:mt-6 mt-6 grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
            <div>
              <Input placeholder="Your name*" size="large" />
            </div>
            <div>
              <Input placeholder="Your email*" size="large" />
            </div>
            <div className="md:col-span-2">
              <Input placeholder="Your subject.." size="large" />
            </div>
            <div className="md:col-span-2">
              <TextArea placeholder="Your message.." size="large" rows={4} />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[25px]">
          <Button
            type="primary"
            className="bg-[#1bbc9d] text-white hover:text-white hover:bg-[#1bbc9d] flex justify-center items-center gap-2  transition  hover:-translate-y-1"
            size={"large"}
          >
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
}
