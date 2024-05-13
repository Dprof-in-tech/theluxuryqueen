import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { PaystackButton } from 'react-paystack';

const Vote = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get("name");
    const picture = searchParams.get("picture");

    const [email, setEmail] = useState('');
    const [cname, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [votes, setVotes] = useState('');
    const ramount = votes * 100;
    const amount = votes * 100 * 100;

    const resetForm = () => {
        setEmail('');
        setName('');
        setPhone('');
        setVotes(1);
    };

  
    const componentProps = {
        email,
        amount,
        metadata: {
            cname,
            phone,
        },
        publicKey: 'pk_live_30fc49fd2bb51a9ca7940608fc7eefbecc95ddee',
        text: 'Vote Now',
        onSuccess: ({ reference }) => {
            // alert(
            //     `Your vote was successful! Transaction reference: ${reference}`
            // );
            resetForm();
            window.location.href=`/leaderboard?votes=${votes}&name=${name}`;
        },
        onClose: () => alert("Wait! she needs this vote, don't go!!!!"),
    };

    return (
        <section className="max-w-8xl mx-auto w-full h-fit-content flex flex-col items-center">
            <Navbar />
            <h1 className="text-white text-[1.2rem]">Vote for {name}</h1>
            {/* {picture &&  */}
            <div className=" w-full lg:w-[50%] h-[fit-content] lg:h-[420px] flex flex-col lg:flex-row items-center justify-center mt-8">
                <div className="w-[85%] lg:w-[50%] h-full relative">
                    <img
                        className="h-full w-full"
                        src={picture}
                        alt={name}
                    />
                    <div className="hidden text-white absolute bottom-0 bg-black px-6 py-3">
                        <p className="">{name}</p>
                        <p className="">NGN 100 / vote</p>
                        <p>Amount: {ramount}</p>
                    </div>
                </div>
                <div className="p-4 flex flex-col items-center justify-center gap-2 w-[85%] lg:w-[50%] h-full">
                    <div className="w-full">
                        <label className="text-white">Name</label>
                        <input
                            className="w-full bg-transparent outline-none border border-white rounded-xl px-4 py-2 text-white"
                            type="text"
                            id="name"
                            value={cname}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-white">Email</label>
                        <input
                            className="w-full bg-transparent outline-none border border-white rounded-xl px-4 py-2 text-white"
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-white">Phone</label>
                        <input
                            className="w-full bg-transparent outline-none border border-white rounded-xl px-4 py-2 text-white"
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <label className="text-white">Number of votes</label>
                        <input
                            className="w-full bg-transparent outline-none border border-white rounded-xl px-4 py-2 text-white"
                            type="text"
                            id="votes"
                            value={votes}
                            onChange={(e) => setVotes(e.target.value)}
                        />
                    </div>
                    <PaystackButton className="bg-gray-700 text-white rounded-xl px-4 py-2 w-full mt-8 " {...componentProps} />
                </div>
            </div>
            {/* } */}
        </section>
    );
};

export default Vote;