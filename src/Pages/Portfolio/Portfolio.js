import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900 rounded-lg">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-medium text-center text-gray-800 capitalize lg:text-4xl dark:text-white font-lexend ">Our
            Portfolio</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96 cake">
                <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                    <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Best Sweets
                        collections</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Dessert</p>
                </div>
            </div>

            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96 vegitable">
                <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                    <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Fresh Vegetable Of The Town</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Vegetable</p>
                </div>
            </div>

            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96 sup">
                <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                    <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Best Hot Soup</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Soup</p>
                </div>
            </div>

            <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96 drink">
                <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                    <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Croatian coffee</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Coffee</p>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Portfolio;