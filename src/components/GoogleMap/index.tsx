export default function GoogleMap() {
    return (
        <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-500">
                {/* <p>Map Placeholder (Embed Google Map here)</p> */}
          
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.599482741642!2d-87.77626158856947!3d41.98740825844374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fceb27f683463%3A0xee40f28c43018ec4!2s5850%20N%20Elston%20Ave%2C%20Chicago%2C%20IL%2060646!5e0!3m2!1sen!2sus!4v1750441429973!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" style={{ border:0 }} 
                    allowFullScreen= { true } 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={'Location Map'} // For accessibility
                    aria-label={`Google Map showing 5850 N Elston Ave, Chicago, IL 60646`} // More detailed accessibility label
                    className="rounded-lg">
                     
                    </iframe>
        </div>
    )
}