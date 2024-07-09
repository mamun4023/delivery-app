export default function Contact() {
    return (
        <div className=" flex justify-center m-10">
            <form>
                <div>
                    <input type="text" placeholder="name" />
                </div>

                <div>
                    <input type="email" placeholder="email" />
                </div>

                <div>
                    <textarea 
                        placeholder="message"
                     rows="4" cols="50"></textarea>
                </div>

                <div>
                    <button className="bg-primary text-white">send</button>
                </div>
            </form>
        </div>
    );
}
