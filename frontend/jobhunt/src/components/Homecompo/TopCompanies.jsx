import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

// Company data
const companies = [
  {
    logo: "https://images.moneycontrol.com/static-mcnews/2017/07/Bajaj-Allianz-Insurance-Logo-e1500914200739-770x433.jpg?impolicy=website&width=770&height=431",
    name: "Bajaj Allianz Life Insurance",
    description: "Provider of life insurance and financial services",
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/D5612AQGDEC6APIBRPA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1726116477867?e=2147483647&v=beta&t=lWZOAij6o6IS--YSN_QPMfZyZiR48HYzBMgmaBkw80Y",
    name: "Tata Consultancy Services",
    description: "Global leader in IT services, consulting, and business solutions",
  },
  {
    logo: "https://brandlogos.net/wp-content/uploads/2022/02/infosys-logo-brandlogos.net_.png",
    name: "Infosys",
    description: "Digital services and consulting company",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2a418p8twUZDZKHOggy9fkZSrnxyUZw6Bg&s",
    name: "Wipro",
    description: "IT, consulting and business process services",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFoEFDX0LRaeXy4-X6ufdBWTF1wnOd-vXfw&s",
    name: "HCL Technologies",
    description: "Global IT services and consulting company",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZTMyH-1K47I2DgkfMgxYAhmDui7yltRYkXQ&s",
    name: "Tech Mahindra",
    description: "Digital transformation and consulting services provider",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKDzNK0YV8bqTrlrby2C1XinwqEZxgcoiEtrtOWSXvC_gJ9DdDzcS2-YNl_qO372baXQ&usqp=CAU",
    name: "Accenture",
    description: "Professional services company with strong IT capabilities",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKE0GgxQbFi1chj5IfW9bPKDh6FMF7sbXfLA&s",
    name: "Cognizant",
    description: "IT services and digital transformation company",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThYMSEJH72n_HL6ee0zey6l1-bOU6wW8yEmg&s",
    name: "IBM",
    description: "Technology and consulting company known for innovation",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnt253Qlda-6a5x8LltLHZD4IWMCmk7LOQ9Q&s",
    name: "Microsoft",
    description: "Developer of software, hardware, and cloud services",
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png",
    name: "Amazon",
    description: "E-commerce giant also offering cloud and AI services",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZPi_3NyVc0HTi3L79fez-rWYF4f8cHBdDQ&s",
    name: "Meta (Facebook)",
    description: "Parent company of Facebook, Instagram, and WhatsApp",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-1vgi8y36JRSty9faJW7eJcZX5hxWHdinQ&s",
    name: "Apple",
    description: "Innovator in hardware, software, and digital ecosystems",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6Uvy-j6B7DvvGIoH2lFjKgyofVdv2vj1aQ&s",
    name: "Zoho",
    description: "Indian software company offering business tools and SaaS",
  },
  {
    logo: "https://www.pymnts.com/wp-content/uploads/2015/03/flipkart-logo.jpg?w=457",
    name: "Flipkart",
    description: "Leading Indian e-commerce company",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpo3vaYhsydHt-JpcF8Ld2WImXZFUOtpkEfw&s",
    name: "Paytm",
    description: "Digital payments and fintech platform",
  },
];

const TopCompanies = () => {
   return (
    <div className="w-full bg-gray-100 py-16">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-12 text-[#213b73]">
        Job Openings in Top Companies
      </h1>

      {/* Mobile → Horizontal scroll | md+ → Grid */}
      <div className="flex md:grid overflow-x-auto md:overflow-visible gap-6 px-6 md:px-16 pb-6 mx-4 md:mx-0 scrollbar-hide snap-x snap-mandatory md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {companies.map((company, index) => (
          <div
            key={index}
            className="min-w-[240px] md:min-w-0 h-[360px] snap-start bg-white rounded-xl shadow-md p-6 flex flex-col items-center flex-shrink-0 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-20 mx-auto mb-4 object-contain"
            />
            <h2 className="text-lg font-semibold text-center text-[#213b73]">
              {company.name}
            </h2>
            <p className="text-sm text-gray-600 text-center mt-2 flex-grow">
              {company.description}
            </p>
            <button className="mt-6 flex items-center gap-2 px-4 py-2 border rounded-lg text-[#213b73] font-semibold hover:bg-emerald-700 hover:text-white transition duration-300 cursor-pointer">
              <FaAngleDoubleRight />
              View All
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompanies;
