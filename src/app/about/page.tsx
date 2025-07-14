import elders from "@/lib/elders_data";
import MiniHeroSection from "@/components/Hero_mini";
import miniheroData from "@/lib/mini_hero_data";
import Card from "@/components/Card";
import GoogleMap from "@/components/GoogleMap";
import { type SanityDocument } from "next-sanity";
import { sanityClient } from "@/sanity/client";

const POSTS_QUERY = `*[ _type == "leaders"]`;
const options = { next: { revalidate: 30 } };
export default async function Aboutus() {
  
  const mapEmbedUrl = "https://maps.app.goo.gl/F2h7Q23ahrRB8Fri9"
     return (
    // The main container for the About Us page
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

      {/* I. Hero Section (Specific to About Us) */}
      
      <MiniHeroSection 
          title={miniheroData['about'].title}
          image={miniheroData['about'].image}
          description = { miniheroData['about'].description}
          />
      
      <main className="container mx-auto px-4 py-12">

        {/* II. Our Story / History */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Our Journey of Faith
          </h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed">
            <p className="mb-6">
              [Church Name] began with a humble gathering of dedicated families in [Year], united by a shared vision to foster a vibrant community centered on Christ's teachings. What started as a small home Bible study quickly grew into a thriving congregation, driven by a passion for worship, fellowship, and service.
            </p>
            <p className="mb-6">
              Over the decades, we've celebrated many milestones, including the construction of our first sanctuary in [Year], the launch of our compassionate outreach programs in [Year], and the expansion of our youth ministry in [Year]. Each step has been a testament to God's faithfulness and the unwavering commitment of our members.
            </p>
            <p>
              Today, we continue to build upon this rich legacy, embracing new challenges and opportunities to spread love, hope, and faith in [City/Region] and beyond. Our story is one of grace, growth, and a deepening walk with God.
            </p>
            {/* Optional: Add historical photos here */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src="https://placehold.co/600x400/E5E7EB/7F8C8D?text=Early+Days" alt="Early Church Days" className="rounded-lg shadow-md" />
              <img src="https://placehold.co/600x400/E5E7EB/7F8C8D?text=Community+Growth" alt="Community Growth" className="rounded-lg shadow-md" />
            </div>
          </div>
        </section>

        {/* III. Our Mission, Vision & Values */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Our Mission, vision, and core values
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Mission */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                Our mission is to worship God authentically, share the Gospel, and nurture believers into true disciples who are equipped to serve and spread Christ's message globally, in collaboration with other ministries and through dedicated community service.
              </p>
            </div>
            {/* Vision */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                Our vision is to worship God in Spirit and Truth, proclaiming the Good News of Jesus Christ to all while diligently teaching and discipling new believers. We are committed to equipping, training, and sending believers to serve in our community and globally, fostering collaboration with other churches and ministries to fulfill the Great Commission through impactful service.
              </p>
            </div>
            {/* Values */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Our Core Values</h3>
              <ul className="list-disc list-inside text-lg leading-relaxed space-y-1">
                <li key={"1"}><span className="font-bold">Authentic Worship:</span> A commitment to worshipping God genuinely in Spirit and Truth.</li>
                <li key={"2"}><span className="font-bold">Discipleship & Growth:</span> Dedication to teaching, building, and nurturing believers to become true followers of Jesus Christ.</li>
                <li key={"3"}><span className="font-bold">Evangelism & Outreach:</span> A passion for sharing the Good News of Jesus Christ with all people and actively engaging in community service.</li>
                <li key={"4"}><span className="font-bold">Service & Missions:</span> Empowering and sending believers to serve locally and globally, fulfilling the Great Commission.</li>
                <li key={"5"}><span className="font-bold">Collaboration & Unity:</span> A desire to initiate and participate with other churches and ministries for collective impact.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* IV. What We Believe / Statement of Faith */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            What We Believe
          </h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed">
            <p className="mb-6">
              At Chicago Yemsrach Evangelical Church, our beliefs are rooted in the timeless truths of the Bible. We believe in one God, eternally existing in three persons: Father, Son (Jesus Christ), and Holy Spirit. We believe the Bible is the inspired, infallible Word of God and the ultimate authority for faith and life.
            </p>
            <p className="mb-6">
              We affirm salvation through grace by faith in Jesus Christ, recognizing His crucifixion as the atonement for our sins and His resurrection as the promise of eternal life. We are committed to living out our faith through worship, discipleship, fellowship, and evangelism, empowered by the Holy Spirit.
            </p>
            <p className="text-center mt-8">
              <a href="#" className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300">
                View Our Full Statement of Faith
              </a>
            </p>
          </div>
        </section>

        {/* V. Our Leadership & Team */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Meet Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Example Leader Card 1 */}
            { elders.map(({name, image_url, description, position}) => (
              <Card key={name} name={name} position={position} image_url={image_url} description={description} />
            ))}
          </div>
        </section>

        {/* VI. Our Community / Get Involved */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
            Experience Our Vibrant Community
          </h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            <p className="mb-4">
              Our church is more than just a building; it's a family where everyone is welcome. We believe in doing life together, supporting one another, and growing in faith through authentic relationships. From weekly small groups to impactful outreach projects, there are countless ways to connect and serve.
            </p>
            <p>
              We invite you to explore the many opportunities to get involved, find your place, and share your gifts within our loving community.
            </p>
          </div>
          {/* Community Photos / Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <img src="https://placehold.co/400x300/E0E7FF/4338CA?text=Fellowship" alt="Church Fellowship" className="rounded-lg shadow-md object-cover w-full h-full" />
            <img src="https://placehold.co/400x300/E0E7FF/4338CA?text=Serving" alt="Serving Community" className="rounded-lg shadow-md object-cover w-full h-full" />
            <img src="https://placehold.co/400x300/E0E7FF/4338CA?text=Small+Group" alt="Small Group" className="rounded-lg shadow-md object-cover w-full h-full" />
          </div>
          <a href="#" className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105">
            Discover Ways to Get Involved
          </a>
        </section>

        {/* VII. What to Expect on Sunday (for Newcomers) */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Planning Your First Visit?
          </h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">During Service</h3>
              <p className="mb-4">
                Our Sunday worship service at **10:00 AM** is a vibrant blend of contemporary worship music, heartfelt prayer, and an inspiring message from the Bible. Services typically last about 90 minutes. We invite you to come as you are – there's no dress code!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">For Families</h3>
              <p className="mb-4">
                We offer engaging and safe children's ministry programs for infants through 5th grade, available during the main service. Our dedicated volunteers are background-checked and committed to creating a fun learning environment for your kids.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="#" className="inline-block px-8 py-4 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105">
              Plan Your Visit Now
            </a>
          </div>
        </section>

        {/* VIII. Contact Information / Connect */}
        <section className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
            Still Have Questions? Connect With Us!
          </h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Reach Out Directly</h3>
              <p className="mb-2">
                **Phone:** (123) 456-7890
              </p>
              <p className="mb-4">
                **Email:** <a href="mailto:info@mychurch.org" className="text-indigo-600 hover:underline">info@mychurch.org</a>
              </p>
              <p>
                **Office Hours:** Mon-Fri, 9:00 AM - 4:00 PM
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Visit Us</h3>
              <p className="mb-4">
                5850 N Elston Ave, Chicago, IL 60646
              </p>
              {/* Placeholder for embedded map */}
              <GoogleMap />
              <a href={ mapEmbedUrl } target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-2 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition duration-300">
                Get Directions
              </a>
            </div>
          </div>
          <div className="mt-10">
            <a href="/contact" className="inline-block px-8 py-4 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105">
              Send Us a Message
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}