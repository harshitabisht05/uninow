export default function Footer(){
    return(
        <footer className="bg-gray-100 dark:bg-gray-900 py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="mt-4 md:mt-0 text-sm font-body">
                    © {new Date().getFullYear()} UniNow. All rights reserved.
                </p>
                <div className="flex space-x-4">
                    {['twitter','linkeedin','instagram'].map(social=>(
                        <a key={social} href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-600">
                            {social.charAt(0).toUpperCase()+social.slice(1)}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}