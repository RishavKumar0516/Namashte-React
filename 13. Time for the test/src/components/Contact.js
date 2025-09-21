const Contact = () => {
    return (
        <div className="max-w-[800px] mx-auto mt-[20px]">
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>

            <form className="flex flex-col p-4 m-4 gap-2">
                <div className="flex flex-col">
                    <label>Name</label>
                    <input type="text" placeholder="Name" className="border border-black rounded-md px-2 py-1" required />
                </div>
                <div className="flex flex-col">
                    <label>Message</label>
                    <input type="text" placeholder="Message" required className="border border-black rounded-md px-2 py-1" />
                </div>
                <div className="flex justify-content-end mt-4 w-full">
                    <button type="submit" className="bg-[#E46F20] text-white rounded-md px-2 py-1">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact; 