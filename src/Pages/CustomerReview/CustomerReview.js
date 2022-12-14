import React from 'react';

const CustomerReview = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-800 rounded-lg">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
            What our <span className="text-blue-500 ">clients</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            There Are Some Honest Reviewer Review Our Website And Specially Our Services, We Are Really Greatfull For Your Kindness. Hopefully EveryOne Will Support Us. Still Long Way To Gooo...
        </p>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg dark:border-gray-700">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                Thank you for your food. It’s so fresh and delicious and it takes the work and guess-work out of my busy life when it comes to eating.I am so happy I discovered you guys! Loved the kale chips. Awesome Foods is AWESOME! You have a customer for life!


                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                        <span className="text-sm text-gray-500">CTO, Robert Consultency</span>
                    </div>
                </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                I got my large order of Raw Vegan foods in today via UPS and was very impressed with the packaging & freshness as well as the quality of my meals. The Raw Tuna Sandwich was soooo good!! Looking forward to being a REGULAR ordering customer from now on!!


                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>

                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Jeny Doe</h1>
                        <span className="text-sm text-gray-500">CEO, Jeny Consultency</span>
                    </div>
                </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                Just tried the collard wrap for the first time and it was delicious. I special order a few different items through my local health food store and they are weekly staples for lunch and dinner. Love Awesome Foods!!I am so happy I discovered you guys! Loved the kale chips


                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>

                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                        <span className="text-sm text-gray-500">Marketing Manager at Stech</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>
        </div>
    );
};

export default CustomerReview;