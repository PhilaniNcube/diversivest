export interface ProjectType  {
    name: string
    url: string
    image: string
    subtitle: string
}

const projects: ProjectType[] = [
    {
        name: 'Popp Inn',
        url: 'https://poppinn.co.za',
        image: '/images/poppinn.png',
        subtitle: 'Travel and accommodation website'
},
    {
        name: 'Hotwater24',
        url: 'https://hotwater24.com',
        image: '/images/hotwater24.png',
        subtitle: 'Gas geyser installation & sales'
    },

    {
        name: 'Ink Finance',
        url: 'https://inkfinance.co.za',
        image: '/images/inkfinance.png',
        subtitle: 'Short term finace, payday loans and investments'
    },



    {
        name: 'Capegadgets',
        url: 'https://www.capegadgets.co.za',
        image: '/images/capegadgets.png',
        subtitle: 'Ecommorce website for university students'
    },
    {
        name: 'Skin Inc',
        url: 'https://www.skininc.co.za',
        image: '/images/skininc.png',
        subtitle: 'Skin care product range and feminine hygiene products'
    },



];

export default projects
