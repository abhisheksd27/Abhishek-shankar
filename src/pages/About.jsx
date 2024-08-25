import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import CTA from "../components/CTA";
import { experiences, skills, education, socialLinks } from "../constants";
import "react-vertical-timeline-component/style.min.css";
import GitHubCalendar from 'react-github-calendar';

const About = () => {
  return (
    <section className='max-container p-4 sm:p-6 md:p-8 lg:p-10'>
      <h1 className='head-text text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Abhishek Shankar
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl">
          Software Engineer based in Bangalore, India, specializing in technical
          education through hands-on learning and building applications.
        </p>

        {/* Social Links Section */}
        <div className='mt-6 flex flex-wrap justify-center gap-6'>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-blue-600 hover:text-blue-800'
            >
              <img
                src={social.iconUrl}
                alt={social.name}
                className='w-6 h-6 object-contain'
              />
              <span className='text-sm sm:text-base'>{social.name}</span>
            </a>
          ))}
        </div>

        {/* Download Resume Button */}
        <div className='mt-8 flex justify-center'>
          <a
            href='https://drive.google.com/file/d/1dFqMkup7dv4AbAwQly5exNafpGzSeU1i/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 text-sm sm:text-base'
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl'>My Skills</h3>

        <div className='mt-16 flex flex-wrap justify-center gap-10'>
          {skills.map((skill) => (
            <div className='flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32' key={skill.name}>
              <div className='relative w-full h-full'>
                <div className='absolute inset-0 rounded-xl border-2 border-gray-200 shadow-md' />
                <div className='relative flex justify-center items-center w-full h-full rounded-xl bg-white shadow-lg'>
                  <img
                    src={skill.imageUrl || 'default-path'} // Ensure valid src
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className='py-16'>
        <h3 className='subhead-text text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl">
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex flex-col gap-8'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon || 'default-path'} // Ensure valid src
                      alt={experience.company_name}
                      className='w-[100%] h-[100%] object-contain rounded-full '
                    />
                  </div>
                }
                contentStyle={{
                  backgroundColor: '#e2e8f0', // Light cyan background
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Darker shadow
                  borderRadius: '8px',
                  padding: '1rem',
                }}
                contentArrowStyle={{
                  borderRight: `7px solid rgb(29 78 216)`, // Dark blue arrow
                }}
                dateClassName='text-lg font-semibold text-gray-700'
                className='vertical-timeline-element'
              >
                <div className='text-black'>
                  <h3 className='text-xl font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-gray-600 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-gray-500 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200 my-16' />

      <div className='py-16'>
        <h3 className='subhead-text text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Education</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl">
            Here's a look at my educational background:
          </p>
        </div>

        <div className='mt-12 flex flex-col gap-8'>
          <VerticalTimeline>
            {education.map((edu) => (
              <VerticalTimelineElement
                key={edu.institution}
                date={edu.date}
                iconStyle={{ background: 'slate' }} // Dark blue background for icon
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={edu.imageUrl || 'default-path'} // Ensure valid src
                      alt={edu.institution}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  backgroundColor: '#e2e8f0', // Light cyan background
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Darker shadow
                  borderRadius: '8px',
                  padding: '1rem',
                }}
                contentArrowStyle={{
                  borderRight: `7px solid rgb(29 78 216)`, // Dark blue arrow
                }}
                dateClassName='text-lg font-semibold text-gray-700'
                className='vertical-timeline-element'
              >
                <div className='text-black'>
                  <h3 className='text-xl font-semibold'>
                    {edu.degree}
                  </h3>
                  <p
                    className='text-gray-600 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {edu.institution} <br />
                    {edu.location}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {edu.details.map((detail, index) => (
                    <li
                      key={`education-detail-${index}`}
                      className='text-gray-500 font-normal pl-1 text-sm'
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-300 my-16' />

      <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-black rounded-lg shadow-md max-w-full overflow-hidden bg-slate-200">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">GitHub Contributions</h1>
        <div className="flex justify-center">
          <div className="w-full flex justify-center" style={{ maxWidth: '100%' }}>
            <GitHubCalendar
              username="abhisheksd27"
              blockSize={15}
              blockMargin={2}
              fontSize={12}
            />
          </div>
        </div>
      </div>

      <hr className='border-slate-300 my-16' />

      <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-black rounded-lg shadow-md max-w-full overflow-hidden bg-slate-200">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">Leetcode</h1>
        <div className="flex justify-center">
          <div className="w-full flex justify-center" style={{ maxWidth: '100%' }}>
            <img
              src="https://leetcard.jacoblin.cool/FireWallFox?theme=dark&font=Tiro%20Kannada&ext=contest&width=800"
              alt="LeetCode Stats"
              className="leetcode-stats-image"
            />
          </div>
        </div>
      </div>

      <hr className='border-slate-300' />

      <CTA />
    </section>
  );
};

export default About;
