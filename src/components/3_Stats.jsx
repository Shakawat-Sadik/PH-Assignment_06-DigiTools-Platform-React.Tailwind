import React from 'react';

const Stats = () => {
    return (
        <div className="bg-[#4F39F6] w-full flex justify-center">
            {/* div.flex.justify-center>(div.flex.justify-between.text-white>h1.text-6xl.font-extrabold+p.opacity-80)*3 */}
            <div className="w-[70vw] flex flex-col sm:flex-row md:justify-between gap-10 items-center py-15">
                <div className="flex flex-col items-center text-white">
                    <h1 className="text-6xl font-extrabold">50K+</h1>
                    <p className="opacity-80">Active Users</p>
                </div>
                <hr className="opacity-40 border border-white w-[80%] h-0 sm:w-0 sm:h-[80%]"/>
                <div className="flex flex-col items-center text-white">
                    <h1 className="text-6xl font-extrabold">200+</h1>
                    <p className="opacity-80">Premium Tools</p>
                </div>
                <hr className="opacity-40 border border-white w-[80%] h-0 sm:w-0 sm:h-[80%]"/>
                <div className="flex flex-col items-center text-white">
                    <h1 className="text-6xl font-extrabold">4.9</h1>
                    <p className="opacity-80">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;