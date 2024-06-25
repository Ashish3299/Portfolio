import Layout from "@/components/Layout/default";
import Icon from "@/components/icons/icon";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ArchivePage = () => {
  const projects = [
    {
      node: {
        frontmatter: {
          date: "2022-10-08",
          title: "Harvard Business School Design System",
          tech: ["Storybook", "React", "TypeScript"],
          github: "",
          external: "",
          ios: null,
          android: null,
          company: "Upstatement",
        },
        html: "",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2022-09-08",
          title: "Threadable",
          tech: ["React Native", "Ruby on Rails", "Firebase"],
          github: "",
          external: "https://www.threadablebooks.com/",
          ios: "https://apps.apple.com/us/app/threadable/id1550995547",
          android: null,
          company: "Upstatement",
        },
        html: "",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2022-08-08",
          title: "Pratt",
          tech: [
            "WordPress",
            "Timber",
            "WordPress Multisite",
            "Gutenberg",
            "JS",
          ],
          github: "",
          external: "https://www.pratt.edu/",
          ios: null,
          android: null,
          company: "Upstatement",
        },
        html: "",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2022-01-20",
          title: "Everytown Gun Law Rankings",
          tech: ["WordPress", "Timber", "PHP", "Airtable API"],
          github: "",
          external: "https://everytownresearch.org/rankings/",
          ios: null,
          android: null,
          company: "Upstatement",
        },
        html: "",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2021-09-01",
          title: "Koala Health",
          tech: [
            "Next.js",
            "TypeScript",
            "Redux Toolkit",
            "Stripe",
            "Algolia",
            "Firebase Auth",
            "Formik",
            "Yup",
            "Vercel",
          ],
          github: "",
          external: "https://www.koala.health/",
          ios: null,
          android: null,
          company: "Upstatement",
        },
        html: "",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2021-07-01",
          title: "Philadelphia Inquirer Sports Scoreboards",
          tech: ["React", "TypeScript", "Stats Perform API"],
          github: "",
          external: "https://www.inquirer.com/sports/",
          ios: null,
          android: null,
          company: "Upstatement",
        },
        html: "",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2021-06-01",
          title: "Vanderbilt Design System",
          tech: ["Twig", "Puppy", "JS"],
          github: "",
          external: "https://www.vanderbilt.edu/",
          ios: null,
          android: null,
          company: "Upstatement",
        },
        html: "",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2020-09-15",
          title: "Michelle Wu for Boston Grassroots Toolkit",
          tech: ["Gatsby", "Styled Components"],
          github: "",
          external: "https://toolkit.michelleforboston.com/",
          ios: null,
          android: null,
          company: "Upstatement",
        },
        html: "",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2020-08-02",
          title: "The 19th News",
          tech: [
            "WordPress",
            "Timber",
            "Gutenberg",
            "PHP",
            "JS",
            "Mailchimp",
            "AMP",
          ],
          github: "",
          external: "https://19thnews.org/",
          ios: null,
          android: null,
          company: "Upstatement",
        },
        html: "",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2020-07-16",
          title: "Northeastern CSSH",
          tech: [
            "WordPress",
            "Timber",
            "WordPress Multisite",
            "PHP",
            "Algolia",
            "JS",
          ],
          github: "",
          external: "https://cssh.northeastern.edu/",
          ios: null,
          android: null,
          company: "Upstatement",
        },
        html: "",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2020-03-27",
          title: "Integrating Algolia Search with WordPress Multisite",
          tech: ["Algolia", "WordPress", "PHP"],
          github: "",
          external:
            "https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c",
          ios: null,
          android: null,
          company: "Upstatement",
        },
        html: "<p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2020-01-10",
          title: "Time to Have More Fun",
          tech: ["Next.js", "Tailwind CSS", "Firebase"],
          github: "https://github.com/bchiang7/time-to-have-more-fun",
          external: "https://time-to-have-more-fun.now.sh/",
          ios: null,
          android: null,
          company: "",
        },
        html: "<p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2019-11-25",
          title: "Upstatement.com",
          tech: ["Nuxt", "Vue", "Prismic"],
          github: "",
          external: "https://www.upstatement.com/",
          ios: null,
          android: null,
          company: "Upstatement",
        },
        html: "",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2019-11-12",
          title: "Building a Headless Mobile App CMS From Scratch",
          tech: ["Node", "Express", "Firebase", "Vue"],
          github: "",
          external:
            "https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9",
          ios: null,
          android: null,
          company: "Upstatement",
        },
        html: "<p>Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2019-11-12",
          title: "Moms Demand Action Mobile App",
          tech: ["NativeScript Vue", "iOS", "Android"],
          github: "",
          external: "https://www.upstatement.com/work/moms-demand-action/",
          ios: "https://apps.apple.com/us/app/demand-action/id1475502876",
          android:
            "https://play.google.com/store/apps/details?id=com.momsdemandaction.app",
          company: "Upstatement",
        },
        html: "",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2019-07-15",
          title: "OctoProfile",
          tech: ["Next.js", "Chart.js", "GitHub API"],
          github: "https://github.com/bchiang7/octoprofile",
          external: "https://octoprofile.now.sh",
          ios: null,
          android: null,
          company: null,
        },
        html: "<p>A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2018-12-29",
          title: "Google Keep Clone",
          tech: ["Vue", "Firebase"],
          github: "https://github.com/bchiang7/google-keep-vue-firebase",
          external: "https://keep-vue.netlify.com/",
          ios: null,
          android: null,
          company: null,
        },
        html: "<p>A simple Google Keep clone built with Vue and Firebase.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2018-12-18",
          title: "Spotify Profile",
          tech: ["React", "Express", "Styled Components"],
          github: "https://github.com/bchiang7/spotify-profile",
          external: "https://spotify-profile.herokuapp.com/",
          ios: null,
          android: null,
          company: null,
        },
        html: "<p>A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2018-12-01",
          title: "Devoted Health",
          tech: ["Gatsby", "TypeScript", "Algolia"],
          github: "",
          external: "https://www.devoted.com/",
          ios: null,
          android: null,
          company: "Upstatement",
        },
        html: "<p>A site for a revolutionary healthcare company, including an Algolia instant search integration</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2018-10-01",
          title: "Flagship Pioneering",
          tech: ["Craft CMS", "Chart.js"],
          github: "",
          external: "https://www.flagshippioneering.com/",
          ios: null,
          android: null,
          company: "Upstatement",
        },
        html: "<p>A marketing site for an ambitious life sciences venture capital company.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2018-05-01",
          title: "blistabloc",
          tech: ["WordPress", "Timber", "WooCommerce"],
          github: "",
          external: "https://blistabloc.com/",
          ios: null,
          android: null,
          company: "Scout",
        },
        html: "<p>Custom WordPress theme and e-commerce site built with Timber and WooCommerce for blistabloc, a start-up selling the only reactive shoe insert that prevents blisters from forming.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2018-04-20",
          title: "Spotify’s Top Tracks of 2017",
          tech: ["R", "Spotify Web API"],
          github: "https://github.com/bchiang7/spotify-top-tracks-2017",
          external: "",
          ios: null,
          android: null,
          company: "Northeastern",
        },
        html: "<p>R Project for my Data Science class at Northeastern to analyze the top Spotify tracks of 2017 and their audio features.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2017-12-27",
          title: "Halcyon Theme",
          tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
          github: "https://github.com/bchiang7/halcyon-site",
          external: "https://halcyon-theme.netlify.com/",
          ios: null,
          android: null,
          company: null,
        },
        html: '<p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode" target="_blank" rel="nofollow noopener noreferrer">Visual Studio Marketplace</a>, <a href="https://packagecontrol.io/packages/Halcyon%20Theme" target="_blank" rel="nofollow noopener noreferrer">Package Control</a>, <a href="https://atom.io/themes/halcyon-syntax" target="_blank" rel="nofollow noopener noreferrer">Atom Package Manager</a>, and <a href="https://www.npmjs.com/package/hyper-halcyon-theme" target="_blank" rel="nofollow noopener noreferrer">npm</a>.</p>',
      },
    },
    {
      node: {
        frontmatter: {
          date: "2017-12-01",
          title: "Apple Music Embeddable Web Player Widget",
          tech: ["MusicKit.js", "JS", "SCSS"],
          github: "",
          external: "https://tools.applemusic.com/en-us",
          ios: null,
          android: null,
          company: "Apple",
        },
        html: '<p>Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging <a href="https://developer.apple.com/documentation/musickitjs" target="_blank" rel="nofollow noopener noreferrer">MusicKit.js</a>. Read more about this project on <a href="https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/" target="_blank" rel="nofollow noopener noreferrer">9to5Mac</a>.</p>',
      },
    },
    {
      node: {
        frontmatter: {
          date: "2017-11-01",
          title: "Apple Music Facebook Messenger Integration",
          tech: ["Ember", "JS", "SCSS"],
          github: "",
          external:
            "https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming",
          ios: null,
          android: null,
          company: "Apple",
        },
        html: '<p>Facebook Messenger chat bot extension featuring authentication and full song streaming from within the Messenger app. Read more about it on <a href="https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming" target="_blank" rel="nofollow noopener noreferrer">The Verge</a>.</p>',
      },
    },
    {
      node: {
        frontmatter: {
          date: "2017-10-01",
          title: "Personal Website V3",
          tech: ["Jekyll", "SCSS", "JS"],
          github: "https://github.com/bchiang7/bchiang7.github.io",
          external: "https://bchiang7.github.io/v3/",
          ios: null,
          android: null,
          company: null,
        },
        html: "<p>Third iteration of my personal website built with Jekyll and hosted on GitHub Pages.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2017-08-01",
          title: "Interventions",
          tech: ["Jekyll", "SCSS", "JS"],
          github: "",
          external: "https://interventions.design/",
          ios: null,
          android: null,
          company: "Scout",
        },
        html: "<p>Interactive marketing website for Northeastern's first annual student-led design conference, Interventions.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2017-06-22",
          title: "Lonely Planet DBMS",
          tech: ["Python", "MySQL", "Flask", "JS"],
          github: "https://github.com/bchiang7/CS3200-Project",
          external: "",
          ios: null,
          android: null,
          company: "Northeastern",
        },
        html: "<p>A simple web application that allows users to filter through and leave reviews in a database of Lonely Planet's Top 500 Travel Destinations.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2017-04-03",
          title: "myNEU Redesign",
          tech: ["Jekyll", "SCSS", "JS"],
          github: "https://github.com/bchiang7/Redesign-myNEU",
          external: "https://bchiang7.github.io/Redesign-myNEU/",
          ios: null,
          android: null,
          company: "Northeastern",
        },
        html: "<p>Student web portal prototype built after conducting multiple rounds of user testing that aimed to improve the current portal to provide students at Northeastern University with a better user experience.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2017-03-01",
          title: "Crowd DJ",
          tech: ["React", "Firebase", "Spotify API"],
          github: "https://github.com/crowddj/crowddj-react",
          external: "",
          ios: null,
          android: null,
          company: "HackBeanpot 2017",
        },
        html: "<p>Web app that allows people to crowdsource a party's music queue. Allows people to request songs, upvote songs, rate songs, etc. so the DJ can see how the crowd is feeling and queue songs accordingly. Won Best UI/UX Design at Hackbeanpot 2017.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2016-12-01",
          title: "Personal Website V2",
          tech: ["Jekyll", "SCSS", "JS"],
          github: "https://github.com/bchiang7/v2",
          external: "https://bchiang7.github.io/v2/",
          ios: null,
          android: null,
          company: null,
        },
        html: "<p>Second iteration of my personal website. Designed and developed with a conscious effort to avoid using any superfluous frameworks like Bootstrap.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2016-11-16",
          title: "Weather Widget",
          tech: ["Node", "Express", "EJS"],
          github: "https://github.com/bchiang7/DemoWebApp",
          external: "http://quiet-dusk-89245.herokuapp.com/",
          ios: null,
          android: null,
          company: null,
        },
        html: "<p>Simple weather app made with Node.js, Express, and Heroku. Utilized the OpenWeatherMap API and Google Maps API.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2016-11-01",
          title: "Screentime 2.0",
          tech: ["Cordova", "Backbone", "Marionette"],
          github: "",
          external:
            "https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents",
          ios: null,
          android:
            "https://play.google.com/store/apps/details?id=com.starry.management&hl=en_US",
          company: "Starry",
        },
        html: "<p>Starry Station android app feature that provided users with the ability to easily filter content, pause the internet, and even create custom rules for blocking apps like Facebook and Twitter right from their phones.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2016-08-01",
          title: "React Profile",
          tech: ["React", "CSS"],
          github: "https://github.com/bchiang7/react-profile",
          external: "https://bchiang7.github.io/react-profile/",
          ios: null,
          android: null,
          company: null,
        },
        html: "<p>Online version of my 2016 resume made for fun. I was interested in learning React.js, so I found a simple tutorial and it spun into a weekend project.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2016-04-01",
          title: "CourseSource",
          tech: ["Angular", "Node", "Express", "MongoDB"],
          github:
            "https://github.com/bchiang7/WebDevSpring2016/tree/master/public/project",
          external: "",
          ios: null,
          android: null,
          company: "Northeastern",
        },
        html: "<p>Web application built on the MEAN (MongoDB, Express, Angular, Node) stack with the intention of providing Northeastern students a better experience browsing the courses offered at Northeastern.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2016-03-01",
          title: "Personal Website V1",
          tech: ["HTML", "CSS", "JS", "Bootstrap"],
          github: "https://github.com/bchiang7/v1",
          external: "https://bchiang7.github.io/v1/",
          ios: null,
          android: null,
          company: null,
        },
        html: "<p>My first portfolio website I designed and built in 2014. I learned quite a bit about HTML, CSS, and SEO. Since then, I think my web development and design skills have improved immensely.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2016-01-01",
          title: "Fontipsums",
          tech: ["HTML", "SCSS"],
          github: "https://github.com/bchiang7/fontipsums/",
          external: "http://bchiang7.github.io/fontipsums/",
          ios: null,
          android: null,
          company: null,
        },
        html: "<p>Simple website to display some of my favorite font pairings combined with some fun lorem ipsum variations found on the web.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2015-12-20",
          title: "NU Women in Tech",
          tech: ["Jekyll", "Bootstrap"],
          github: "https://github.com/nuwit/website",
          external: "https://nuwit.ccs.neu.edu/",
          ios: null,
          android: null,
          company: "Northeastern",
        },
        html: "<p>Complete overhaul and redesign of NU Women in Tech’s club website using Jekyll, built while serving as web chair on the e-board.</p>",
      },
    },
    {
      node: {
        frontmatter: {
          date: "2015-12-01",
          title: "One Card For All",
          tech: ["HTML", "SCSS", "JS", "jQuery"],
          github: "",
          external: "https://us.mullenlowe.com/work/one-card-for-all/",
          ios: null,
          android: null,
          company: "MullenLowe",
        },
        html: '<p>Interactive holiday site for MullenLowe built around an algorithm that generated a holiday greeting to each and every person on the planet. Check out this short <a href="https://us.mullenlowe.com/work/one-card-for-all/" target="_blank" rel="nofollow noopener noreferrer">video</a> describing the project.</p>',
      },
    },
    {
      node: {
        frontmatter: {
          date: "2015-10-01",
          title: "JetBlue HumanKinda",
          tech: ["Tumblr", "HTML", "CSS", "JS"],
          github: "",
          external: "https://us.mullenlowe.com/work/humankinda/",
          ios: null,
          android: null,
          company: "MullenLowe",
        },
        html: '<p>Tumblr site complementing JetBlue\'s HumanKinda campaign and documentary. Includes an interactive quiz to determine how "HumanKinda" you are. Learn more about this project <a href="https://us.mullenlowe.com/work/humankinda/" target="_blank" rel="nofollow noopener noreferrer">here</a>.</p>',
      },
    },
  ];
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef<any[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    // sr.reveal(revealTitle.current, srConfig());
    // sr.reveal(revealTable.current, srConfig(200, 0));
    // revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  return (
    <Layout>
      {/* <Helmet title="Archive" /> */}

      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">Archive</h1>
          <p className="subtitle">A big list of things I’ve worked on</p>
        </header>

        <StyledTableContainer ref={revealTable}>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="hide-on-mobile">Made at</th>
                <th className="hide-on-mobile">Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 &&
                projects.map(({ node }: any, i: number) => {
                  const {
                    date,
                    github,
                    external,
                    ios,
                    android,
                    title,
                    tech,
                    company,
                  } = node.frontmatter;
                  return (
                    <tr
                      key={i}
                      ref={(el: any) => (revealProjects.current[i] = el)}
                    >
                      <td className="overline year">{`${new Date(
                        date
                      ).getFullYear()}`}</td>

                      <td className="title">{title}</td>

                      <td className="company hide-on-mobile">
                        {company ? <span>{company}</span> : <span>—</span>}
                      </td>

                      <td className="tech hide-on-mobile">
                        {tech?.length > 0 &&
                          tech.map((item: any, i: number) => (
                            <span key={i}>
                              {item}
                              {""}
                              {i !== tech.length - 1 && (
                                <span className="separator">&middot;</span>
                              )}
                            </span>
                          ))}
                      </td>

                      <td className="links">
                        <div>
                          {external && (
                            <Link href={external} aria-label="External Link">
                              <Icon name="External" />
                            </Link>
                          )}
                          {github && (
                            <Link href={github} aria-label="GitHub Link">
                              <Icon name="GitHub" />
                            </Link>
                          )}
                          {ios && (
                            <Link href={ios} aria-label="Apple App Store Link">
                              <Icon name="AppStore" />
                            </Link>
                          )}
                          {android && (
                            <Link
                              href={android}
                              aria-label="Google Play Store Link"
                            >
                              <Icon name="PlayStore" />
                            </Link>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </StyledTableContainer>
      </main>
    </Layout>
  );
};

export default ArchivePage;

const StyledTableContainer = styled.div`
  margin: 100px -20px;

  @media (max-width: 768px) {
    margin: 50px -10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      &:first-child {
        padding-left: 20px;

        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }

      &.company {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }

      &.tech {
        font-size: var(--fz-xxs);
        font-family: var(--font-mono);
        line-height: 1.5;
        .separator {
          margin: 0 5px;
        }
        span {
          display: inline-block;
        }
      }

      &.links {
        min-width: 100px;

        div {
          display: flex;
          align-items: center;

          a {
            ${({ theme }) => theme.mixins.flexCenter};
            flex-shrink: 0;
          }

          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
