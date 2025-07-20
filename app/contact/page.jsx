import ContactForm from '../components/ContactForm';
export default function ContactPage(){
    return(
        <div className="min-h-screen font-heading text-black dark:text-white flex flex-col items-center p-8">
            <h1 className="text-3xl mb-4">Contact Us</h1>
            <p className=" text-base mb-6 text-center md:w-2/3">
                Have Questions Or Feedback? Feel Free to Share
                We would Love To Hear From You!
            </p>
            <ContactForm/>

        </div>
    );
}