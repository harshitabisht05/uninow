export default function Footer() {
  return (
    <footer className="bg-purple-800/20 dark:bg-purple-800/10 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        <p className="text-sm text-gray-700 dark:text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} <span className="font-semibold text-purple-600 dark:text-purple-400">UniNow</span>. All rights reserved.
        </p>
        
        <div className="flex space-x-6">
          {['twitter', 'linkedin', 'instagram'].map((social) => (
            <a
            key={social}
            href="#"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 
                        hover:text-purple-600 dark:hover:text-purple-400 
                        transition-colors duration-200 
                        focus:outline-none focus-visible:ring-2 
                        focus-visible:ring-purple-500 rounded"
            >
            {social.charAt(0).toUpperCase() + social.slice(1)}
            </a>

          ))}
        </div>
      </div>
    </footer>
  );
}
