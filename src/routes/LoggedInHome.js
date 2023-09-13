import logo from '../logo.png'
import IconText from '../components/shared/IconText';
import TextWithHover from '../components/shared/TextWitHover';
import { Icon } from "@iconify/react";


const focusCardsData = [
    {
        title: "Peaceful Piano",
        description: "Relax and indulge with beautiful piano pieces",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with this music",
        imgUrl: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
        title: "Focus Flow",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
];

const playlistdata = [
    { titleText: "Focus", cards: focusCardsData },
    { titleText: "Calm", cards: focusCardsData },
    { titleText: "Meditation", cards: focusCardsData }
];

const LoggedInHomeComponent = () => {
    return (<div className="h-full w-full flex">
        {/* left panel */}
        <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
            <div>

                {/* logo */}
                <div className="logo p-5 w-full flex items-center justify-center">
                    <img src={logo} width="50" height="50" className="mr-2" alt="logo" />
                    <h1 className="text-2xl font-semibold text-center text-white">Musiverse</h1>

                </div>
                <div className='pt-5'>

                    <IconText
                        iconName={"material-symbols:home"}
                        displayText={"Home"}
                        active
                    />
                    <IconText
                        iconName={"material-symbols:search-rounded"}
                        displayText={"Search"}
                    />
                    <IconText
                        iconName={"icomoon-free:books"}
                        displayText={"Library"}
                    />
                    <IconText
                        iconName={"material-symbols:library-music-sharp"}
                        displayText={"My Music"}
                    />
                </div>
                <div className="pt-5">
                    <IconText
                        iconName={"material-symbols:add-box"}
                        displayText={"Create Playlist"}
                    />
                    <IconText
                        iconName={"mdi:cards-heart"}
                        displayText={"Liked Songs"}
                    />
                </div>
            </div>
            <div className="px-5">
                <div className="border border-gray-400 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                    <Icon icon="carbon:earth-europe-africa" />
                    <div className="ml-2 text-sm font-semibold">
                        English
                    </div>
                </div>
            </div>
        </div>
        {/* right panel */}
        <div className='h-full w-4/5 bg-app-black overflow-auto'>
            <div className='navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end'>
                <div className='w-1/2 flex h-full'>
                    <div className='w-2/3 flex justify-around items-center'>
                        <TextWithHover displayText={"Premium"} />
                        <TextWithHover displayText={"Support"} />
                        <TextWithHover displayText={"Download"} />
                        <div className='h-1/2 border border-white'></div>
                    </div>
                    <div className='w-1/3 flex justify-around h-full items-center'>
                        <TextWithHover displayText={"Upload Songs"} />
                        <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer'>
                            SK
                        </div>
                    </div>
                </div>
            </div>
            <div className='content p-8 overflow-auto'>
                {
                    playlistdata.map((item) => {
                        return (
                            <PlaylistView titleText={item.titleText} cardsData={item.cards} />
                        );
                    })
                }
            </div>
        </div>
    </div>);
}

const PlaylistView = ({ titleText, cardsData }) => {
    return (
        <div className='text-white'>
            <div className='text-2xl font-semibold mb-5'>
                {titleText}
            </div>
            <div className='w-full flex justify-between space-x-4'>
                {cardsData.map((item) => {
                    return (
                        <Card
                            title={item.title}
                            description={item.description}
                            imgUrl={item.imgUrl}
                        />
                    );
                })}
            </div>
        </div>)
}

const Card = ({ title, description, imgUrl }) => {
    return (
        <div className='bg-black bg-opacity-40  rounded-lg w-1/5 p-4'>
            <div className='pb-4 pt-2'>
                <img className='w-full rounded-md h-50'
                    src={imgUrl}
                    alt="img"
                />
            </div>
            <div className='text-white font-semibold py-2'>
                {title}
            </div>
            <div className='text-gray-500 text-sm '>
                {description}

            </div>

        </div>
    )
}
export default LoggedInHomeComponent;