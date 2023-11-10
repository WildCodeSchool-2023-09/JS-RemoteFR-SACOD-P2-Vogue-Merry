import PropTypes from "prop-types";

function Contact({ closeModal }) {
  return (
    <section className="mx-auto w-screen px-5 py-16">
      <section className="mx-auto max-w-xl bg-purple-heart-100 px-2 pb-12 pt-2 text-center rounded-xl text-sm text-[#636262]">
        <div className="flex justify-end pr-4">
          <button
            className="text-[#636262] text-2xl font-bold"
            type="button"
            onClick={() => closeModal(false)}
          >
            <p> X </p>
          </button>
        </div>
        <div className="mx-auto max-w-7xl px-5 py-2 text-center md:px-10 md:py-2 lg:py-2">
          <h2 className="text-3xl font-bold md:text-5xl">Contact Form</h2>
          <p className="mx-auto mb-8 mt-4 max-w-lg text-[#636262] md:mb-12 lg:mb-16">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
          <form
            name="wf-form-name"
            method="get"
            className="mx-auto mb-4 text-left sm:px-4 md:px-20"
          >
            <div className="mb-4 grid w-full grid-cols-2 gap-6">
              <div>
                <label htmlFor="name-2" className="mb-1 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-[#333333]"
                  placeholder=""
                  required=""
                />
              </div>
              <div>
                <label htmlFor="name-3" className="mb-1 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-[#333333]"
                  placeholder=""
                  required=""
                />
              </div>
            </div>
            <div className="mb-4 text-center">
              <label htmlFor="field" className="mb-1 font-medium">
                Email
              </label>
              <input
                type="text"
                className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-[#333333]"
              />
            </div>
            <div className="mb-5 md:mb-6 lg:mb-8 text-center">
              <label htmlFor="field" className="mb-1 font-medium">
                Message
              </label>
              <textarea
                placeholder=""
                maxLength="5000"
                name="field"
                className="mb-2.5 block h-auto min-h-[186px] w-full rounded-md border border-solid border-black px-3 py-2 text-sm text-[#333333]"
              >
                {" "}
              </textarea>
            </div>
            <label className="font-mediume mb-1 flex items-center justify-start pb-4 pl-5">
              <input
                type="checkbox"
                name="checkbox-2"
                className="-ml-[20px] mt-1"
              />
              <span
                className="ml-4 inline-block cursor-pointer text-sm"
                htmlFor="checkbox-2"
              >
                By selecting this, you agree to the
                <p href="#"> Privacy Policy</p>
              </span>
            </label>
            <input
              type="submit"
              value="Submit your message"
              className="mt-4 inline-block w-full cursor-pointer items-center rounded-md bg-purple-heart-500 px-6 py-3 text-center font-semibold text-white"
            />
          </form>
        </div>
      </section>
    </section>
  );
}
Contact.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Contact;
