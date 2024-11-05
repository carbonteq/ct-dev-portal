// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Carbonteq Developer Portal",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      customCss: ["./src/styles/custom.css"],

      sidebar: [
        {
          label: "Portal Intro",
          slug: "",
        },
        {
          label: "Best Practices & Principles",
          items: [
            { label: "Overview", slug: "best-practices/overview" },
            {
              label: "Solid Principles",
              slug: "best-practices/solid",
            },
            {
              label: "Javascript/Typescript",
              slug: "best-practices/javascript",
            },

            {
              label: "Backend",
              items: [
                {
                  label: "Best Practices",
                  slug: "best-practices/backend/best_practices",
                },
                {
                  label: "Principles",
                  slug: "best-practices/backend/principles",
                },
                {
                  label: "Architecture",
                  slug: "best-practices/backend/architecture",
                },
                {
                  label: "Stack/Tooling",
                  slug: "best-practices/backend/stack_tooling",
                },
              ],
            },

            {
              label: "Frontend",
              items: [
                {
                  label: "Best Practices",
                  slug: "best-practices/frontend/best_practices",
                },
                {
                  label: "Principles",
                  slug: "best-practices/frontend/principles",
                },
                {
                  label: "Architecture",
                  slug: "best-practices/frontend/architecture",
                },
                {
                  label: "Stack/Tooling",
                  slug: "best-practices/frontend/stack_tooling",
                },
              ],
            },

            {
              label: "Proposals",
              slug: "best-practices/proposals/template",
            },
          ],
        },
        {
          label: "Training",
          items: [
            {
              label: "NodeJS & TypeScript",
              items: [
                {
                  label: "Todo App",
                  slug: "training/nodejs-typescript/todo",
                },
                {
                  label: "CQRS Booking",
                  slug: "training/nodejs-typescript/cqrs-booking",
                },
              ],
            },
            {
              label: "Quality Assurance",
              items: [
                {
                  label: "Task for Mobile QA Automation",
                  slug: "training/quality-assurance/qa-automation",
                },
                {
                  label: "Task for Web QA Automation",
                  slug: "training/quality-assurance/qa-web",
                },
              ],
            },
            {
              label: "React & Redux",
              items: [
                {
                  label: "Calendar Carousel",
                  slug: "training/react-redux/calendarcarousal",
                },
                {
                  label: "GitHub Search",
                  slug: "training/react-redux/githubsearch",
                },
                {
                  label: "User Search",
                  slug: "training/react-redux/usersearch",
                },
              ],
            },
            {
              label: "Backend",
              items: [
                {
                  label: "Build Your Own K8s Container",
                  slug: "training/backend/build_your_own_k8_container",
                },
              ],
            },
            {
              label: "Architecture",
              items: [
                {
                  label: "Real Estate System Design",
                  slug: "training/architecture/realestatesystemdesign",
                },
              ],
            },
          ],
        },
        {
          label: "Build Your Own X",
          items: [
            {
              label: "Backend",
              items: [
                {
                  label: "Build Your Own Single Sign On Server",
                  slug: "build-your-own-x/backend/byo-sso",
                },
              ],
            },
            {
              label: "Cloud Architectural Patterns",
              items: [
                {
                  label: "Circuit Breaker",
                  slug: "build-your-own-x/cloud-architectural-patterns/circuitbreaker",
                },
                {
                  label: "Priority Queue",
                  slug: "build-your-own-x/cloud-architectural-patterns/priorityqueue",
                },
                {
                  label: "Rate Limiter",
                  slug: "build-your-own-x/cloud-architectural-patterns/ratelimiter",
                },
              ],
            },
            {
              label: "Frontend",
              items: [
                {
                  label: "Virtual DOM",
                  slug: "build-your-own-x/frontend/virtual_dom",
                },
              ],
            },
            {
              label: "General",
              items: [
                {
                  label: "Forth Interpreter",
                  slug: "build-your-own-x/general/forth_interpreter",
                },
              ],
            },
            {
              label: "Graphics",
              items: [
                {
                  label: "Interpolation",
                  slug: "build-your-own-x/graphics/interpolation",
                },
                {
                  label: "Minimum Bounding Box",
                  slug: "build-your-own-x/graphics/minimumboundingbox",
                },
                {
                  label: "Point in Polygon",
                  slug: "build-your-own-x/graphics/pointinpolygon",
                },
              ],
            },
            {
              label: "Networking",
              items: [
                {
                  label: "DNS Client",
                  slug: "build-your-own-x/networking/dns_client",
                },
                {
                  label: "Network Scanner",
                  slug: "build-your-own-x/networking/networkscanner",
                },
                {
                  label: "Peer-to-Peer Communications",
                  slug: "build-your-own-x/networking/peertopeercommunications",
                },
                {
                  label: "TCP Tunnel",
                  slug: "build-your-own-x/networking/tcp_tunnel",
                },
                {
                  label: "WebSockets",
                  slug: "build-your-own-x/networking/websockets",
                },
              ],
            },
          ],
        },

        {
          label: "Learning Resources",
          items: [
            {
              label: "Frontend",
              items: [
                {
                  label: "Beginner",
                  items: [
                    {
                      label: "Courses",
                      slug: "learning-resources/frontend/beginner/courses",
                    },
                    {
                      label: "Blogs, Videos & Tools",
                      slug: "learning-resources/frontend/beginner/tutorials",
                    },
                  ],
                },
                {
                  label: "Advanced",
                  items: [
                    {
                      label: "Courses",
                      slug: "learning-resources/frontend/advanced/courses",
                    },
                    {
                      label: "Blogs, Videos & Tools",
                      slug: "learning-resources/frontend/advanced/tutorials",
                    },
                  ],
                },
                {
                  label: "Utilities",
                  slug: "learning-resources/frontend/utilities",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
