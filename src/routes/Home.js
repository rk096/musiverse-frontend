import logo from '../logo.png'
import IconText from '../components/shared/IconText';
import TextWithHover from '../components/shared/TextWitHover';
import { Icon } from "@iconify/react";

const Home = () => {
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
        <div className='h-full w-4/5 bg-app-black'>
            <div className='navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end'>
                <div className='w-1/2 flex h-full'>
                    <div className='w-3/5 flex justify-around items-center'>
                        <TextWithHover displayText={"Premium"} />
                        <TextWithHover displayText={"Support"} />
                        <TextWithHover displayText={"Download"} />
                        <div className='h-1/2 border border-white'></div>
                    </div>
                    <div className='w-2/5 flex justify-around h-full items-center'>
                        <TextWithHover displayText={"Sign up"} />
                        <div className='bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer'>
                            Log in
                        </div>
                    </div>
                </div>
            </div>
            <div className='content p-8'>
                <PlaylistView />
            </div>
        </div>
    </div>);
}

const PlaylistView = () => {
    return (
        <div className='text-white'>
            <div className='text-2xl font-semibold mb-5'>
                Focus
            </div>
            <div className='w-full flex justify-between'>
                <Card title="pianoddvs" description="jshfjfddhf" />
                <Card title="piano" description="jshfjfddhfdcsf" />
                <Card title="piano" description="jshfjfddhf" />
                <Card title="piano" description="jshfjfddhf" />
                <Card title="piano" description="jshfjfddhf" />
            </div>
        </div>)
}

const Card = ({ title, description }) => {
    return (
        <div className='bg-black bg-opacity-60  rounded-lg w-1/6 p-4'>
            <div className='pb-4 pt-2'>
                <img className='w-full rounded-md'
                    src="https://picsum.photos/400/200"
                    alt="img"
                />
            </div>
            <div className='text-white text-sm font-semibold'>
                {title}
            </div>
            <div className='text-gray-500 text-sm '>
                {description}

            </div>

        </div>
    )
}
export default Home;