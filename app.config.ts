// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'Python Guide',
    description: 'A guide to your python journey ',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

    socials: {
      twitter: 'somanshubha',
      github: 'somanshubhardwaj',

      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      },

      instagram: 'https://www.instagram.com/bhardwaj.somanshu/'
    },

    github: {
      dir: '/content/',
      branch: 'main',
      repo: 'nuxtproject',
      owner: 'somanshubhardwaj',
      edit: true
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: 'A Python Guide'
    },

    footer: {
      credits: {
        text: 'Brought to you by Somanshu Bhardwaj',
        href: 'https://somanshubhardwaj.vercel.app'
      }
    }
  }
})