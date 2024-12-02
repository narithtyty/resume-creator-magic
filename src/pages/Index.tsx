import ProfileHeader from "@/components/ProfileHeader";
import Section from "@/components/Section";
import ExperienceCard from "@/components/ExperienceCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-4xl py-12">
        <ProfileHeader
          name="SOVANNARITH PHAN"
          title="Software Engineer"
          imageUrl="/lovable-uploads/c61add5c-d8cc-48ee-bf46-f7538cd2e99f.png"
        />

        <Section title="Personal Profile">
          <p className="text-gray-700 leading-relaxed">
            Extremely motivated to constantly develop my skills and grow
            professionally. Learning from other person and practice it in our my
            own way is the best way to learn.
          </p>
        </Section>

        <Section title="Skills">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="text-gray-700">
              Java, JavaScript, TypeScript, Scala, PHP and C#
            </li>
            <li className="text-gray-700">
              SQL Server, MySQL and Oracle Database
            </li>
            <li className="text-gray-700">
              The ability to analyze complex technical information
            </li>
            <li className="text-gray-700">
              jQuery, Vuejs, ReactJs and Angular
            </li>
            <li className="text-gray-700">NodeJS</li>
            <li className="text-gray-700">Total Experience Job : 7+ years</li>
          </ul>
        </Section>

        <Section title="Work Experience">
          <ExperienceCard
            title="SOFTWARE ENGINEER"
            company="Lightnet Group Thailand"
            period="Jan 2024 - Present"
            description={[
              "Develop and maintain blockchain-based remittance systems",
              "Work with cross-functional teams to implement new features and improvements",
            ]}
          />
          <ExperienceCard
            title="SOFTWARE ENGINEER"
            company="Choco Card Enterprise Co., Ltd."
            period="Jan 2020 - Dec 2023"
            description={[
              "Develop System follow requirement of the company, Frontend (Reactjs ,Vuejs,Dotnet core C#)",
              "Product (CDP platform)",
              "Project (BRCM) Brand CRM System",
            ]}
          />
          <ExperienceCard
            title="BACKEND DEVELOPER"
            company="Lqid360"
            period="Sep 2019 - Dec 2019"
            description={[
              "Develop System follow requirement of the company, using Scala and MongoDB",
            ]}
          />
          <ExperienceCard
            title="SOFTWARE ENGINEER"
            company="INF Systems & Engineering (Thailand) Ltd."
            period="Sep 2017 - Sep 2019"
            description={[
              "Maintenance and Develop System (LIMS) by using JAVA, JavaScript and Oracle, MS SQL Server database.",
            ]}
          />
        </Section>

        <Section title="Education">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-2">
              PRINCE OF SONGKLA UNIVERSITY (THAILAND)
            </h3>
            <p className="text-gray-700">
              Bachelor of Applied Mathematics | 2013-2107
            </p>
            <p className="text-gray-700">Grade : 3.40</p>
          </div>
        </Section>

        <Section title="Get in Contact">
          <div className="space-y-2 text-gray-700">
            <p>Mobile: 0642471965</p>
            <p>Email: phansovannarith@gmail.com</p>
            <p>
              Address: 31 Soi Ramkhamhaeng 22, Khwaeng Hua Mak, Khet Bang Kapi,
              Krung Thep Maha Nakhon 10240
            </p>
          </div>
        </Section>

        <Section title="Other Activities">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Training Course (React Native) Feb- 2019</li>
            <li>
              Participate in competitions ACM-ICPC 2014 2015 and 2016 (Round
              Southern region)
            </li>
            <li>
              Participate in competitions ACM-ICPC 2016 (Round Thailand National)
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default Index;
